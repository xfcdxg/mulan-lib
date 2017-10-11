import { assert } from 'chai'

import moment from '../dist/moment'
import log from '../dist/log'
import addInterval from '../dist/add-interval'
import week from '../dist/week'
import timeDuration from '../dist/time-duration'

const ts = 1487136727315

describe('日期转化', () => {

  describe('格式化日期', () => {
    it('should return a string', () => {
      const r   = (`${ moment('YYYY-MM-DD')() }${ ' 20:30' }`)
      log('result: ', r)
      assert.equal('string', typeof r)
    })
  })

  describe('添加时间', () => {
    it('添加一天', () => {
      const r = moment('YYYY-MM-DD HH:mm:ss')(addInterval(1, 'd')(moment('YYYY-MM-DD HH:mm:ss')(ts)))
      log('result: ', r)
      assert.equal('string', typeof r)
    })

    it('添加一小时', () => {
      const r = moment('YYYY-MM-DD HH:mm:ss')(addInterval(1, 'h')(moment('YYYY-MM-DD HH:mm:ss')(ts)))
      log('result: ', r)
      assert.equal('string', typeof r)
    })

    it('添加一分钟', () => {
      const r = moment('YYYY-MM-DD HH:mm:ss')(addInterval(1, 'm')(moment('YYYY-MM-DD HH:mm:ss')(ts)))
      log('result: ', r)
      assert.equal('string', typeof r)
    })

    it('添加一秒钟', () => {
      const r = moment('YYYY-MM-DD HH:mm:ss')(addInterval(2, 's' ,moment('YYYY-MM-DD HH:mm:ss')(ts)))
      log('result: ', r)
      assert.equal('string', typeof r)
    })
  })

  describe('获取星期', () => {
    it('should return a string', () => {
      const r = week()(moment('day')(ts))
      log('result', r)
      assert.equal('string', typeof r)
    })
  })

  describe('获取时间间隔', () => {
    it('should return a object', () => {
      const str1 = '2017-02-14 20:00:00'
      const str2 = '2017-02-15 0:20:30'
      const stamp = moment('x')
      const r   = timeDuration(stamp(str1), stamp(str2))
      log('result', r)
      assert.equal('object', typeof r)
    })
  })

})
