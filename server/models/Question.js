let Sequelize = require('sequelize')
let sequelize = require('../db/db')

var Question = sequelize.define('questions', {
  question: {
    type: Sequelize.STRING,
    field: 'question',
    unique: true
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
  },
  correct: {
    type: Sequelize.INTEGER,
    field: 'correct'
  },
  visual: {
    type: Sequelize.STRING,
    field: 'visual'
  }},
  {
    freezeTableName: true,
    timestamps: false
  }
)

Question.sync({force: false}).then(() => {
  console.log('Question is ready')
})

module.exports = Question
