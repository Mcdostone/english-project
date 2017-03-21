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
  },
  {
    freezeTableName: true,
  }
)

Player.sync({force: false}).then(() => {
  console.log('######### Players table created\n')
})

module.exports = Player
