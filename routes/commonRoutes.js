var routes = function () {
    var express = require('express');
    var commonRouter = express.Router();
    var commonController = require('../controllers/commonController')();

    // Get
    commonRouter.get('/test', commonController.test);

    return commonRouter;
};

module.exports = routes;
