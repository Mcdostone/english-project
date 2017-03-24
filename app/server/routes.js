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

	router.get('/api/question', csrfProtection,function(req, res) {
		res.setHeader('Content-Type', 'application/json');
		res.send(JSON.stringify({token: req.csrfToken()}));
	})

	router.post('/api/question', csrfProtection, function(req, res) {
		if(req.body.question && req.body.answers && req.body.correct) {
			Question.create({
				question: req.body.question,
				answer1: req.body.answers[0],
				answer2: req.body.answers[1],
				answer3: req.body.answers[2],
				answer4: req.body.answers[3],
				correct: req.body.correct,
				visual: req.body.visual
			})
			.then((q) => {
				res.setHeader('Content-Type', 'application/json');
				res.send(JSON.stringify(q));
			}).catch(err => {
				//console.log(err);
				res.setHeader('Content-Type', 'application/json');
				res.send();
			});
		}
	})

	router.get('*', function(req, res, next) {
		res.redirect('/');
	});

  return router
}
