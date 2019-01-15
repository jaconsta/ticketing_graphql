const Company = require('../../models/Company')

const getCompanyOwner = person => {
  return Company.find({owner: person._id})
}

module.exports = {
  getCompanyOwner
}
