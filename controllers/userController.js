var userController = function () {
    var userModel = require('../models/userModel')();
    var path = require('path');
    var network = require('../json/network.json');
    var virginia = require('../json/virginia.json');

    var userRequiredFields = {
      firstName: true,
      lastName: true,
      address1: true,
      city: true,
      state: true,
      zip: true,
      email: true
    };

    var checkRequiredFields = function(object, required) {
      var missingFields = [];
      Object.keys(object).forEach(key=> {
        if(required[key] && !object[key]) missingFields.push(key);
      });
      return { valid: missingFields.length ? false : true, fields: missingFields };
    }

    var createUser = function (req, res) {
      var test = checkRequiredFields(req.body, userRequiredFields);
      if(!test.valid) {
        res.status(400).json({ message: 'Missing fields required', required: test.fields});
      } else {
        userModel.createUser(req.body, function (err, rows) {
          if (!err) {
            var user = Object.assign({}, req.body, {id: rows.insertId});
            res.status(200).json(user);
          } else {
            res.status(err.code).json({ error: err });
          }
        });
      }
    };


    var getUserById = function (req, res) {
      if(!req.params.id) {
        res.status(400).json({ message: 'User Id required', required: ['userId']});
      } else {
        userModel.getUserById(req.params.id, function (err, rows) {
          if (!err) {
            res.status(200).json(rows);
          } else {
            res.status(500).json({ error: err });
          }
        });
      }
    };

    var getUsersByGroupId = function (req, res) {
      if(!req.params.groupId) {
        res.status(400).json({message: 'Group Id required', required: ['groupId']});
      } else {
        let userId = req.params.userId ? req.params.userId : null;
        userModel.getUsersByGroupId(req.params.groupId, userId, function (err, rows) {
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

    var getUsersByOrganizationId = function (req, res) {
      if(!req.params.organizationId) {
        res.status(400).json({ message: 'Organization Id required', required: ['organizationId']});
      } else {
        let userId = req.params.userId ? req.params.userId : null;
        userModel.getUsersByOrganizationId(req.params.organizationId, userId, function (err, rows) {
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

    var getUsers = function (req, res) {
      userModel.getUsers(function (err, rows) {
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

    var setUserLocation = function (req, res) {
      if(!req.body.id) {
        res.status(400).json({ message: 'User Id required', required: ['id']});
      } else if(!req.body.lat) {
        res.status(400).json({ message: 'Latitude required', required: ['lat']});
      } else if(!req.body.lng) {
        res.status(400).json({ message: 'Longitude required', required: ['lng']});
      } else {
        userModel.setUserLocation(req.body.id, req.body.lat, req.body.lng, function (err, rows) {
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
        createUser: createUser,
        getUserById: getUserById,
        getUsers: getUsers,
        getUsersByGroupId: getUsersByGroupId,
        getUsersByOrganizationId: getUsersByOrganizationId,
        setUserLocation: setUserLocation
    };
};

module.exports = userController;
