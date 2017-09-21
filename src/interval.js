import { multiply } from 'ramda'

// string -> number
export default (
  t => {
    const s = 1000
    const m = multiply(s, 60)
    const h = multiply(m, 60)
    const d = multiply(h, 24)
    return { s, m, h, d }[t]
  }
)
