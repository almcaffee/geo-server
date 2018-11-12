var routes = function () {
    var express = require('express');
    var groupRouter = express.Router();
    var groupController = require('../controllers/groupController')();

    // TODO: split routes/controllers/models
    // Faster prototyping in same files

    // Get
    groupRouter.get('/organization/:organizationId', groupController.getGroupsByOrganizationId);
    groupRouter.get('/:id', groupController.getGroupById);
    groupRouter.get('*', groupController.getGroups);

    // Post
    groupRouter.post('*', groupController.createGroup);

    return groupRouter;
};

module.exports = routes;
