const gulp = require('gulp');
const mocha = require('gulp-mocha');

/*
  -- TOP LEVEL FUNCTIONS --
  gulp.task - Define tasks
  gulp.src - Point to files to use
  gulp.dest - Point to folder to output
  gulp.watch - Watch files/folders for changes
*/




gulp.task('travis', () => {
  gulp.src('./src/test/index.spec.js', {read: false})
    .pipe(mocha({reporter: 'nyan'}))
    .once('error', err => {
			console.error(err);
			process.exit(1);
		})
		.once('end', () => {
			process.exit();
		});
});

gulp.task('log', () => {
  return console.log('gulp is running');
});