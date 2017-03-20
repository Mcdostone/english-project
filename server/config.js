var path = require('path');

module.exports = {
  port:     3141,
  database: 'english',
  username: 'root',
  password: 'root',
  questionsFile: path.join(__dirname, 'questions.csv')
}
