sequelize = require '../db_client'
Sequelize = require 'sequelize'

Favorite = sequelize.define('favorite',
  fromUser:
    type: Sequelize.INTEGER
  toUser:
    type: Sequelize.INTEGER
)

module.exports = Favorite
