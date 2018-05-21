const Base64ToHex = require('./base64-to-hex')

function toGUID(buffer) {
  if (buffer) {
    let hex = Base64ToHex(buffer.toString('base64')) // don't use BinData's hex function because it has bugs in older versions of the shell
    const a = hex.substr(6, 2) + hex.substr(4, 2) + hex.substr(2, 2) + hex.substr(0, 2)
    const b = hex.substr(10, 2) + hex.substr(8, 2)
    const c = hex.substr(14, 2) + hex.substr(12, 2)
    const d = hex.substr(16, 16)

    hex = a + b + c + d

    const guid = hex.substr(0, 8) + '-' + hex.substr(8, 4) + '-' + hex.substr(12, 4) + '-' + hex.substr(16, 4) + '-' + hex.substr(20, 12)
    return guid
  }
}

module.exports = toGUID
