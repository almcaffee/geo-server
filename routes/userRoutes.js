var routes = function () {
    var express = require('express');
    var userRouter = express.Router();
    var userController = require('../controllers/userController')();

    // Get
    userRouter.get('/group/:id/userId/:userId', userController.getUsersByGroupId);
    userRouter.get('/group/:id', userController.getUsersByGroupId);
    userRouter.get('/organization/:id/userId/:userId', userController.getUsersByOrganizationId);
    userRouter.get('/organization/:id', userController.getUsersByOrganizationId);
    userRouter.get('/:id', userController.getUserById);
    userRouter.get('*', userController.getUsers);

    // Post
    userRouter.post('*', userController.createUser);

    // Put
    userRouter.put('/location', userController.setUserLocation);

    return userRouter;
};

module.exports = routes;
