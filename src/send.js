import {
  __,
  compose,
  equals,
  merge,
  ifElse,
  replace,
  props,
  head,
  always,
  type,
  clone
} from 'ramda'

import stringifyQuery from './stringify-query'
import stringifyJSON  from './stringify-j-s-o-n'

import api from './api'

export default (
  (url, data, method = 'post', headers = {}) => {
    if(compose(equals('Object'), type)(method)) {
      headers = method
      method  = 'post'
    }

    headers = compose(merge({ 'Content-Type': 'application/json' }, __), clone)(headers)

    const body = ifElse(
      compose(equals('application/x-www-form-urlencoded'), head, props(['Content-Type'])),
      compose(always, replace('?', ''), stringifyQuery)(data),
      always(
        ifElse(
          compose(equals('String'), type),
          always(data),
          compose(always, stringifyJSON)(data)
        )(data)
      )
    )(headers)

    return fetch(api(url), { method, headers, body }).then(resp => resp.json())
  }
)
