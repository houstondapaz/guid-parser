function HexToBase64(hex) {
  const base64Digits = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
  let base64 = ''
  let group

  for (let i = 0; i < 30; i += 6) {
    group = parseInt(hex.substr(i, 6), 16)
    base64 += base64Digits[(group >> 18) & 0x3f]
    base64 += base64Digits[(group >> 12) & 0x3f]
    base64 += base64Digits[(group >> 6) & 0x3f]
    base64 += base64Digits[group & 0x3f]
  }

  group = parseInt(hex.substr(30, 2), 16)
  base64 += base64Digits[(group >> 2) & 0x3f]
  base64 += base64Digits[(group << 4) & 0x3f]
  base64 += '=='
  return base64
}

module.exports = HexToBase64
