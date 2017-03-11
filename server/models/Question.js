let Sequelize = require('sequelize')
let sequelize = require('../db/db')

var Question = sequelize.define('question', {
  question: {
    type: Sequelize.STRING,
    field: 'question'
  },
  answer1: {
    type: Sequelize.STRING,
    field: 'answer_1'
  },
  answer2: {
    type: Sequelize.STRING,
    field: 'answer_2'
  },
  answer3: {
    type: Sequelize.STRING,
    field: 'answer_3'
  },
  answer4: {
    type: Sequelize.STRING,
    field: 'answer_4'
  }},
  {
    freezeTableName: true
  }
)

Question.sync({force: false}).then(() => {
  console.log('Question is ready')
})

module.exports = Question
