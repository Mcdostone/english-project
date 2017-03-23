var express = require('express')
var app = express();
var ejs = require('ejs')
var engine = require('ejs-mate')
var bodyParser = require('body-parser')
var session = require('express-session')
var cookieParser = require('cookie-parser')
var helpers = require('express-helpers')
var routes = require('./routes')
var sockets =  require('./sockets')
var config = require('./config')
var cors = require('cors')
var csrf = require('csurf')

app.use(cors( {origin: 'http://localhost:8080' } ))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))
app.use(session({
	secret: 'fkjfj4565sdfer9qdsglkdfg84x15cfg0v#~[] f',
	resave: false,
	saveUninitialized: true
}))
const csrfProtection = csrf();

app.use('/', routes(express.Router(), csrfProtection))
helpers(app)

app.listen(config.port, function() {
	let io = require('socket.io').listen(this)
	sockets(io)
	console.log("server is running: http://localhost:" + config.port)
});
