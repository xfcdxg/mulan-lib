import { assert } from 'chai'
import log from '../src/log'
import mergeState from '../src/merge-state'
import numToChinese from '../src/num-to-chinese'
import parseLocName from '../src/parse-loc-name'
import mask from '../src/mask'
import respType from '../src/_/response-type'

describe('通用方法', () => {

  describe('resp', () => {
    it('should return a string', () => {
      const r = respType('text')
      log('result: ', r)
      assert.equal('string', typeof r)
    })
  })

  describe('复制状态 (Redux)', () => {
    it('should return a boolean', () => {
      const state = {}
      const action = {
        type: 'TEST',
        test: { a: 1 }
      }
      const r = mergeState(state, action)
      log('result: ', r)
      assert.equal(false, r === action)
    })
  })

  describe('数字转成中文', () => {
    it('should return a string', () => {
      const r   = numToChinese(909)
      log('result: ', r)
      assert.equal('string', typeof r)
    })
  })

  describe('格式化地名，去除行政级别', () => {
    it('去除市', () => {
      const r   = parseLocName('上海市')
      log('result: ', r)
      assert.equal('string', typeof r)
    })
    it('去除省', () => {
      const r   = parseLocName('湖北省')
      log('result: ', r)
      assert.equal('string', typeof r)
    })
    it('去除区', () => {
      const r   = parseLocName('虹口区')
      log('result: ', r)
      assert.equal('string', typeof r)
    })
    it('去除自治区', () => {
      const r   = parseLocName('藏族自治区')
      log('result: ', r)
      assert.equal('string', typeof r)
    })
    it('去除特别行政区', () => {
      const r   = parseLocName('香港特别行政区')
      log('result: ', r)
      assert.equal('string', typeof r)
    })
  })

  describe('隐藏部分字符', () => {
    it('隐藏', () => {
      const r   = mask(3, 4, '13761283834', '#')
      log('result: ', r)
      assert.equal('string', typeof r)
    })
  })

})
