const {
  GraphQLObjectType,
  GraphQLString
} = require('graphql')

const name = 'AuthToken'

const fields = {
  token: { type: GraphQLString }
}

const AuthTokenType = new GraphQLObjectType({
  name,
  fields
})

module.exports = AuthTokenType
