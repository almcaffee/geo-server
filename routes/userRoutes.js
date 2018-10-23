var routes = function () {
    var express = require('express');
    var userRouter = express.Router();
    var userController = require('../controllers/userController')();

    // Get
    userRouter.get('/test', userController.test);
    userRouter.get('/network', userController.getNetwork);
    userRouter.get('/id/:id', userController.getUserById);
    userRouter.get('/virginia', userController.getVirginia);

    // Post
    userRouter.post('/location/userId/:id', userController.setUserLocation);

    // Put
    userRouter.put('/location/update/userId/:id', userController.updateUserLocation);

    return userRouter;
};

module.exports = routes;
