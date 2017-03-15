let path = require('path')
let db = require('./db/db')
let Question = require('./models/Question')

let prout = {
	question: "Who are you?",
	answers: ["Me","you", "us", "yours"],
	visual: "https://media.mnn.com/assets/images/2017/01/cow-in-pasture.jpg.838x0_q80.jpg"
}
module.exports = function(router) {

	router.get('/', function(req, res) {
		res.sendFile(path.join(__dirname + '/views/index.html'))
	})

	router.get('/api/questions', function(req, res) {
		console.log(req)
		res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(prout));
	})


  return router
}
