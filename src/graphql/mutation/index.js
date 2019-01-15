const { GraphQLObjectType } = require('graphql')
const user = require('./user')
const company = require('./company')

const name = 'Mutation'
const fields = {
  ...user,
  ...company
}

module.exports = new GraphQLObjectType({
  name,
  fields
})
