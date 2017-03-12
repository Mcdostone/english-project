var express = require('express')
var app = express();
var ejs = require('ejs')
var engine = require('ejs-mate')
var bodyParser = require('body-parser')
var helpers = require('express-helpers')
var routes = require('./routes')
var sockets =  require('./sockets')
var config = require('./config')

app.set('view engine', 'ejs')
app.engine('ejs', engine)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))
app.use('/', routes(express.Router()))

helpers(app)

app.listen(config.port, function() {
	let io = require('socket.io').listen(this)
	sockets(io)
	console.log("server is running: http://localhost:" + config.port)
});
