const { model, Schema } = require('mongoose')

const modelName = 'User'

const userSchema = new Schema({
  name: String,
  email: String
})

module.exports = model(modelName, userSchema);
