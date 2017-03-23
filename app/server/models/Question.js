let Sequelize = require('sequelize')
let sequelize = require('../db/db')
let fs = require('fs');
let config = require('../config');
let parse = require('csv-parse');

var Question = sequelize.define('questions', {
  question: {
    type: Sequelize.STRING,
    field: 'question',
    allowNull: false,
  },
  answer1: {
    type: Sequelize.STRING,
    field: 'answer_1',
    allowNull: false,
  },
  answer2: {
    type: Sequelize.STRING,
    field: 'answer_2',
    allowNull: false,
  },
  answer3: {
    type: Sequelize.STRING,
    field: 'answer_3',
    allowNull: false,
  },
  answer4: {
    type: Sequelize.STRING,
    field: 'answer_4',
    allowNull: false,
  },
  correct: {
    type: Sequelize.INTEGER,
    field: 'correct',
    allowNull: false,
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

Question.sync({force: true}).then(() => {
  fs.createReadStream(config.questionsFile).pipe(
    parse({
      delimiter: '|',
      comment: '#',
      relax_column_count: true,
    }))
    .on('data', function(csvrow) {
      let visual = undefined;
      if(csvrow.length > 6)
        visual = csvrow[6];

      Question.create({
        question: csvrow[0],
        answer1: csvrow[1],
        answer2: csvrow[2],
        answer3: csvrow[3],
        answer4: csvrow[4],
        correct: csvrow[5],
        visual: visual})
      .then(q => console.log(' ### INSERTION Question'))
      .catch((error) =>
        console.log(' ### ERROR: Some data are null in CSV file !'))
      })
      .on('end', () => {
        console.log(' ### CREATION table Question');
      });
    })

module.exports = Question
