const mongoose = require('mongoose');

const dbConnect = async () => {
  await mongoose.connect(global.__MONGO_URI__, {useNewUrlParser: true}, (err) => {
    if (err) console.error(err);
  })
  await clearDatabase()
}

const clearDatabase = async () => await mongoose.connection.db.dropDatabase()

const dbDisconnect =async () => {
  await mongoose.connection.close();
}

module.exports = {
  dbConnect,
  dbDisconnect
}