import {
  ifElse,
  compose,
  equals,
  curry
} from 'ramda'

import parseJSON from './parse-j-s-o-n'
import store     from './store'

export default (
  // string -> string -> string | object
  (k, t = 'local') =>
  {
    try {
      const r = oget(k, t)
      if(typeof r === 'number' && (r + '').length > 0) {
        return get(k, t)
      }
      return r
    } catch(err) {
      // console.log(err)
      return get(k, t)
    }
  }
)

const get    = curry((k, t) => store[t].getItem(k))

const oget   = curry((k, t) => parseJSON(get(k, t)))
