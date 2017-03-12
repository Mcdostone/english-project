let path = require('path')
let db = require('./db/db')
let Question = require('./models/Question')

module.exports = function(router) {

	router.get('/', function(req, res) {
		res.sendFile(path.join(__dirname + '/views/index.html'))
	})

  return router
}
