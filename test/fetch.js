import { assert } from 'chai'
import log  from '../src/log'
import get  from '../src/get'
import send from '../src/send'

describe('Fetch', () => {
  describe('fetch method: get', () => {
    it('should be equals query', done => {
      get('http://blm.test.otosaas.com/api/basis/v1/main/info').then(data => {
        log('result: ', data.message)
        assert.equal(0, data.code)
        done()
      })
    })
  })

  describe('fetch method: post', () => {
    it('should be equals query', done => {
      send('http://blm.test.otosaas.com/api/huafei/v1/order', { a: 1, b: 2 }).then(data => {
        log('result: ', data.message)
        assert.equal(1, data.code)
        done()
      })
    })
  })
})
