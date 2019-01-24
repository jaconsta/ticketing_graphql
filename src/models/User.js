const { model, Schema } = require('mongoose')

const { getHashString } = require('../modules/crypto')
const { toLower } = require('../modules/stringHelpers')
const modelName = 'User'

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, set: toLower },
  password: { type:String, set: getHashString }
})

module.exports = model(modelName, userSchema);
