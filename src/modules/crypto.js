const crypto = require('crypto')

const hashMethod = 'sha256'
const hashSecret = 'mK0tHPVFZ04GfxaWxB9D'

const getHashString = (unHashedString) => {
  if (typeof unHashedString !== 'string') return ''
  
  return crypto
    .createHash(hashMethod)
    .update(`${unHashedString}${hashSecret}`)
    .digest('hex')
}

module.exports = {
  getHashString
}
