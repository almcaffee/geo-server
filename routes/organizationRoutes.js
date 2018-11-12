var routes = function () {
    var express = require('express');
    var organizationRouter = express.Router();
    var organizationController = require('../controllers/organizationController')();

    // Get
    organizationRouter.get('/:id', organizationController.getOrganizationById);
    organizationRouter.get('*', organizationController.getOrganizations);

    // Post
    organizationRouter.post('*', organizationController.createOrganization);

    // Put
    organizationRouter.put('/location', organizationController.setOrganizationLocation);

    return organizationRouter;
};

module.exports = routes;
