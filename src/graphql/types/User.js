const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLList
} = require('graphql')
const { ObjectId } = require('mongoose').Types

const Company = require('./Company')
const { getCompanyOwner } = require('../resolvers/company')

const name = 'User'

ObjectId.prototype.valueOf = function () {
	return this.toString();
}

const fields = {
  _id: { type: new GraphQLNonNull(GraphQLID) },
  name: { type: GraphQLString },
  email: { type: GraphQLString },
  company: { type: GraphQLList(Company), resolve: getCompanyOwner }
}

const UserType = new GraphQLObjectType({
  name,
  fields
})

module.exports = UserType
