var routes = function () {
    var express = require('express');
    var userRouter = express.Router();
    var userController = require('../controllers/userController')();

    // Get
    userRouter.get('/test', userController.test);
    userRouter.get('/network', userController.getNetwork);
    userRouter.get('/virginia', userController.getVirginia);

    return userRouter;
};

module.exports = routes;
