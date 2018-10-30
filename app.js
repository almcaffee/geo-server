var express = require('express');
var http = require('http');
var router = express.Router();
var bodyParser = require('body-parser');
var mysql = require('mysql');
var app = express();
var port = process.env.PORT;
var path = require('path');

/* Test DB Connection */
// const getConnection = require('./config/connection');
// console.log(getConnection);

/* Swagger API Docs */
var swaggerUi = require('swagger-ui-express');
var swaggerDocument = require('./swagger.json');

/* Parse API calls/data */
app.use(bodyParser.urlencoded({extended: true})); //support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.json()); //support parsing of application/json type post data

/* Set headers */
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // No cross origin requests?
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

/* Non server routes for both apps and swagger */
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/admin', express.static('admin'));
app.use('/dashboard', express.static('dashboard'));

/* Unable to get node running in existing instance using seperate deploy folders*/
// app.use('/admin', express.static('static/public/admin'));
// app.use('/dashboard', express.static('static/public/dashboard'));

/* Define routers for API */
var adminRouter = require('./routes/adminRoutes')();
var userRouter = require('./routes/userRoutes')();
var commonRouter = require('./routes/commonRoutes')();
app.use('/api/admin', adminRouter);
app.use('/api/user', userRouter);
app.use('/api/common', commonRouter);

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  } else {
    next(err);
  }
});

app.use(express.static('assets'));
app.use('*', express.static('wwwroot'));

process.on('warning', (warning) => {
  console.warn(warning.name);    // Print the warning name
  console.warn(warning.message); // Print the warning message
  console.warn(warning.stack);   // Print the stack trace
});

http.createServer(app).listen(port, function () {
    console.log('The api is running on port '+process.env.PORT);
});
