const express =  require('express')
const app = express()

const graphqlApi = require('./graphql')

app.use('/graphql', graphqlApi)

module.exports  = app
