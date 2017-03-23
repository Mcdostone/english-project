let Sequelize = require('sequelize')
let config = require('../config')

let sequelize = new Sequelize(config.database, config.username, config.password, {
  logging: false,
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
})

module.exports = sequelize
