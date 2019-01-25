const { GraphQLObjectType } = require('graphql')
const graphqlHTTP = require('express-graphql')

const schema = require('./schema')
const { NODE_ENV } = require('../config')

const shouldEnableGraphiQl = () => {
  return NODE_ENV != 'production'
}

const graphqlApi = graphqlHTTP({
  schema,
  // rootValue,
  graphiql: shouldEnableGraphiQl()
})

module.exports = graphqlApi
