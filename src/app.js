const express =  require('express')
const app = express()

const graphqlApi = require('./graphql')
const { userAuthenticated } = require('./middlewares')

app.use(userAuthenticated)
app.use('/graphql', graphqlApi)

module.exports  = app
