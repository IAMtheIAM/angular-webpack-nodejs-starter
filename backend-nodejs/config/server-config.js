var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development',
    config =  require('./env-config');

var express = require('express');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var compress = require('compression');
var methodOverride = require('method-override');
var cors = require('cors');
var whitelist = ['http://localhost', 'http://127.0.0.1',];
var app = express();
var useCors = cors(); // all requests accepted
// var useCors = cors(corsOptions); // only whitelisted domain requests accepted
var corsOptions = {
    origin: function (origin, callback) {
        var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(originIsWhitelisted ? null : 'Not Allowed', originIsWhitelisted);
    },
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// app.set('views', (path.resolve(__dirname, '../app/routes')));
app.set('views', (path.resolve(__dirname, '../app/routes')));
app.set('view engine', 'pug');

// app.locals.property makes the `property` available within the pug templates
app.locals.ENV = env;
app.locals.localIP = config.localIP;
app.locals.ENV_DEVELOPMENT = env == 'development';
app.options('/api', cors()); // include before other routes
// app.use(favicon(config.root + '/public/img/favicon.ico'));
app.use(useCors);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(compress());
app.use(express.static(path.resolve(__dirname,'../wwwroot')));
app.use(methodOverride());

module.exports = app;

// console.log("__dirname: " + path.resolve(__dirname));
