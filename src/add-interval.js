import { __, compose, add, multiply, curry } from 'ramda'

import interval from './interval'
import moment from './moment'

const stamp = moment('x')

export default (
  curry((s, t, d) => compose(
    stamp,
    add(stamp(d)),
    multiply(__, interval(t))
  )(s))
)
