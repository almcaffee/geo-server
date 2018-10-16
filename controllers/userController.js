var userController = function () {
    var userModel = require('../models/userModel')();
    var path = require('path');

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

    return {
        test: test
    };
};

module.exports = userController;
