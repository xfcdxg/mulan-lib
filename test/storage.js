import { assert } from 'chai'
import log from '../src/log'
import setStore from '../src/set-store'
import getStore from '../src/get-store'
import removeStore from '../src/remove-store'

describe('Storage', () => {
  describe('set localStorage', () => {
    it('should be equals query', () => {
      const query = '?a=1&b=2'
      setStore('local', query)
      const r = getStore('local')
      log('result: ', r)
      assert.equal(query, r)
    })
  })

  describe('set sessionStorage', () => {
    it('should be equals obj', () => {
      const obj = {
        a: 1,
        b: 2
      }
      setStore('session', obj, 'session')
      const r = getStore('session', 'session')
      log('result: ', r)
      assert.equal(r.a, obj.a)
    })
  })

  describe('remove localStorage', () => {
    it('should return undefined', () => {
      removeStore('local')
      removeStore('session', 'session')
      log('result: ', getStore('local'), getStore('session', 'session'))
      assert.equal(getStore('local'), getStore('session', 'session'))
    })
  })


})
