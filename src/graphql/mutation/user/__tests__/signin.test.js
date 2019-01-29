const request = require('supertest')
const {graphql} = require('graphql')

const {dbConnect, dbDisconnect} = require('../../../../test/helpers')
const schema = require('../../../schema')

const User = require('../../../../models/User')

beforeAll(dbConnect)
afterAll(dbDisconnect)

describe('GraphQl Mutation. SignIn', () => {
  test('A new user signs in', async () => {
    const userName = 'I am b'
    const email = 'b@mail.com'
    const password = 'b'
    const graphQlQuery = `
    mutation asignInMutation {
      signIn(user:{email:"${email}", password:"${password}", name:"${userName}"}) {
        name, _id, email,
      }
    }
    `
    const { data } = await graphql(schema, graphQlQuery)
    const {signIn} = data

    expect(signIn.name).toBe(userName)
    expect(signIn.email).toBe(email)
    expect(signIn.password).not.toBe(password)
  })
})
