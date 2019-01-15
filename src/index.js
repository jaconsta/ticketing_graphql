let express =  require('express')

const databaseConnection = require('./models/connection')
const graphqlApi = require('./graphql')
const {
  PORT,
  MONGODB_URL
} = require('./config')

databaseConnection(MONGODB_URL)

let app = express()
app.use('/graphql', graphqlApi)

app.listen(PORT)
console.log(`App running on port ${PORT}. Provides /graphql`)
