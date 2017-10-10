import {
  compose,
  map,
  split,
  reduce,
  assoc,
  head,
  last,
  gte,
  indexOf,
  drop,
  identity,
} from 'ramda'
import decode from './decode'
// querystring -> object
export default (
  s => compose(
    reduce((query, param, arr = compose(map(decode), split('='))(param)) =>
      assoc(head(arr), last(arr), query), {}),
    split('&'),
    gte(indexOf('?', s), 0) ? drop(1) : identity
  )(s)
)
