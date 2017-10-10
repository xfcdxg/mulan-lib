import {
  ifElse,
  test,
  always,
  identity,
} from 'ramda'

// string -> string
export default (
  path => ifElse(
    test(/^(http|https)/),
    identity,
    always(`${ window.MULAN.SERVER_URL || '' }${ path }`)
  )(path)
)
