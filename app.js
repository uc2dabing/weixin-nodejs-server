
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');


var weixinAuth = require('./lib/weixin-auth.js')();
var xmlBodyParse = require('./lib/xmlBodyParse.js')();

var app = express();

// all environments
app.set('port', process.env.PORT || 8800);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// 验证微信请求
app.use(weixinAuth);

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(xmlBodyParse);

app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// trust nginx proxy
app.enable('trust proxy');

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.all('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
