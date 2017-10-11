import { curry, type, length, equals, subtract, lt, slice, add } from 'ramda'

export default (
  curry(
    (idx, len, str, code = '*') => {
      if (equals('String', type(len))) {
        str = len
        len = 0
      }
      // 剩余长度
      const l = subtract(length(str), idx)

      len = len > l ? l : len

      if (lt(len, 0)) {
        const x = Math.abs(len)
        len = idx === 0 ? x : idx < x ? idx : x
        idx = idx === 0 ? length(str) - x : idx > x ? (idx - x - 1) : 0
      }

      // const s = str.substr(0, idx)
      const s = slice(0, idx, str)
      const c = ((m = '', x = 0) => {
        while (x++ < len) m += code
        return m
      })()
      // const e = str.substr(idx + len)
      const e = slice(add(idx, len), length(str), str)

      return `${ s }${ c }${ e }`
    }
  )
)
