import { equals } from 'ramda'

if (equals('undefined', typeof window)) global.window = {}

if (equals('undefined', typeof window.MULAN)) window.MULAN = {}

// string -> string
export default (
  url => window.MULAN.SERVER_URL = url
)
