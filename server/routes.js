let db = require('./db/db')
let Question = require('./models/Question')

module.exports = function(router) {

	router.get('/', function(req, res) {
		res.render('home')
	})

  return router
}
