const { GraphQLString } = require('graphql')

const UserType = require('../../types/User')
const UserModel = require('../../../models/User')

const type = UserType
const args = {
  email: { type: GraphQLString }
}
const resolve = (root, params, options) => {
  const { email } = params
  return UserModel.findOne({email}).exec()
}

const query = {
  type,
  args,
  resolve
}

module.exports = query
