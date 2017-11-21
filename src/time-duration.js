import {
  __,
  ifElse,
  gte,
  compose,
  append,
  divide,
  always,
} from 'ramda'

import interval from './_/interval'

export default (
  (st, et, r = []) => {
    const p = adj => dur => {
      r = ifElse(
        gte(dur, __),
        compose(append(__, r), parseInt, divide(dur)),
        always(append(0, r))
      )(adj)

      return dur %= adj
    }

    compose(
      p(interval('s')),
      p(interval('m')),
      p(interval('h')),
      p(interval('d'))
    )(Math.abs(et - st))

    return r
  }
)
