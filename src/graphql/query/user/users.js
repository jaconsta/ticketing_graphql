const {
  GraphQLList
} = require('graphql')

const UserType = require('../../types/User')
const UserModel = require('../../../models/User')

const type = new GraphQLList(UserType)
const resolve = (root, params, options) => {
  return UserModel.find().exec()
}

const query = {
  type,
  resolve
}

module.exports = query
