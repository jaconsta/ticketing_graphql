const {
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLInputObjectType
} = require('graphql')

const RegisterInputType = new GraphQLInputObjectType({
  name: 'InputRegisterUser',
  fields: {
    name: { type: GraphQLNonNull(GraphQLString) },
    email:  { type: GraphQLNonNull(GraphQLString) },
    password:  { type: GraphQLNonNull(GraphQLString) }
  }
})

const AddUserInputType = new GraphQLInputObjectType({
  name: 'InputAddUser',
  fields: {
    name: { type: GraphQLNonNull(GraphQLString) },
    email:  { type: GraphQLNonNull(GraphQLString) }
  }
})

const LoginInputType = new GraphQLInputObjectType({
  name: 'InputLoginUser',
  fields: {
    email:  { type: GraphQLNonNull(GraphQLString) },
    password:  { type: GraphQLNonNull(GraphQLString) }
  }
})


module.exports = {
  AddUserInputType,
  RegisterInputType,
  LoginInputType
}
