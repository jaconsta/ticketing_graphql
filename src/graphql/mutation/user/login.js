const {
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLInputObjectType
} = require('graphql')

const AuthTokenType = require('../../types/AuthToken')
const UserModel = require('../../../models/User')
const { LoginInputType } = require('./inputs')   // name will be excluded
const { isPasswordValid, createJwtToken } = require('../../../modules/crypto')

const resolve = async (root, params, options) => {
  const { email, password } = params.user

  const user = await UserModel.findOne({ email })
  if (!isPasswordValid(user.password, password)) {
    throw new Error('Invalid password')
  }

  const token = createJwtToken({email: user.email, name: user.name})
  return { token }
}
const addUser = {
  type: AuthTokenType,
  args: {
    user: { type: LoginInputType }
  },
  resolve
}

module.exports = addUser
