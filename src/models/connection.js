const mongoose = require('mongoose');

const connection = (MONGODB_URL) => {
  mongoose.connect(MONGODB_URL, {useNewUrlParser: true})
}

const disconnect = () => {
  mongoose.connection.close()
}

module.exports = {
  connection,
  disconnect
}
