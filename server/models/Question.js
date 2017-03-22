let Sequelize = require('sequelize')
let sequelize = require('../db/db')
let fs = require('fs');
let config = require('../config');
let parse = require('csv-parse');

var Question = sequelize.define('questions', {
  question: {
    type: Sequelize.STRING,
    field: 'question',
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

Question.sync({force: true}).then(() => {
  fs.createReadStream(config.questionsFile).pipe(parse({
    delimiter: '|',
    comment: '#',
    relax_column_count: true,
  })).on('data', function(csvrow) {
    if(csvrow.length < 6)
      console.log("PROBLEM with CSV file !", csvrow);
    else {
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
        visual: visual}).then(function(task){})
    }
    }).on('end',function() {
      console.log('finished');
  });
})

module.exports = Question
