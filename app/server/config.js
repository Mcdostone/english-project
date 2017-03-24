var path = require('path');

module.exports = {
  port:     process.env.PORT || 8080,
  database: 'english',
  username: 'root',
  password: 'root',
  questionsFile: path.join(__dirname, 'questions.csv')
}
