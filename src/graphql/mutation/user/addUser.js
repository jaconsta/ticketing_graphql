const {
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLInputObjectType
} = require('graphql')

const UserType = require('../../types/User')
const UserModel = require('../../../models/User')
const { AddUserInputType } = require('./inputs')

const resolve = async (root, params, options) => {
  const { user } = params

  const newUser = new UserModel(user)
  await newUser.save()
  return newUser
}
const addUser = {
  type: UserType,
  args: {
    user: { type: AddUserInputType }
  },
  resolve
}

module.exports = addUser
