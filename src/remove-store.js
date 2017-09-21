import { curry } from 'ramda'
import store     from './store'

const remove = curry((k, t) => store[t].removeItem(k))

export default (
  (k, t = 'local') => remove(k, t)
)
