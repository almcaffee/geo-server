var userController = function () {
    var userModel = require('../models/userModel')();
    var path = require('path');
    var network = require('../json/network.json');
    var virginia = require('../json/virginia.json');

    var organizationRequiredFields = {
      name: true,
      address1: true,
      city: true,
      state: true,
      zip: true,
      phone: true,
      email: true
    };

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

    var test = function (req, res) {
      userModel.test(function (err, rows) {
          if (!err) {
             if(rows.length > 0) {
               res.status(200).json(rows);
             } else {
               res.status(404).json({ message: 'No Data' });
             }
          } else {
              res.status(500).json({ error: err });
          }
      });
    };

    var addNetworkById = function (req, res) {
      if(!req.body.id) {
        res.status(400).json({ message: 'User Id required'});
      } else if(!req.body.groupId && !req.body.organizationId && !req.body.parentId && !req.body.childId) {
        res.status(400).json({ message: 'A secondary column value is required', required: ['groupId', 'childId', 'organizationId', 'parentId'], optional: ['groupId', 'childId', 'organizationId', 'parentId']});
      } else {
        userModel.addNetworkById(req.body, function (err, rows) {
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

    var createGroup = function (req, res) {
      if(!req.body.name) {
        res.status(400).json({ message: 'Group name required', required: ['name']});
      } else {
        userModel.createGroup(req.body, function (err, rows) {
          if (!err) {
            var group = Object.assign({}, req.body, {id: rows.insertId});
            res.status(200).json(group);
          } else {
            res.status(err.code).json({ error: err });
          }
        });
      }
    };

    var createOrganization = function (req, res) {
      var test = checkRequiredFields(req.body, organizationRequiredFields);
      if(!test.valid) {
        res.status(400).json({ message: 'Missing fields required', required: test.fields});
      } else {
        userModel.createOrganization(req.body, function (err, rows) {
          if (!err) {
            var org = Object.assign({}, req.body, {id: rows.insertId});
            res.status(200).json(org);
          } else {
            res.status(err.code).json({ error: err });
          }
        });
      }
    };

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

    var getGroupById = function (req, res) {
      if(!req.params.id) {
        res.status(400).json({ message: 'Group Id required', required: ['id'] });
      } else {
        userModel.getGroupById(req.params.id, function (err, rows) {
          if (!err) {
            res.status(200).json(rows);
          } else {
           res.status(err.code).json({ error: err });
          }
        });
      }
    };

    var getGroups = function (req, res) {
      userModel.getGroups(function (err, rows) {
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
        userModel.getGroupsByOrganizationId(req.params.organizationId, function (err, rows) {
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

    var getNetork = function (req, res) {
      res.status(200).send(network);
    };

    var getNetworkByGroupId = function (req, res) {
      if(!req.params.groupId) {
        res.status(400).json({ message: 'Group Id required', required: ['groupId'] });
      } else {
        userModel.getNetworkByGroupId(req.params.groupId, function (err, rows) {
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
        userModel.getNetworkByOrganizationId(req.params.organizationId, function (err, rows) {
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
        userModel.getNetworkByUserId(req.params.userId, function (err, rows) {
          if (!err) {
            res.status(200).json(rows);
          } else {
           res.status(err.code).json({ error: err });
          }
        });
      }
    };

    var getOrganizationById = function (req, res) {
      if(!req.params.id) {
        res.status(400).json({ message: 'Organization Id required', required: ['id'] });
      } else {
        userModel.getOrganizationById(req.params.id, function (err, rows) {
          if (!err) {
            res.status(200).json(rows);
          } else {
             res.status(err.code).json({ error: err });
          }
        });
      }
    };

    var getOrganizations = function (req, res) {
      userModel.getOrganizations(function (err, rows) {
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
        userModel.getUsersByGroupId(req.params.groupId, function (err, rows) {
          if (!err) {
            res.status(200).json(rows);
          } else {
            res.status(500).json({ error: err });
          }
        });
      }
    };

    var getUsersByOrganizationId = function (req, res) {
      if(!req.params.organizationId) {
        res.status(400).json({ message: 'Organization Id required', required: ['organizationId']});
      } else {
        userModel.getUsersByOrganizationId(req.params.organizationId, function (err, rows) {
          if (!err) {
            res.status(200).json(rows);
          } else {
            res.status(500).json({ error: err });
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

    var getVirginia = function (req, res) {
      res.status(200).send(virginia);
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

    var setOrganizationLocation = function (req, res) {
      if(!req.body.id) {
        res.status(400).json({ message: 'Organization Id required', required: ['id']});
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
        test: test,
        addNetworkById: addNetworkById,
        createGroup: createGroup,
        createOrganization: createOrganization,
        createUser: createUser,
        getGroupById: getGroupById,
        getGroups: getGroups,
        getNetwork: getNetork,
        getNetworkByGroupId: getNetworkByGroupId,
        getNetworkByOrganizationId: getNetworkByOrganizationId,
        getNetworkByUserId: getNetworkByUserId,
        getOrganizationById: getOrganizationById,
        getOrganizations: getOrganizations,
        getUserById: getUserById,
        getUsers: getUsers,
        getUsersByGroupId: getUsersByGroupId,
        getUsersByOrganizationId: getUsersByOrganizationId,
        getVirginia: getVirginia,
        setOrganizationLocation: setOrganizationLocation,
        setUserLocation: setUserLocation
    };
};

module.exports = userController;
