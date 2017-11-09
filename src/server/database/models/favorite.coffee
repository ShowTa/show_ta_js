sequelize = require '../db_client'
Sequelize = require 'sequelize'

Favorite = sequelize.define('favorite',
  userId:
    type: Sequelize.INTEGER
  articleId:
    type: Sequelize.INTEGER
)

module.exports = Favorite
