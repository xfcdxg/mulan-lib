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
  identity,
  type,
  clone,
} from 'ramda'

import stringifyQuery from './stringify-query'
import stringifyJSON  from './stringify-j-s-o-n'
import respType from './_/response-type'
import api from './api'

const CONTENT_TYPE = {
  JSON: 'application/json',
  FORM: 'application/x-www-form-urlencoded',
}

export default (
  (url, data, { method = 'post', headers = {}, dataType = 'json' }) => {
    headers = compose(merge({ 'Content-Type': CONTENT_TYPE.JSON }, __), clone)(headers)

    const body = ifElse(
      compose(equals(CONTENT_TYPE.FORM), head, props(['Content-Type'])),
      compose(always, replace('?', ''), stringifyQuery)(data),
      always(
        ifElse(
          compose(equals('String'), type),
          identity,
          compose(always, stringifyJSON)(data)
        )(data)
      )
    )(headers)

    return fetch(api(url), { method, headers, body }).then(resp => resp[respType(dataType)]())
  }
)
