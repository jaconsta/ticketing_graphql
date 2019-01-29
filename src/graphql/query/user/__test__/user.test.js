const request = require('supertest')
const {graphql} = require('graphql')

const {dbConnect, dbDisconnect} = require('../../../../test/helpers')
const schema = require('../../../schema')
const { createUser } = require('../../../../test/factories/models/userFactory')

beforeAll(dbConnect)
afterAll(dbDisconnect)

describe('GraphQl Users. Single', () => {
  test('Should fetch a single User', async () => {
    const newUser = await createUser()
    const graphQlQuery = `
    query GetUserQuery {
      user(email:"${newUser.email}") {
        _id
        name
        email
      }
    }
        `
    const {data} = await graphql(schema, graphQlQuery)
    const {user} = data
    expect(newUser._id.toString()).toBe(user._id)
    expect(newUser.email).toBe(user.email)
  })
})
