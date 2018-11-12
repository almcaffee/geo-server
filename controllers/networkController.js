var networkController = function () {
    var networkModel = require('../models/networkModel')();
    var path = require('path');
    var network = require('../json/network.json');
    var virginia = require('../json/virginia.json');

    var addNetworkById = function (req, res) {
      if(!req.body.id) {
        res.status(400).json({ message: 'User Id required'});
      } else if(!req.body.groupId && !req.body.organizationId && !req.body.parentId && !req.body.childId) {
        res.status(400).json({ message: 'A secondary column value is required', required: ['groupId', 'childId', 'organizationId', 'parentId'], optional: ['groupId', 'childId', 'organizationId', 'parentId']});
      } else {
        networkModel.addNetworkById(req.body, function (err, rows) {
          if (!err) {
            var network = Object.assign({}, req.body, {id: rows.insertId});
            res.status(200).json(network);
          } else {
             res.status(err.code).json({ error: err });
          }
        });
      }
    };

    var getNetork = function (req, res) {
      res.status(200).send(network);
    };

    var getNetworkByGroupId = function (req, res) {
      if(!req.params.groupId) {
        res.status(400).json({ message: 'Group Id required', required: ['groupId'] });
      } else {
        networkModel.getNetworkByGroupId(req.params.groupId, function (err, rows) {
          if (!err) {
            res.status(200).json(rows);
          } else {
           res.status(err.code).json({ error: err });
          }
        });
      }
    };

    var getNetworkByOrganizationId = function (req, res) {
      if(!req.params.organizationId) {
        res.status(400).json({ message: 'Organization Id required', required: ['organizationId'] });
      } else {
        networkModel.getNetworkByOrganizationId(req.params.organizationId, function (err, rows) {
          if (!err) {
            res.status(200).json(rows);
          } else {
           res.status(err.code).json({ error: err });
          }
        });
      }
    };

    var getNetworkByUserId = function (req, res) {
      if(!req.params.userId) {
        res.status(400).json({ message: 'User Id required', required: ['userId'] });
      } else {
        networkModel.getNetworkByUserId(req.params.userId, function (err, rows) {
          if (!err) {
            res.status(200).json(rows);
          } else {
           res.status(err.code).json({ error: err });
          }
        });
      }
    };

    var getVirginia = function (req, res) {
      res.status(200).send(virginia);
    };

    return {
        addNetworkById: addNetworkById,
        getNetwork: getNetork,
        getNetworkByGroupId: getNetworkByGroupId,
        getNetworkByOrganizationId: getNetworkByOrganizationId,
        getNetworkByUserId: getNetworkByUserId,
        getVirginia: getVirginia
    };
};

module.exports = networkController;
