import { equals } from 'ramda'

export default (
  () => {
    if (equals('undefined', typeof fetch)) {
      return require('isomorphic-unfetch')
    }
    return fetch
  }
)
