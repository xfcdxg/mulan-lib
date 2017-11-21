import { multiply } from 'ramda'

// string -> number
export default (
  (
    t,
    s = 1000,
    m = multiply(s, 60),
    h = multiply(m, 60),
    d = multiply(h, 24)
  ) => ({ s, m, h, d }[t])
)
