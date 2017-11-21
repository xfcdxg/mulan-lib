import { equals } from 'ramda'

export default (
  s => {
    if (equals('undefined', typeof decodeURIComponent)) {
      return require('querystring').unescape(s)
    }

    return decodeURIComponent(s)
  }
)
