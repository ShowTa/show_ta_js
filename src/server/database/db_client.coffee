require('dotenv').config()
Sequelize = require('sequelize');

driver   = process.env.DB_DRIVER
host     = process.env.DB_HOST
database = process.env.DB_DATABASE
username = process.env.DB_USERNAME
password = process.env.DB_PASSWORD
dbpath   = process.env.DB_PATH

console.log()

option = {
  host,
  dialect: driver,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
}

if driver == 'sqlite'
  option.storage = dbpath

sequelize = new Sequelize(database, username, password, option)

module.exports = sequelize