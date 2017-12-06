var gulp = require('gulp');
var sass = require('gulp-sass');

// SassとCssの保存先を指定
gulp.task('sass', function(){
  gulp.src('./src/server/public/sass/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest('./src/server/public/css/build'));
});

//自動監視のタスクを作成(sass-watchと名付ける)
gulp.task('sass-watch', ['sass'], function(){
  var watcher = gulp.watch('./src/server/public/sass/*.scss', ['sass']);
  watcher.on('change', function(event) {
  });
});

// タスク"task-watch"がgulpと入力しただけでdefaultで実行されるようになる
gulp.task('default', ['sass-watch']);