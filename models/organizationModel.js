var organizationModel = function () {
    const getConnection = require('../config/connection');

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

    var getOrganizationById =  function(id, callback) {
      function getOrganization(err, connection) {
          if (err) {
              callback({code: 500, message: "There was an error while connecting to the database", err: err});
          } else {
            var select = "SELECT * FROM organization WHERE id = "+connection.escape(id);
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
        createOrganization: createOrganization,
        getOrganizationById: getOrganizationById,
        getOrganizations: getOrganizations,
        setOrganizationLocation: setOrganizationLocation
    };
};
module.exports = organizationModel;
