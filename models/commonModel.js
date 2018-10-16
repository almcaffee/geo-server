var commonModel = function () {
    const getConnection = require('../config/connection');
    var test =  function(callback) {
      function testApi(err, connection) {
            if (err) {
                callback({code: 500, message: "There was an error while connecting to the database", err: err});
            } else {
              var select = "SELECT COUNT(*) AS data FROM employees";
              connection.query(select, function (err, rows) {
                  connection.release();
                  if (err) {
                    callback({ code: 500, err: err });
                  } else {
                    callback(null, rows);
                  }
              });
            }
      }
      getConnection(testApi);
    };
    return {
        test: test
    };
};
module.exports = commonModel;
