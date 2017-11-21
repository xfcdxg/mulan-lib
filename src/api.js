import {
  ifElse,
  test,
  always,
  identity,
} from 'ramda'

if (typeof window === 'undefined') global.window = {}

if (typeof window.MULAN === 'undefined') window.MULAN = {}

// string -> string
export default (
  path => ifElse(
    test(/^(http|https)/),
    identity,
    always(`${ window.MULAN.SERVER_URL || '' }${ path }`)
  )(path)
)
