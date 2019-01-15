const { GraphQLObjectType, GraphQLSchema } = require('graphql')
const graphqlHTTP = require('express-graphql')

const query = require('./query')
const mutation = require('./mutation')
const { NODE_ENV } = require('../config')

const shouldEnableGraphiQl = () => {
  return NODE_ENV != 'production'
}

const schema = new GraphQLSchema({
  query,
  mutation
})

const graphqlApi = graphqlHTTP({
  schema,
  // rootValue,
  graphiql: shouldEnableGraphiQl()
})

module.exports = graphqlApi
