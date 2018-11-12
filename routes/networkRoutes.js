var routes = function () {
    var express = require('express');
    var networkRouter = express.Router();
    var networkController = require('../controllers/networkController')();

    // Get
    networkRouter.get('/group/:groupId', networkController.getNetworkByGroupId);
    networkRouter.get('/organizationId/:organizationId', networkController.getNetworkByOrganizationId);
    networkRouter.get('/userId/:userId', networkController.getNetworkByUserId);
    networkRouter.get('/virginia', networkController.getVirginia);
    networkRouter.get('*', networkController.getNetwork);

    // Post
    networkRouter.post('*', networkController.addNetworkById);

    return networkRouter;
};

module.exports = routes;
