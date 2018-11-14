var groupModel = function () {
    const getConnection = require('../config/connection');

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


    var getGroupById =  function(id, callback) {
      function getGroup(err, connection) {
          if (err) {
              callback({code: 500, message: "There was an error while connecting to the database", err: err});
          } else {
            // GROUP is reserved in sql use [schema].table for table with reserved word name
            var select = "SELECT * FROM api.group WHERE id = "+connection.escape(id);
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
            var select = "SELECT * FROM api.group WHERE organizationId = "+connection.escape(id);
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
            var select = "SELECT * FROM api.group ORDER BY id asc";
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

    return {
        createGroup: createGroup,
        getGroupById: getGroupById,
        getGroups: getGroups,
        getGroupsByOrganizationId: getGroupsByOrganizationId,
    };
};
module.exports = groupModel;
