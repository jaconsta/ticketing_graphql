const {
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLInputObjectType
} = require('graphql')

const AddUserInputType = new GraphQLInputObjectType({
  name: 'InputAddUser',
  fields: {
    name: { type: GraphQLNonNull(GraphQLString) },
    email:  { type: GraphQLNonNull(GraphQLString) }
  }
})

module.exports = {
  AddUserInputType
}
