const HexToBase64 = require('./hex-to-base64')
const IsGuid = require('./is-guid')
const { Binary } = require('mongodb')

function toBin(guid) {
  if (IsGuid(guid)) {
    let hex = guid.replace(/[{}-]/g, '')

    const a = hex.substr(6, 2) + hex.substr(4, 2) + hex.substr(2, 2) + hex.substr(0, 2)
    const b = hex.substr(10, 2) + hex.substr(8, 2)
    const c = hex.substr(14, 2) + hex.substr(12, 2)
    const d = hex.substr(16, 16)

    hex = a + b + c + d

    const base64 = HexToBase64(hex)
    const buf = new Buffer(base64, 'base64')

    return new Binary(buf, 3)
  }
}

module.exports = toBin
