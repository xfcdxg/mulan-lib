import { type, equals, length, and, compose, lt, toString } from 'ramda'
import parseJSON from './parse-j-s-o-n'
import store     from './store'

const get = (k, t) => store[t].getItem(k)
const oget = (k, t) => parseJSON(get(k, t))

export default (
  // string -> string -> string | object
  (k, t = 'local') => {
    try {
      const r = oget(k, t)

      if (
        and(
          compose(equals('Number'), type)(r),
          compose(lt(0), length, toString)(r)
        )
      ) {
        return get(k, t)
      }
      return r
    } catch (err) {
      return get(k, t)
    }
  }
)
