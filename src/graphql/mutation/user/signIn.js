const {
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLInputObjectType
} = require('graphql')

const UserType = require('../../types/User')
const UserModel = require('../../../models/User')
const { RegisterInputType } = require('./inputs')

const resolve = async (root, params, options) => {
  const { user } = params

  const newUser = new UserModel(user)
  await newUser.save()
  return newUser
}
const register = {
  type: UserType,
  args: {
    user: { type: RegisterInputType }
  },
  resolve
}

module.exports = register
