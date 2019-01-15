const {
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLInputObjectType
} = require('graphql')

const CompanyType = require('../../types/Company')
const CompanyModel = require('../../../models/Company')
const { AddCompanyInputType } = require('./inputs')

const resolve = async (root, params, options) => {
  const { company } = params

  const newCompany = new CompanyModel(company)
  await newCompany.save()
  return newCompany
}
const addCompany = {
  type: CompanyType,
  args: {
    company: { type: AddCompanyInputType }
  },
  resolve
}

module.exports = addCompany
