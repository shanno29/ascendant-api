const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(config.db);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({ type: 'application/json'}));

app.get('/', (req, res) => res.send('Hello From VibeTribe'));
app.use('/coverage', express.static(path.join(__dirname + config.coverage)));
app.use('/public', express.static(path.join(__dirname + config.public)));
app.use('/doc', express.static(path.join(__dirname + config.doc)));
app.use('/api', require('./api/index'));

app.listen(config.port, () => console.log('Express Connected On Port: '+ config.port));

module.exports = app;
