const { model, Schema } = require('mongoose')
const { Types: { ObjectId }} = Schema

const modelName = 'Company'

const companySchema = new Schema({
  name: String,
  owner: ObjectId
})

module.exports = model(modelName, companySchema);
