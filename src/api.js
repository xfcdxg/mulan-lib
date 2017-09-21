import {
  ifElse,
  test,
  always,
} from 'ramda'

// string -> string
export default (
  path => ifElse(
    test(/^(http|https)/),
    always(path),
    always(`${ window.MULAN.SERVER_URL || '' }${ path }`)
  )(path)
)
