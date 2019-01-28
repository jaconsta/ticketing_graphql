const request = require('supertest')
const {graphql} = require('graphql')

const app = require('../../../app')
const schema = require('../../schema')

// const {MongoClient} = require('mongodb');
const mongoose = require('mongoose');

let connection;
let db;

beforeAll(async () => {
  connection = await mongoose.connect(global.__MONGO_URI__, {useNewUrlParser: true});
});

afterAll(async () => {
  await mongoose.connection.close();
});


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
      console.log(res)
    } catch(e) {
      console.log(e)
    }
    console.log('resresress')
  })
})
