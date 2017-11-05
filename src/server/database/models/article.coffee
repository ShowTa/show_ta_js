sequelize = require '../db_client'
Sequelize = require 'sequelize'

Article = sequelize.define('article',
  title:
    type: Sequelize.STRING
  content:
    type: Sequelize.STRING
  release_flg:
    type: Sequelize.BOOLEAN
    defaultValue: true
)

module.exports = Article
