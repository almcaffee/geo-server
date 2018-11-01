var userModel = function () {
    const getConnection = require('../config/connection');

    var getLastInsert = function(callback) {
      function getInsertedRow(err, connection) {
        if (err) {
            callback({code: 500, message: "There was an error while connecting to the database", err: err});
        } else {
          var select = "SELECT LAST_INSERT_ID() as id";
          connection.query(select, function (err, rows) {
              connection.release();
              if (err) {
                return null;
                callback({code: 500, err: err});
              } else {
                callback(null, rows);
              }
          });
        }
      }
      getConnection(getInsertedRow);
    };

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

    var addNetworkById =  function(group, callback) {
      function addNetwork(err, connection) {
          if (err) {
              callback({code: 500, message: "There was an error while connecting to the database", err: err});
          } else {
            var keys = Object.keys(group);
            var insert = "INSERT INTO `network` (";
            keys.forEach((k, i)=> {
              insert+= "`"+key+"`";
              if(i<keys.length - 1) insert+= ",";
            });
            insert += ") VALUES (";
            keys.forEach((k, i)=> {
              insert+= connection.escape(user[k]);
              if(i<keys.length - 1) insert+= ",";
            });
            insert += ")";
            console.log(insert);
            connection.query(insert, function (err, rows) {
                connection.release();
                if (err) {
                  callback({ code: 500, err: err });
                } else {
                  var id = getLastInsert();
                  getNetworkByUserId(id, callback);
                }
            });
        }
      }
      getConnection(addNetwork);
    };

    var createGroup =  function(group, callback) {
      function insertOrganization(err, connection) {
          if (err) {
              callback({code: 500, message: "There was an error while connecting to the database", err: err});
          } else {
            var keys = Object.keys(group);
            var insert = "INSERT INTO `group` (";
            keys.forEach((k, i)=> {
              insert+= "`"+k+"`,";
              // if(i<keys.length - 1) insert+= ",";
            });
            insert += "`createDate`) VALUES (";
            keys.forEach((k, i)=> {
              insert+= connection.escape(group[k]);
              insert+= ",";
              // if(i<keys.length - 1) insert+= ",";
            });
            insert += " NOW())";
            console.log(insert);
            connection.query(insert, function (err, rows) {
            connection.release();
              if (err) {
                callback({ code: 500, err: err });
              } else {
                callback(null, rows);
              }
            });
          }
      }
      getConnection(insertOrganization);
    };

    var createOrganization =  function(organization, callback) {
      function insertOrganization(err, connection) {
          if (err) {
              callback({code: 500, message: "There was an error while connecting to the database", err: err});
          } else {
            var keys = Object.keys(organization);
            var insert = "INSERT INTO `organization` (";
            keys.forEach((k, i)=> {
              insert+= "`"+k+"`,";
              // if(i<keys.length - 1) insert+= ",";
            });
            insert += "`createDate`) VALUES (";
            keys.forEach((k, i)=> {
              insert+= connection.escape(organization[k]);
              insert+= ",";
              // if(i<keys.length - 1) insert+= ",";
            });
            insert += " NOW())";
            console.log(insert);
            connection.query(insert, function (err, rows) {
            connection.release();
              if (err) {
                callback({ code: 500, err: err });
              } else {
                callback(null, rows);
              }
            });
          }
      }
      getConnection(insertOrganization);
    };

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

    var getGroupById =  function(id, callback) {
      function getGroup(err, connection) {
          if (err) {
              callback({code: 500, message: "There was an error while connecting to the database", err: err});
          } else {
            // GROUP is reserved in sql use [schema].table for table with reserved word name
            var select = "SELECT * FROM faciallock.group WHERE id ="+connection.escape(id);
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
      getConnection(getGroup);
    };

    var getGroupsByOrganizationId =  function(id, callback) {
      function getGroups(err, connection) {
          if (err) {
              callback({code: 500, message: "There was an error while connecting to the database", err: err});
          } else {
            var select = "SELECT * FROM faciallock.group WHERE organizationId ="+connection.escape(id);
            select += " ORDER BY id asc";
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
      getConnection(getGroups);
    };

    var getGroups =  function(callback) {
      function getAllGroups(err, connection) {
          if (err) {
              callback({code: 500, message: "There was an error while connecting to the database", err: err});
          } else {
            // GROUP is reserved in sql use [schema].table for table with reserved word name
            var select = "SELECT * FROM faciallock.group ORDER BY id asc";
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
      getConnection(getAllGroups);
    };

    var getNetworkByUserId =  function(id, callback) {
      function getNetwork(err, connection) {
          if (err) {
              callback({code: 500, message: "There was an error while connecting to the database", err: err});
          } else {
            var select = "SELECT * FROM network WHERE userId ="+connection.escape(id);
            select += " ORDER BY id asc";
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
      getConnection(getNetwork);
    };

    var getNetworkByGroupId =  function(id, callback) {
      function getNetwork(err, connection) {
          if (err) {
              callback({code: 500, message: "There was an error while connecting to the database", err: err});
          } else {
            var select = "SELECT * FROM network WHERE groupId ="+connection.escape(id);
            select += " ORDER BY id asc";
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
      getConnection(getNetwork);
    };

    var getNetworkByOrganizationId =  function(id, callback) {
      function getNetwork(err, connection) {
          if (err) {
              callback({code: 500, message: "There was an error while connecting to the database", err: err});
          } else {
            var select = "SELECT * FROM network WHERE organizationId ="+connection.escape(id);
            select += " ORDER BY id asc";
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
      getConnection(getNetwork);
    };

    var getOrganizationById =  function(id, callback) {
      function getOrganization(err, connection) {
          if (err) {
              callback({code: 500, message: "There was an error while connecting to the database", err: err});
          } else {
            var select = "SELECT * FROM organization WHERE id ="+connection.escape(id);
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
      getConnection(getOrganization);
    };

    var getOrganizations =  function(callback) {
      function getAllOrgs(err, connection) {
          if (err) {
              callback({code: 500, message: "There was an error while connecting to the database", err: err});
          } else {
            var select = "SELECT * FROM organization ORDER BY id asc";
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
      getConnection(getAllOrgs);
    };

    var getUserById =  function(id, callback) {
      function getUser(err, connection) {
          if (err) {
              callback({code: 500, message: "There was an error while connecting to the database", err: err});
          } else {
            var select = "SELECT u.*, IFNULL(g.displayName, g.name) AS groupName, g.id AS groupId, IFNULL(o.displayName, o.name) AS organizationName, o.id AS organizationId FROM user u";
            select += " LEFT OUTER JOIN faciallock.group g ON g.id = u.groupId";
            select += " LEFT OUTER JOIN faciallock.organization o ON o.id = u.organizationId";
            select += " WHERE u.id ="+connection.escape(id);
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

    var getUsersByGroupId =  function(id, callback) {
      function getUsers(err, connection) {
          if (err) {
              callback({code: 500, message: "There was an error while connecting to the database", err: err});
          } else {
            var select = "SELECT u.*, IFNULL(g.displayName, g.name) AS groupName, g.id AS groupId, IFNULL(o.displayName, o.name) AS organizationName, o.id AS organizationId FROM user u";
            select += " LEFT OUTER JOIN faciallock.group g ON g.id = u.groupId";
            select += " LEFT OUTER JOIN faciallock.organization o ON o.id = u.organizationId";
            select += " WHERE u.groupId ="+connection.escape(id);
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

    var getUsersByOrganizationId =  function(id, callback) {
      function getUsers(err, connection) {
          if (err) {
              callback({code: 500, message: "There was an error while connecting to the database", err: err});
          } else {
            var select = "SELECT u.*, IFNULL(g.displayName, g.name) AS groupName, g.id AS groupId, IFNULL(o.displayName, o.name) AS organizationName, o.id AS organizationId FROM user u";
            select += " LEFT OUTER JOIN faciallock.group g ON g.id = u.groupId";
            select += " LEFT OUTER JOIN faciallock.organization o ON o.id = u.organizationId";
            select += " WHERE u.organizationId ="+connection.escape(id);
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

    var setOrganizationLocation =  function(id, lat, lng, callback) {
      function setLocation(err, connection) {
          if (err) {
              callback({code: 500, message: "There was an error while connecting to the database", err: err});
          } else {
            var update = "UPDATE `organization` SET `lat` = "+connection.escape(lat)+", `lng` = "+connection.escape(lng)+" `updateDate` = NOW() WHERE id = "+connection.escape(id);
            connection.query(update, function (err, rows) {
                connection.release();
                if (err) {
                  callback({ code: 500, err: err });
                } else {
                  callback(null, { message: 'Organization location updated successfully'});
                }
            });
          }
      }
      getConnection(setLocation);
    };

    return {
        test: test,
        addNetworkById: addNetworkById,
        createGroup: createGroup,
        createOrganization: createOrganization,
        createUser: createUser,
        getGroupById: getGroupById,
        getGroups: getGroups,
        getGroupsByOrganizationId: getGroupsByOrganizationId,
        getLastInsert: getLastInsert,
        getNetworkByGroupId: getNetworkByGroupId,
        getNetworkByOrganizationId: getNetworkByOrganizationId,
        getNetworkByUserId: getNetworkByUserId,
        getOrganizationById: getOrganizationById,
        getOrganizations: getOrganizations,
        getUserById: getUserById,
        getUsers: getUsers,
        getUsersByGroupId: getUsersByGroupId,
        getUsersByOrganizationId: getUsersByOrganizationId,
        setOrganizationLocation: setOrganizationLocation,
        setUserLocation: setUserLocation
    };
};
module.exports = userModel;
