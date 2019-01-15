const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString
} = require('graphql')

const name = 'Company'
const fields = {
  _id: { type: new GraphQLNonNull(GraphQLID) },
  name: { type: GraphQLString }
}

const CompanyType = new GraphQLObjectType({
  name,
  fields
})

module.exports = CompanyType
