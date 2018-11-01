var gulp = require('gulp');
var gulpNodemon = require('gulp-nodemon');
var pm2 = require('pm2');

// Execute 'gulp' command
gulp.task('default', function () {
    if (process.env.NODE_ENV === 'production') {
        console.log(process.env)
        // Runs in production mode if the environment variable mode is set to production
        pm2.connect(function (err) {
            if (err) {
                console.error(err);
                process.exit(2);
            }

            pm2.streamLogs('all', 0);

            pm2.start({
                name: 'GeoServer',
                script: 'app.js',
                watch: true,
                output: './pm2/logs/out.log',
                error: './pm2/logs/error.log',
                env: {
                    PORT: process.env.PORT || 80
                }
            }, function (err) {
                if (err) {
                    pm2.disconnect();   // Disconnects from PM2
                    if (err) throw err
                }
            });
        });
    } else {
        gulpNodemon({
            script: 'app.js',
            ext: 'js',
            env: {
                PORT: 8000
            },
            ignore: ['./node_modules']
        }).on('restart', function () {
            console.log('-------RESTARTING--------');
        });
    }
});
