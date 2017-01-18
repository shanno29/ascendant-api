const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const api = require('./api/index');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(config.db);
mongoose.connection.on('error', () => console.error('Mongoose Error'));
mongoose.connection.on('connected', () => console.log('Mongoose Connected: '+ config.db));

app.use(logger('dev'));
app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({ type: 'application/json'}));

app.get('/', (req, res) => res.send('Hello From VibeTribe'));
app.use('/coverage', express.static(path.join(__dirname + config.coverage)));
app.use('/public', express.static(path.join(__dirname + config.public)));
app.use('/doc', express.static(path.join(__dirname + config.doc)));
app.use('/api', api);

if(!module.parent){ app.listen(config.port, () => console.log('Express Connected On Port: '+ config.port)); }

module.exports = app;
