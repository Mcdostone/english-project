let Sequelize = require('sequelize')
let config = require('../config')

let sequelize = undefined

if (process.env.DATABASE_URL) {
  // the application is executed on Heroku ... use the postgres database
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect:  'postgres',
    protocol: 'postgres',
    logging:  true
  })
}
else {
  sequelize = new Sequelize(config.database, config.username, config.password, {
    logging: false,
    host: 'localhost',
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  })

}


module.exports = sequelize
