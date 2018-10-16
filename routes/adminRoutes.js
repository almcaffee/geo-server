var routes = function () {
    var express = require('express');
    var adminRouter = express.Router();
    var adminController = require('../controllers/adminController')();

    // Get
    adminRouter.get('/test', adminController.test);

    return adminRouter;
};

module.exports = routes;
