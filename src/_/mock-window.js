import { equals, forEachObjIndexed } from 'ramda'

export default (
  params => {
    let win = {}
    if (equals('object', typeof window)) {
      win = window
    } else if (equals('object', typeof global.win)) {
      win = global.win
    }
    // set default
    forEachObjIndexed((v, k) => {
      if (equals('undefined', typeof win[k])) {
        win[k] = v
      }
    }, params)

    if (equals('object', typeof global)) {
      global.win = win
    }

    return win
  }
)
