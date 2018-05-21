const base64Digits = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
const hexDigits = '0123456789abcdef'

function Base64ToHex(base64) {
  let hex = ''

  for (let i = 0; i < 24;) {
    const e1 = base64Digits.indexOf(base64[i++])
    const e2 = base64Digits.indexOf(base64[i++])
    const e3 = base64Digits.indexOf(base64[i++])
    const e4 = base64Digits.indexOf(base64[i++])
    const c1 = (e1 << 2) | (e2 >> 4)
    const c2 = ((e2 & 15) << 4) | (e3 >> 2)
    const c3 = ((e3 & 3) << 6) | e4

    hex += hexDigits[c1 >> 4]
    hex += hexDigits[c1 & 15]

    if (e3 !== 64) {
      hex += hexDigits[c2 >> 4]
      hex += hexDigits[c2 & 15]
    }
    if (e4 !== 64) {
      hex += hexDigits[c3 >> 4]
      hex += hexDigits[c3 & 15]
    }
  }

  return hex
}

module.exports = Base64ToHex
