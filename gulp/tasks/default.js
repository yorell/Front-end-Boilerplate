var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', ['clean:development'], function() {
    runSequence(
        'bower:development',
        'less:development',
        'javascript:development',
        'templates:development',
        'fonts:development',
        'images:development',
        'icons:development',
        'browser-sync:development',
        'watch'
    );
});