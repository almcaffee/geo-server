var userModel = function () {
    const getConnection = require('../config/connection');

    // var getLastInsert = function(callback) {
    //   function getInsertedRow(err, connection) {
    //     if (err) {
    //         callback({code: 500, message: "There was an error while connecting to the database", err: err});
    //     } else {
    //       var select = "SELECT LAST_INSERT_ID() as id";
    //       connection.query(select, function (err, rows) {
    //           connection.release();
    //           if (err) {
    //             return null;
    //             callback({code: 500, err: err});
    //           } else {
    //             callback(null, rows);
    //           }
    //       });
    //     }
    //   }
    //   getConnection(getInsertedRow);
    // };

    var createUser =  function(user, callback) {
      function insertUser(err, connection) {
        console.log('create user')
        if (err) {
            callback({code: 500, message: "There was an error while connecting to the database", err: err});
        } else {
          var keys = Object.keys(user);
          var insert = "INSERT INTO `user` (";
          keys.forEach((k, i)=> {
            insert+= "`"+k+"`,";
            // if(i<keys.length - 1) insert+= ",";
          });
          insert += "`createDate`) VALUES (";
          keys.forEach((k, i)=> {
            insert+= connection.escape(user[k]);
            insert+= ",";
            // if(i<keys.length - 1) insert+= ",";
          });
          insert += " NOW())";
          console.log(insert);
          connection.query(insert, function (err, rows, user) {
            connection.release();
            if (err) {
              callback({ code: 500, err: err });
            } else {
              callback(null, rows);
            }
          });
        }
      }
      getConnection(insertUser);
    };

    var getUserById =  function(id, callback) {
      function getUser(err, connection) {
          if (err) {
              callback({code: 500, message: "There was an error while connecting to the database", err: err});
          } else {
            var select = "SELECT u.*, IFNULL(g.displayName, g.name) AS groupName, g.id AS groupId, IFNULL(o.displayName, o.name) AS organizationName, o.id AS organizationId FROM user u";
            select += " LEFT OUTER JOIN faciallock.group g ON g.id = u.groupId";
            select += " LEFT OUTER JOIN faciallock.organization o ON o.id = u.organizationId";
            select += " WHERE u.id = "+connection.escape(id);
            console.log(select);
            connection.query(select, function (err, rows) {
                connection.release();
                if (err) {
                  callback({ code: 500, err: err });
                } else {
                  callback(null, rows[0]);
                }
            });
          }
      }
      getConnection(getUser);
    };

    var getUsersByGroupId =  function(id, userId, callback) {
      function getUsers(err, connection) {
          if (err) {
              callback({code: 500, message: "There was an error while connecting to the database", err: err});
          } else {
            var select = "SELECT u.*, IFNULL(g.displayName, g.name) AS groupName, g.id AS groupId, IFNULL(o.displayName, o.name) AS organizationName, o.id AS organizationId FROM user u";
            select += " LEFT OUTER JOIN faciallock.group g ON g.id = u.groupId";
            select += " LEFT OUTER JOIN faciallock.organization o ON o.id = u.organizationId";
            select += " WHERE u.groupId = "+connection.escape(id);
            if(userId) select += " AND u.id <> "+connection.escape(userId);
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
      getConnection(getUsers);
    };

    var getUsersByOrganizationId =  function(id, userId, callback) {
      function getUsers(err, connection) {
          if (err) {
              callback({code: 500, message: "There was an error while connecting to the database", err: err});
          } else {
            var select = "SELECT u.*, IFNULL(g.displayName, g.name) AS groupName, g.id AS groupId, IFNULL(o.displayName, o.name) AS organizationName, o.id AS organizationId FROM user u";
            select += " LEFT OUTER JOIN faciallock.group g ON g.id = u.groupId";
            select += " LEFT OUTER JOIN faciallock.organization o ON o.id = u.organizationId";
            select += " WHERE u.organizationId = "+connection.escape(id);
            if(userId) select += " AND u.id <> "+connection.escape(userId);
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
      getConnection(getUsers);
    };

    var getUsers =  function(callback) {
      function getAllUsers(err, connection) {
          if (err) {
              callback({code: 500, message: "There was an error while connecting to the database", err: err});
          } else {
            var select = "SELECT u.*, IFNULL(g.displayName, g.name) AS groupName, g.id AS groupId, IFNULL(o.displayName, o.name) AS organizationName, o.id AS organizationId FROM user u ";
            select += "LEFT OUTER JOIN faciallock.group g ON g.id = u.groupId ";
            select += "LEFT OUTER JOIN faciallock.organization o ON o.id = u.organizationId ";
            select += "ORDER BY u.id asc";
            console.log(select);
            connection.query(select, function (err, rows) {
                connection.release();
                if (err) {
                  console.log(err)
                  callback({ code: 500, err: err });
                } else {
                  callback(null, rows);
                }
            });
          }
      }
      getConnection(getAllUsers);
    };

    var setUserLocation =  function(id, lat, lng, callback) {
      function setLocation(err, connection) {
          if (err) {
              callback({code: 500, message: "There was an error while connecting to the database", err: err});
          } else {
            var update = "UPDATE `user` SET `lat` = "+connection.escape(lat)+", `lng` = "+connection.escape(lng)+" `updateDate` = NOW() WHERE id = "+connection.escape(id);
            connection.query(update, function (err, rows) {
                connection.release();
                if (err) {
                  callback({ code: 500, err: err });
                } else {
                  callback(null, { message: 'User location updated successfully'});
                }
            });
          }
      }
      getConnection(setLocation);
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
module.exports = userModel;
