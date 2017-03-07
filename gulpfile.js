var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    browserSync = require('browser-sync').create(),
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer'),
    compass = require('gulp-compass');

gulp.task('default', function() {
    return runSequence(['clean'], ['build'], ['serve', 'watch']);
});

gulp.task('clean', function(callback) {
    return del('./dist/', callback);
});

gulp.task('build', function(callback) {
    return runSequence(['compass', 'staticFiles'], callback);
});

gulp.task('compass', function() {
    return gulp.src('./src/**/*.scss')
        .pipe(compass({
            config_file: './config.rb',
            css: 'src/stylesheets',
            sass: 'src/sass'
        }))
        .on('error', function(err) {
            console.log(err);
            this.emit('end');
        })
        .pipe(gulp.dest('./dist/css/')).pipe(autoprefixer({
            browsers: [
                'last 22 versions',
                'Android >= 4.0',
                'last 5 Chrome versions',
                'last 5 Explorer versions',
                'last 3 Safari versions',
                'Firefox >= 20',
                'iOS 7',
                'Firefox ESR',
                'Explorer >= 8',
                'Opera >= 42',
                'Safari >= 8',
                'last 5 FirefoxAndroid versions',
                'last 5 ChromeAndroid versions',
                'last 5 ExplorerMobile versions'
            ],
            cascade: false
        }))
        .pipe(gulp.dest('./dist/stylesheets/'));
});

gulp.task('staticFiles', function() {
    return gulp.src([
            './src/**/*.html',
            './src/images*/**/*.*',
            './src/javascripts*/**/*.js',
            './src/stylesheets*/**/*.css',
            './src/framework*/*.*'
        ])
        .pipe(gulp.dest('./dist/'));
})

gulp.task('serve', function() {
    browserSync.init({
        server: './dist',
        port: 8888
    });
});

gulp.task('reload', function() {
    return browserSync.reload();
});

gulp.task('watch', function() {
    return gulp.watch([
        './src/**/*.html',
        './src/**/*.scss',
        './src/**/*.js'
    ], function() {
        return runSequence(['build'], ['reload']);
    })
});