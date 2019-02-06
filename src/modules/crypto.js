const crypto = require('crypto')
const jwt = require('jsonwebtoken')

const hashMethod = 'sha256'
const hashSecret = 'mK0tHPVFZ04GfxaWxB9D'
const tokenSecret = 'stWOiDt9HjitDfPGh4+csQ'

const getHashString = (unHashedString) => {
  if (typeof unHashedString !== 'string') return ''

  return crypto
    .createHash(hashMethod)
    .update(`${unHashedString}${hashSecret}`)
    .digest('hex')
}

const isPasswordValid = (hashedPassword, inputText) => {
  if (typeof inputText !== 'string') return false

  const hashedInput = getHashString(inputText)

  return hashedInput === hashedPassword
}

const createJwtToken = payload => {
  // Defautl SHA256
  return jwt.sign(payload, tokenSecret)
}

const verifyJwtToken = token => {
  return jwt.verity(token, token)
}

module.exports = {
  getHashString,
  isPasswordValid,
  createJwtToken,
  verifyJwtToken
}
