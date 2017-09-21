import {
  ifElse,
  test,
  always
} from 'ramda'

// string -> string
export default (
  path => ifElse(
            test(/^(http|https)/),
            always(path),
            always(`${ window.OTO_SAAS.SERVER_URL || '' }${ path }`)
          )(path)
)
