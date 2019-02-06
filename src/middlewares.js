

const userAuthenticated = async (req) => {
  const bearerToken = req.headers.authorization || ''

  console.log(bearerToken)
  console.log(req)

  req.next()
}

module.exports = {
  userAuthenticated
}
