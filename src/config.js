const {
  NODE_ENV = 'development',
  PORT = '8080',
  MONGODB_URL = 'mongodb://localhost:27017/people_queue'
} = process.env

module.exports = {
  NODE_ENV,
  PORT,
  MONGODB_URL
}
