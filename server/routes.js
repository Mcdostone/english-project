let path = require('path')
let db = require('./db/db')
let Question = require('./models/Question')

let Sequelize = require('sequelize')
let sequelize = require('./db/db')

let answer = {
	question: "",
	answers: ["","", "", ""],
	visual: ""
}
module.exports = function(router) {

	router.get('/', function(req, res) {
		res.sendFile(path.join(__dirname + '/views/index.html'))
	})

	router.get('/api/questions', function(req, res) {
		//console.log(req)
		//Question.create({question: "Do you like chocolate?",answer1:"Yes",answer2:"Yes",answer3:"Yes",answer4:"Yes",visual:"https://media.mnn.com/assets/images/2017/01/cow-in-pasture.jpg.838x0_q80.jpg"})

		Question.find({
			order: [
				 [ Sequelize.fn('RANDOM') ]
			]
		}).then(function(Question){
			console.log(Question)
			answer.question = Question.question;
			answer.answers[0] = Question.answer1;
			answer.answers[1] = Question.answer2;
			answer.answers[2] = Question.answer3;
			answer.answers[3] = Question.answer4;
			answer.visual = Question.visual;
			console.log(JSON.stringify(answer));

		});
		res.setHeader('Content-Type', 'application/json');
		console.log(JSON.stringify(answer));
		res.send(JSON.stringify(answer));
	})


  return router
}
