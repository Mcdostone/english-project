let path = require('path')
let db = require('./db/db')
let Question = require('./models/Question')
let Player = require('./models/Player')
let Sequelize = require('sequelize')
let utils = require('./utils/Formatter')


module.exports = function(router, csrfProtection) {

	router.get('/', function(req, res) {
		res.sendFile(path.join(__dirname + '/views/index.html'))
	})

	router.get('/api/questions', csrfProtection, function(req, res) {
		let questions = []
		Question.findAll({ limit: 200 }).then(q => {
			q.forEach((question) => {
				questions.push(utils.formatQuestion(question))
			})
			res.setHeader('Content-Type', 'application/json');
			res.send(JSON.stringify({questions: questions, token: req.csrfToken()}));
		});
	})

	router.get('/api/top', function(req, res) {
		Player.findAll({ order: 'points DESC', limit: 200 }).then(p => {
			res.setHeader('Content-Type', 'application/json');
			res.send(JSON.stringify(p));
		});
	})

	router.post('/api/top', csrfProtection, function(req, res) {
		if(req.body.username && req.body.points) {
			Player.create({
				username: req.body.username,
				points: req.body.points,
				seconds: req.body.seconds,
			}).then(function(player){
				res.setHeader('Content-Type', 'application/json');
				res.send(JSON.stringify(player));
			})
		}
	})

	router.get('*', function(req, res, next) {
		res.redirect('/');
	});

  return router
}
