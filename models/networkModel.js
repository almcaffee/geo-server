var networkModel = function () {
    const getConnection = require('../config/connection');

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
                  callback(null, rows);
                }
            });
        }
      }
      getConnection(addNetwork);
    };

    var getNetworkByUserId =  function(id, callback) {
      function getNetwork(err, connection) {
          if (err) {
              callback({code: 500, message: "There was an error while connecting to the database", err: err});
          } else {
            var select = "SELECT * FROM network WHERE userId = "+connection.escape(id);
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
            var select = "SELECT * FROM network WHERE groupId = "+connection.escape(id);
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
            var select = "SELECT * FROM network WHERE organizationId = "+connection.escape(id);
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

    return {
        addNetworkById: addNetworkById,
        getNetworkByGroupId: getNetworkByGroupId,
        getNetworkByOrganizationId: getNetworkByOrganizationId,
        getNetworkByUserId: getNetworkByUserId
    };
};
module.exports = networkModel;
