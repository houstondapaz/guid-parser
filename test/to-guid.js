const { assert } = require('chai')
const ToGuid = require('../src/to-GUID')
const ToBin = require('../src/to-bin')
const uuid = require('uuid')
const IsGuid = require('../src/is-guid')

describe('to-guid', () => {
  it('should return a gui on parse a valid guid', () => {
    const bin = ToBin(uuid.v1())
    const guid = ToGuid(bin)
    assert.isTrue(IsGuid(guid))
  })

  it('should return the guid transformed from a binary', () => {
    const previousGuid = uuid.v1()
    const bin = ToBin(previousGuid)
    const guid = ToGuid(bin)
    assert.equal(guid, previousGuid)
  })
})
