var groupController = function () {
    var groupModel = require('../models/groupModel')();
    var path = require('path');

    // var checkRequiredFields = function(object, required) {
    //   var missingFields = [];
    //   Object.keys(object).forEach(key=> {
    //     if(required[key] && !object[key]) missingFields.push(key);
    //   });
    //   return { valid: missingFields.length ? false : true, fields: missingFields };
    // }

    var createGroup = function (req, res) {
      if(!req.body.name) {
        res.status(400).json({ message: 'Group name required', required: ['name']});
      } else {
        groupModel.createGroup(req.body, function (err, rows) {
          if (!err) {
            var group = Object.assign({}, req.body, {id: rows.insertId});
            res.status(200).json(group);
          } else {
            res.status(err.code).json({ error: err });
          }
        });
      }
    };

    var getGroupById = function (req, res) {
      if(!req.params.id) {
        res.status(400).json({ message: 'Group Id required', required: ['id'] });
      } else {
        groupModel.getGroupById(req.params.id, function (err, rows) {
          if (!err) {
            res.status(200).json(rows);
          } else {
           res.status(err.code).json({ error: err });
          }
        });
      }
    };

    var getGroups = function (req, res) {
      groupModel.getGroups(function (err, rows) {
        if (!err) {
          if(rows.length > 0) {
            res.status(200).json(rows);
          } else {
            res.status(404).json({ message: 'No Data' });
          }
        } else {
           res.status(err.code).json({ error: err });
        }
      });
    };

    var getGroupsByOrganizationId = function (req, res) {
      if(!req.params.organizationId) {
        res.status(400).json({ message: 'Organization Id required', required: ['organizationId'] });
      } else {
        groupModel.getGroupsByOrganizationId(req.params.organizationId, function (err, rows) {
          if (!err) {
            if(rows.length > 0) {
              res.status(200).json(rows);
            } else {
              res.status(404).json({ message: 'No Data' });
            }
          } else {
             res.status(err.code).json({ error: err });
          }
        });
      }
    };

    return {
        createGroup: createGroup,
        getGroupById: getGroupById,
        getGroups: getGroups,
        getGroupsByOrganizationId: getGroupsByOrganizationId
    };
};

module.exports = groupController;
