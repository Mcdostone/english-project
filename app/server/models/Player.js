let Sequelize = require('sequelize')
let sequelize = require('../db/db')

var Player = sequelize.define('players', {
    username: {
      type: Sequelize.STRING,
      field: 'username',
    },
    points: {
      type: Sequelize.INTEGER,
      field: 'points'
    },
    seconds: {
      type: Sequelize.INTEGER,
      field: 'seconds'
    },
  },
  {
    freezeTableName: true,
  }
)

Player.sync({force: true}).then(() => {
  console.log(' ### CREATION table Players')
})

module.exports = Player
