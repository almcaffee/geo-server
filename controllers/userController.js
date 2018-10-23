var userController = function () {
    var userModel = require('../models/userModel')();
    var path = require('path');
    var network = require('../json/network.json');
    var virginia = require('../json/virginia.json');

    var test = function (req, res) {
      userModel.test(function (err, rows) {
          if (!err) {
             if(rows.length > 0) {
               res.status(200).json(rows);
             } else {
               res.status(404).json({ error: { message: 'No Data'} });
             }
          } else {
              res.status(500).json({ error: { message: err.error} });
          }
      });
    };

    var getNetork = function (req, res) {
      res.status(200).send(network);
    };

    var getUserById = function (req, res) {
      userModel.getUserById(req.params.id, function (err, rows) {
          if (!err) {
              console.log(rows)
              if(rows.length > 0) {
                res.status(200).json(rows);
              } else {
                res.status(404).json({ error: { message: 'No Data'} });
              }
          } else {
              res.status(500).json({ error: { message: err.error} });
          }
      });
    };

    var getVirginia = function (req, res) {
      res.status(200).send(virginia);
    };

    var setUserLocation = function (req, res) {
      if(!req.params.id) {
        res.status(400).json({ error: { message: 'User Id required'} });
      } else if(!req.body.lat) {
        res.status(400).json({ error: { message: 'Latitude required'} });
      } else if(!req.body.lng) {
        res.status(400).json({ error: { message: 'Longitude required'} });
      } else {
        userModel.setUserLocation(req.params.id, req.body.lat, req.body.lng, function (err, rows) {
          if (!err) {
            if(rows.length > 0) {
              res.status(200).json(rows);
            } else {
              res.status(404).json({ error: { message: 'No Data'} });
            }
          } else {
             res.status(error.code).json({ error: { message: err.error} });
          }
        });
      }
    };

    var updateUserLocation = function (req, res) {
      if(!req.params.id) {
        res.status(400).json({ error: { message: 'User Id required'} });
      } else if(!req.body.lat) {
        res.status(400).json({ error: { message: 'Latitude required'} });
      } else if(!req.body.lng) {
        res.status(400).json({ error: { message: 'Longitude required'} });
      } else {
        userModel.updateUserLocation(req.params.id, req.body.lat, req.body.lng, function (err, rows) {
            if (!err) {
              if(rows.length > 0) {
                res.status(200).json(rows);
              } else {
                res.status(404).json({ error: { message: 'No Data'} });
              }
            } else {
               res.status(error.code).json({ error: { message: err.error} });
            }
        });
      }
    };

    return {
        test: test,
        getNetwork: getNetork,
        getUserById: getUserById,
        getVirginia: getVirginia,
        setUserLocation: setUserLocation,
        updateUserLocation: updateUserLocation
    };
};

module.exports = userController;
