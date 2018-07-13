var gulp = require("gulp");
var autoprefixer = require("gulp-autoprefixer");

gulp.task("styles", function() {
	gulp.src("css/styles.css")
		.pipe(gulp.dest("build"))
		.pipe(autoprefixer());
});

gulp.task("watch", function() {
	//run gulp tasks
	gulp.watch("css/styles.css", ["styles"]);
});
