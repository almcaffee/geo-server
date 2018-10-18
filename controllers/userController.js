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

    var getVirginia = function (req, res) {
      res.status(200).send(virginia);
    };

    return {
        test: test,
        getNetwork: getNetork,
        getVirginia: getVirginia
    };
};

module.exports = userController;
