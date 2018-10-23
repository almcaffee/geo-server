var userModel = function () {
    const getConnection = require('../config/connection');
    var test =  function(callback) {
      function testApi(err, connection) {
            if (err) {
                callback({code: 500, message: "There was an error while connecting to the database", err: err});
            } else {
              var select = "SELECT COUNT(*) AS data FROM user";
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

    var getUserById =  function(id, callback) {
      function getUser(err, connection) {
            if (err) {
                callback({code: 500, message: "There was an error while connecting to the database", err: err});
            } else {
              var select = "SELECT * FROM user WHERE userId ="+connection.escape(id);
              console.log(select);
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
      getConnection(getUser);
    };

    var setUserLocation =  function(id, lat, lng, callback) {
      function setLocation(err, connection) {
            if (err) {
                callback({code: 500, message: "There was an error while connecting to the database", err: err});
            } else {
              var insert = "INSERT INTO `location` (`userId`, `lat`, `lng`) VALUES ("+connection.escape(id)+", "+connection.escape(lat)+","+connection.escape(lng)+")";
              connection.query(insert, function (err, rows) {
                  connection.release();
                  if (err) {
                    callback({ code: 500, err: err });
                  } else {
                    getUserById(id, callback);
                  }
              });
            }
      }
      getConnection(setLocation);
    };

    var updateUserLocation =  function(id, lat, lng, callback) {
      function setLocation(err, connection) {
            if (err) {
                callback({code: 500, message: "There was an error while connecting to the database", err: err});
            } else {
              var update = "UPDATE `location` (`lat`, `lng`) VALUES ("+connection.escape(lat)+","+connection.escape(lng)+") WHERE (location.userId = "+connection.escape(id)+")";
              connection.query(update, function (err, rows) {
                  connection.release();
                  if (err) {
                    callback({ code: 500, err: err });
                  } else {
                    getUserById(id, callback);
                  }
              });
            }
      }
      getConnection(setLocation);
    };

    return {
        test: test,
        getUserById: getUserById,
        setUserLocation: setUserLocation,
        updateUserLocation: updateUserLocation
    };
};
module.exports = userModel;
