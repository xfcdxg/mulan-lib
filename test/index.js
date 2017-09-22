import { assert } from 'chai'

import moment from '../dist/moment'
import log from '../dist/log'
import addInterval from '../dist/add-interval'
import week from '../dist/week'
import timeDuration from '../dist/time-duration'
import mergeState from '../dist/merge-state'

describe(' test', () => {

  describe('格式化日期', () => {
    it('should return a string', () => {
      // const str = 1487136727315//new Date() //'2017-02-14'
      const r   = (`${ moment('YYYY-MM-DD')() }${ ' 20:30' }`)
      // moment('HH:mm')(`${ moment('YYYY-MM-DD')() }${ '20:30' }`)

      log('result', r)
      assert.equal('string', typeof r)
    })
  })

  describe('添加一天', () => {
    it('should return a string', () => {
      const str = 1487136727315//new Date() //'2017-02-14'
      const r   = moment('YYYY-MM-DD HH:mm:ss')
                  (addInterval(1, 'd')(moment('YYYY-MM-DD HH:mm:ss')(str)))
      log('result', r)
      assert.equal('string', typeof r)
    })
  })
  describe('添加一小时', () => {
    it('should return a string', () => {
      const str = 1487136727315//new Date() //'2017-02-14'

      const r   = moment('YYYY-MM-DD HH:mm:ss')
                  (addInterval(1, 'h')(moment('YYYY-MM-DD HH:mm:ss')(str)))
      log('result', r)
      assert.equal('string', typeof r)
    })
  })
  describe('添加一分钟', () => {
    it('should return a string', () => {
      const str = 1487136727315//new Date() //'2017-02-14'

      const r   = moment('YYYY-MM-DD HH:mm:ss')
                  (addInterval(1, 'm')(moment('YYYY-MM-DD HH:mm:ss')(str)))
      log('result', r)
      assert.equal('string', typeof r)
    })
  })
  describe('添加一秒钟', () => {
    it('should return a string', () => {
      const str = 1487136727315//new Date() //'2017-02-14'

      const r   = moment('YYYY-MM-DD HH:mm:ss')
                  (addInterval(2, 's' ,moment('YYYY-MM-DD HH:mm:ss')(str)))
      log('result1234', r)
      assert.equal('string', typeof r)
    })
  })

  describe('获取星期', () => {
    it('should return a string', () => {
      const str = 1487136727315//new Date() //'2017-02-14'
      // console.log(moment('day')(str))
      const r   = week()(moment('day')(str))

      log('result', r)
      assert.equal('string', typeof r)
    })
  })

  describe('获取时间间隔', () => {
    it('should return a string', () => {
      const str1 = '2017-02-14 20:00:00'
      const str2 = '2017-02-15 0:20:30'
      // console.log(moment('day')(str))
      const stamp = moment('x')
      const r   = timeDuration(stamp(str1), stamp(str2))

      log('result', r)
      assert.equal('object', typeof r)
    })
  })
  describe('复制状态', () => {
    it('should return a boolean', () => {
      const state = {}
      const action = {
        type: 'TEST',
        test: { a: 1 }
      }
      const r = mergeState(state, action)
      log('result', r)
      assert.equal(false, r === action)
    })
  })

})
