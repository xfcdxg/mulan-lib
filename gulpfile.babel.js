import gulp   from 'gulp'
import pump   from 'pump'
import uglify from 'gulp-uglify'
import eslint from 'gulp-eslint'
import babel  from 'gulp-babel'

const src  = gulp.src('src/**/*')
const dist = gulp.dest('dist')

gulp.task('default', ['build'])

gulp.task('eslint', () =>
  pump([
    src,
    eslint({
      configFile: './.eslintrc.js'
    }),
    eslint.failOnError(),
  ])
)

gulp.task('build', () =>
  pump([
    src,
    babel(),
    uglify(),
    dist,
  ])
)

gulp.task('watch', () => gulp.watch('src/*.js', ['eslint']))
