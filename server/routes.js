let path = require('path')
let db = require('./db/db')
let Question = require('./models/Question')
let Sequelize = require('sequelize')
let utils = require('./utils/Formatter')

module.exports = function(router) {

	router.get('/', function(req, res) {
		res.sendFile(path.join(__dirname + '/views/index.html'))
	})

	router.get('/api/question', function(req, res) {
		Question.find({
			order: [[ Sequelize.fn('RANDOM') ]]
		}).then( q => {
			res.send(JSON.stringify(utils.formatQuestion(q)));
		});
	})

	router.get('/api/questions', function(req, res) {
		let questions = []
		Question.findAll({ random: true, limit: 200 }).then(q => {
			q.forEach((question) => {
				questions.push(utils.formatQuestion(question))
			})
			res.setHeader('Content-Type', 'application/json');
			res.send(JSON.stringify(questions));
		});
	})



  return router
}
