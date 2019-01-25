const request = require('supertest')
const {graphql} = require('graphql')

const app = require('../../../app')
const schema = require('../../schema')

describe('GraphQl Users. Single', () => {
  test('Should fetch a single User', async () => {
    const graphQlQuery = `
    query GetUsersQuery {
      users {
        name
        email
      }
    }
        `
    console.log('hiiu')
    try {
      const res = await graphql(schema, graphQlQuery)
    } catch(e) {
      console.log(e)
    }
    console.log('resresress')
  })
})
