const mongoose = require('mongoose');

const connection = (MONGODB_URL) => {
  mongoose.connect(MONGODB_URL, {useNewUrlParser: true})
}

module.exports = connection
