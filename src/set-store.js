import {
  ifElse,
  compose,
  equals,
  curry,
  type
} from 'ramda'
import stringifyJSON from './stringify-j-s-o-n'
import store from './store'

export default (
  // string -> string -> string | object -> empty
  (k, v, t = 'local') =>
  ifElse(
    compose(equals('String'), type),
    set(k, t),
    oset(k, t),
  )(v)
)

const set    = curry((k, t, v) => store[t].setItem(k, v))

const oset   = curry((k, t, o) => set(k, t, stringifyJSON(o)))
