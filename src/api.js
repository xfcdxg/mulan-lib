import {
  ifElse,
  test,
  always,
  identity,
} from 'ramda'

import mockWindow from './_/mock-window'

const win = mockWindow({ MULAN: {} })

// string -> string
export default (
  path => ifElse(
    test(/^(http|https)/),
    identity,
    always(`${ win.MULAN.SERVER_URL || '' }${ path }`)
  )(path)
)
