import { assert } from 'chai'
import log from '../src/log'
import parseQuery from '../src/parse-query'
import stringifyQuery from '../src/stringify-query'

describe('URL', () => {
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
