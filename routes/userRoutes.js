var routes = function () {
    var express = require('express');
    var userRouter = express.Router();
    var userController = require('../controllers/userController')();

    // TODO: split routes/controllers/models
    // Faster prototyping in same files

    // Get
    userRouter.get('/test', userController.test);
    userRouter.get('/groups', userController.getGroups);
    userRouter.get('/group/:id', userController.getGroupById);
    userRouter.get('/network/groupId/:groupId', userController.getNetworkByGroupId);
    userRouter.get('/network/organizationId/:organizationId', userController.getNetworkByOrganizationId);
    userRouter.get('/network/userId/:userId', userController.getNetworkByUserId);
    userRouter.get('/network', userController.getNetwork); // TODO: change in dashboard
    userRouter.get('/organizations', userController.getOrganizations);
    userRouter.get('/organization/:id', userController.getOrganizationById);
    userRouter.get('/id/:id', userController.getUserById);
    userRouter.get('/virginia', userController.getVirginia);
    userRouter.get('/all', userController.getUsers);

    // Post
    userRouter.post('/network', userController.addNetworkById);
    userRouter.post('/group/create', userController.createGroup);
    userRouter.post('/organization/create', userController.createOrganization);
    userRouter.post('/create', userController.createUser);

    // Put
    userRouter.put('/organization/location', userController.setOrganizationLocation);
    userRouter.put('/location', userController.setUserLocation);

    return userRouter;
};

module.exports = routes;
