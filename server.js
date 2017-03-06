var express = require('express')
var ejs = require('ejs')
var engine = require('ejs-mate')
var bodyParser = require('body-parser')
var helpers = require('express-helpers')
var routes = require('./routes')


var app = express()
var PORT = 3141


app.set('view engine', 'ejs')
app.engine('ejs', engine)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))
helpers(app)


var router = express.Router()
app.use('/', routes(router))


app.listen(PORT, function() {
	console.log("server is running: http://localhost:" + PORT)
});
