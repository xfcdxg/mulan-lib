
import { isEmpty, merge, isNil, ifElse, or, always, equals, compose, __, clone, test, curry } from 'ramda'

import getStore from './get-store'

export default (
  (headers = {}, sid = getStore('customerUserId', 'session')) => (
    compose(
      mergeHeader(or(isNil(sid), isEmpty(sid)), { sid: 'no-sid' }, { sid }, __),
      mergeHeader(test(/^(192.168|127.0|localhost)/, location.host), { appCode: 'blm' }, {}, __)
    )(headers)
  )
)

const mergeHeader = (
  (condition, tr = {}, fr = {}, headers) => (
    compose(merge(headers, __), clone)(
      ifElse(
        equals(true),
        always(tr),
        always(fr)
      )(condition)
    )
  )
)
