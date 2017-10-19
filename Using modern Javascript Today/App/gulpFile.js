var gulp = require('gulp');

// write a task (its just a js function)
// name + task. default runs when we type gulp only
// callback to end the stream. or we can return the
// actual stream
gulp.task('default', (callback)=>{
    console.log('hello world');

    setTimeout(callback, 1500);
});