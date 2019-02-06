const { GraphQLObjectType } = require('graphql')
const graphqlHTTP = require('express-graphql')

const schema = require('./schema')
const { NODE_ENV } = require('../config')

const shouldEnableGraphiQl = () => {
  return NODE_ENV != 'production'
}

const context = request => {
  user: request.user
}
const graphqlApi = graphqlHTTP(request => {
  return {
    schema,
    // rootValue,
    graphiql: shouldEnableGraphiQl(),
    context: context(request)
  }
})

module.exports = graphqlApi
