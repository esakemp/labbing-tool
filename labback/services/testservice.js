let db = require('../data/db_init.json')

const getInitDB = () => {
  return new Promise((resolve, reject) => {
    resolve(db)
  })
}

module.exports = {
  getInitDB
}