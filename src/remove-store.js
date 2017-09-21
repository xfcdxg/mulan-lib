import { curry } from 'ramda'
import store     from './store'
export default (
  (k, t = 'local') => remove(k, t)
)

const remove = curry((k, t) => store[t].removeItem(k))
