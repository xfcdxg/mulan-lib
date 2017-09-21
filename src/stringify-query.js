import { compose, concat, join, map, mapObjIndexed, values } from 'ramda'

import encode from './encode'

// object -> querystring
export default (
  o => compose(
         concat('?'),
         join('&'),
         values,
         mapObjIndexed((value, key) => compose(join('='), map(encode))([key, value]) )
       )(o)
)
