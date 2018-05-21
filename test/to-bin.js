const { assert } = require('chai')
const ToBin = require('../src/to-bin')
const uuid = require('uuid')
const { Binary } = require('mongodb')

describe('to-bin', () => {
  it('should return a bin on parse a valid guid', () => {
    const bin = ToBin(uuid.v1())
    assert.instanceOf(bin, Binary)
  })

  it('should return undefined on parse a invalid guid', () => {
    const bin = ToBin('')
    assert.isUndefined(bin)
  })
})
