import { or, equals } from 'ramda'

const mockStorage = type => {
  if (or(equals('undefined', typeof window), equals('undefined', typeof window[type]))) {
    require('mock-local-storage')
    return ((global && global.window) || window)[type]
  }
  return window[type]
}

export default ({
  local:   () => mockStorage('localStorage'),
  session: () => mockStorage('sessionStorage'),
})
