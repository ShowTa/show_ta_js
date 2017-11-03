sequelize = require '../database/db_client'
Sequelize = require('sequelize')

User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
})

module.exports = User