/**
 * Configurations for entire app by app mode.
 * See gulpFile.js
 * @param mode Passed in on app startup by detected Node environment mode.
 * @returns {*} Returns appropirate object based on environment mode.
 */

var config = function (mode) {
    var config = {};

    config.default = {
         port: 8000,
         mysql: {
           connectionLimit : 25,
           host            : '34.219.189.208',
           user            : 'api',
           password        : 'psT(EfIpd$$!PppVGC&KK=OXg(QSQMuA',
           database        : 'faciallock',
           acquireTimeout: 1000,
           debug: false
         }
    };

    config.production = {
        port: 80,
        mysql: {
          connectionLimit : 25,
          host            : 'localhost',
          user            : 'api',
          password        : 'psT(EfIpd$$!PppVGC&KK=OXg(QSQMuA',
          database        : 'faciallock',
          acquireTimeout: 1000,
          debug: false
        }
      };

    return config[mode];
};

module.exports = config(process.env.mode || 'default');
