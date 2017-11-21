import { equals } from 'ramda'
import mockWindow from './mock-window'

const win = mockWindow()

const mockStorage = type => {
  if (equals('undefined', typeof win[type])) {
    require('mock-local-storage')
    return (global || win)[type]
  }
  return win[type]
}

export default ({
  local:   () => mockStorage('localStorage'),
  session: () => mockStorage('sessionStorage'),
})
