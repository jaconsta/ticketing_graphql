const { GraphQLString } = require('graphql')

const CompanyType = require('../../types/Company')
const CompanyModel = require('../../../models/Company')

const type = CompanyType
const args = {
  userId: { type: GraphQLString },
  userRole: { type: GraphQLString}
}
const resolve = async (root, params, options) => {
  const { userId, userRole } = params
  return CompanyModel.findOne({[userRole]: userId}).exec()
}

const query = {
  type,
  args,
  resolve
}

module.exports = query
