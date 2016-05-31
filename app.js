
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')
var routes = require('./routes/index');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', routes.partone);
app.get('/icons', routes.icons);
app.get('/playground', routes.playground)
app.get('/playground_quest', routes.playground_quest)
app.get('/partone', routes.partone)
app.get('/reference', routes.reference)
app.get('/mintoverviewT', routes.mintoverviewT)
app.get('/mintupdatesT', routes.mintupdatesT)
app.get('/fetch1', routes.fetch1)
app.get('/auth', routes.auth)
app.get('/walt', routes.walt)

// Pages
app.get('/page1', routes.page1)
app.get('/page1_2', routes.page1_2)
app.get('/page1_3', routes.page1_3)
app.get('/page1_4', routes.page1_4)
app.get('/refresh1', routes.refresh1)
app.get('/page2', routes.page2)
app.get('/page2_2', routes.page2_2)
app.get('/page2_3', routes.page2_3)
app.get('/page2_4', routes.page2_4)
app.get('/page3', routes.page3)
app.get('/page3_1', routes.page3_1)
app.get('/page3_2', routes.page3_2)
app.get('/page3_3', routes.page3_3)
app.get('/page3_4', routes.page3_4)
app.get('/page4', routes.page4)
app.get('/page5', routes.page5)
app.get('/page6', routes.page6)
app.get('/page7', routes.page7)
app.get('/page8', routes.page8)

// Quest
app.get('/MIICWwIBAAKBg', routes.quest2_1)
app.get('/quest3_1', routes.quest3_1)
app.get('/QKMvsTgewv4T', routes.quest4_1)




http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
