import { curry } from 'ramda'
import store     from './_/store'

const remove = curry((k, t) => store[t]().removeItem(k))

export default (
  (k, t = 'local') => remove(k, t)
)
