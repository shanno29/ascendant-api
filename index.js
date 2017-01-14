const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const api = require('./api/index');
const express = require('express');
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(config.db);
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({ type: 'application/json'}));

app.use('/public', express.static('public'));
app.use('/coverage', express.static('coverage/lcov-report/index'));
app.use('/api', api);

app.listen(3001);

module.exports = app;

