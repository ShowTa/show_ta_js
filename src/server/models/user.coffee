sequelize = require '../database/db_client'
Sequelize = require('sequelize')

User = sequelize.define('user', {
  name: {
    type: Sequelize.STRING
  }
  email: {
    type: Sequelize.STRING
  }
  password: {
    type: Sequelize.STRING
  }
  profile: {
    type: Sequelize.STRING
  }
  icon: {
    type: Sequelize.STRING
  }
})

module.exports = User
