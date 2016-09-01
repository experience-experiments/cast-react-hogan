const path = require('path')
const gulp = require('gulp')
const clean = require('gulp-clean')
const webpack = require('webpack-stream')
const uglify = require('gulp-uglify')
const server = require('gulp-develop-server')
const sourcemaps = require('gulp-sourcemaps')
const clientPath = path.resolve(__dirname, 'client')
const serverPath = path.resolve(__dirname, 'server')
const publicPath = path.resolve(__dirname, 'public')
const srcPath = path.resolve(clientPath, 'src')
const assetsPath = path.resolve(publicPath, 'assets')
const configPath = path.resolve(serverPath, 'src/config')
const config = require(path.resolve(configPath, 'gulp'))

gulp
  .task('default', ['clean', 'webpack', 'uglify', 'watch', 'server', 'watch-server'], function () {
    console.log('[RMA PDF Service]')
  })
  .task('clean', function () {
    return gulp.src(path.resolve(assetsPath, 'js/app/**/*.*'), { read: false })
      .pipe(clean())
  })
  .task('webpack', function () {
    return gulp.src([])
      .pipe(webpack(config.webpack.run))
      .pipe(gulp.dest(path.resolve(assetsPath, 'js/app/')))
  })
  .task('uglify', function () {
    return gulp.src(path.resolve(srcPath, '**/*.js!src/app.js'))
      .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(path.resolve(assetsPath, 'js/lib/')))
  })
  .task('watch', function () {
    gulp
      .watch(config.jshint.all, ['clean', 'webpack'])
    gulp
      .watch(path.resolve(serverPath, 'app/mvc/views/**/*.*'), server.restart)
  })
  .task('server', function () {
    server.listen({ path: 'app', args: ['--api', '5001', '--react', '5002', '--hogan', '5003'] })
  })
  .task('watch-server', function () {
    gulp
      .watch(['app.js', 'server/index.js'], server.restart)
  })
