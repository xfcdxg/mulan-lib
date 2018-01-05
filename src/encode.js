import { equals } from 'ramda'

export default (
  s => {
    if (equals('undefined', typeof encodeURIComponent)) {
      return require('querystring').escape(s)
    }

    return encodeURIComponent(s)
  }
)
