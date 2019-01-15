const {
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInputObjectType
} = require('graphql')

const AddCompanyInputType = new GraphQLInputObjectType({
  name: 'InputAddCompany',
  fields: {
    name: { type: GraphQLNonNull(GraphQLString) },
    owner:  { type: GraphQLNonNull(GraphQLID) }
  }
})

module.exports = {
  AddCompanyInputType
}
