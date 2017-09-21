import gulp   from 'gulp'
import pump   from 'pump'
import uglify from 'gulp-uglify'
import babel  from 'gulp-babel'

const src  = gulp.src('src/*.js')
const dist = gulp.dest('dist')

gulp.task('default', () =>
  pump([
    src,
    babel(),
    uglify(),
    dist,
  ])
)

gulp.task('common', () =>
  pump([
    src,
    babel(),
    dist,
  ])
)
