import { curry, type, length, subtract } from 'ramda'

export default (
  curry(
    (idx, len, str, code = '*') => {
      if(equals('String', type(len))) {
        str = len
        len = 0
      }
      //剩余长度
      const l = subtract(length(str), idx)

      len = len > l ? l : len

      if(lt(len, 0)) {
        const x = Math.abs(len)
        len = 0 === idx ? x : idx < x ? idx : x
        idx = 0 === idx ? length(str) - x : idx > x ? (idx - x - 1) : 0
      }

      const s = str.substr(0, idx)
      const c = ((m = '', c = 0) => {
        while(c++ < len) m += code
        return m
      })()
      const e = str.substr(idx + len)

      return `${ s }${ c }${ e }`
    }
  )
)
