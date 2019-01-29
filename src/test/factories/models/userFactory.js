const User = require('../../../models/User')

const createUser = async (args = {}) => {
  const {
    name = 'First Name',
    email = 'random@mail.com',
    password = '123456t'
  } = args

  const user_data = {name, email, password}
  const user = new User(user_data)
  await user.save()

  return user
}

module.exports = {
  createUser
}
