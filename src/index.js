const app =  require('./app')

const {connection : databaseConnection} = require('./models/connection')
const graphqlApi = require('./graphql')
const {
  PORT,
  MONGODB_URL
} = require('./config')

databaseConnection(MONGODB_URL)

app.listen(PORT)
console.log(`App running on port ${PORT}. Provides /graphql`)
