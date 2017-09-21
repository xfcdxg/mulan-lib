import { compose, merge, dissoc, clone } from 'ramda'

// (object, object) => object
export default (
  (state, action) => compose(merge(state), dissoc('type'), clone)(action)
)
