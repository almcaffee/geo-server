var organizationController = function () {
    var organizationModel = require('../models/organizationModel')();
    var path = require('path');

    var organizationRequiredFields = {
      name: true,
      address1: true,
      city: true,
      state: true,
      zip: true,
      phone: true,
      email: true
    };

    var checkRequiredFields = function(object, required) {
      var missingFields = [];
      Object.keys(object).forEach(key=> {
        if(required[key] && !object[key]) missingFields.push(key);
      });
      return { valid: missingFields.length ? false : true, fields: missingFields };
    }


    var createOrganization = function (req, res) {
      var test = checkRequiredFields(req.body, organizationRequiredFields);
      if(!test.valid) {
        res.status(400).json({ message: 'Missing fields required', required: test.fields});
      } else {
        organizationModel.createOrganization(req.body, function (err, rows) {
          if (!err) {
            var org = Object.assign({}, req.body, {id: rows.insertId});
            res.status(200).json(org);
          } else {
            res.status(err.code).json({ error: err });
          }
        });
      }
    };


    var getOrganizationById = function (req, res) {
      if(!req.params.id) {
        res.status(400).json({ message: 'Organization Id required', required: ['id'] });
      } else {
        organizationModel.getOrganizationById(req.params.id, function (err, rows) {
          if (!err) {
            res.status(200).json(rows);
          } else {
             res.status(err.code).json({ error: err });
          }
        });
      }
    };

    var getOrganizations = function (req, res) {
      organizationModel.getOrganizations(function (err, rows) {
        if (!err) {
          if(rows.length > 0) {
            res.status(200).json(rows);
          } else {
            res.status(404).json({ message: 'No Data' });
          }
        } else {
           res.status(err.code).json({ error: err });
        }
      });
    };

    var setOrganizationLocation = function (req, res) {
      if(!req.body.id) {
        res.status(400).json({ message: 'Organization Id required', required: ['id']});
      } else if(!req.body.lat) {
        res.status(400).json({ message: 'Latitude required', required: ['lat']});
      } else if(!req.body.lng) {
        res.status(400).json({ message: 'Longitude required', required: ['lng']});
      } else {
        organizationModel.setUserLocation(req.body.id, req.body.lat, req.body.lng, function (err, rows) {
          if (!err) {
            if(rows.length > 0) {
              res.status(200).json(rows);
            } else {
              res.status(404).json({ message: 'No Data' });
            }
          } else {
             res.status(err.code).json({ error: err });
          }
        });
      }
    };

    return {
        createOrganization: createOrganization,
        getOrganizationById: getOrganizationById,
        getOrganizations: getOrganizations,
        setOrganizationLocation: setOrganizationLocation
    };
};

module.exports = organizationController;
