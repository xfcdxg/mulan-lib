import { assert } from 'chai'
import log from '../src/log'
import parseQuery from '../src/parse-query'
import stringifyQuery from '../src/stringify-query'
import encode from '../src/encode'
import decode from '../src/decode'
import setServerUrl from '../src/set-server-url'

describe('URL', () => {
  describe('set server url', () => {
    it('should return string', () => {
      const r = setServerUrl('https://test.com/')
      log('result: ', r)
      assert.equal('string', typeof r)
    })
  })
  describe('encode', () => {
    it('should return escape string', () => {
      const r = encode('?a=1&b=2')
      log('result: ', r)
      assert.equal('%3Fa%3D1%26b%3D2', r)
    })
  })
  describe('decode', () => {
    it('should return unescape string', () => {
      const r = decode('%3Fa%3D1%26b%3D2')
      log('result: ', r)
      assert.equal('?a=1&b=2', r)
    })
  })
  describe('格式化url query', () => {
    it('should return a json', () => {
      const query = '?a=1&b=2'
      const r = parseQuery(query)
      log('result: ', r)
      assert.equal('object', typeof r)
    })
  })

  describe('格式化url query', () => {
    it('should return a object', () => {
      const postData = { a: 1, b: 2 }
      const r = stringifyQuery(postData)
      log('result: ', r)
      assert.equal('string', typeof r)
    })
  })
})
