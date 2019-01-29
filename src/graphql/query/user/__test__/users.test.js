const request = require('supertest')
const {graphql} = require('graphql')

const {dbConnect, dbDisconnect} = require('../../../../test/helpers')
const { createUser } = require('../../../../test/factories/models/userFactory')
const schema = require('../../../schema')

beforeAll(dbConnect)
afterAll(dbDisconnect)

describe('GraphQl Users. Many', () => {
  test('Should fetch all existing users', async () => {
    const graphQlQuery = `
    query GetUsersQuery {
      users {
        _id
        name
        email
      }
    }
    `

    const newUser = await createUser()

    const {data} = await graphql(schema, graphQlQuery)
    const { users: [user]} = data
    expect(user.name).toBe(newUser.name)
    expect(user.email).toBe(newUser.email)
  })
})
