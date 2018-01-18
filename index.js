const bodyParser = require('body-parser');
const config = require('./config');
const express = require('express');
const logger = require('morgan');
const path = require('path');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/json' }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, OPTIONS, HEAD');
  next();
});

app.get('/', (req, res) => res.send('Hello From Ascendant'));

app.use('/coverage', express.static(path.join(`${__dirname}${config.coverage}`)));
app.use('/documentation', express.static(path.join(`${__dirname}${config.doc}`)));
app.use('/public', express.static(path.join(`${__dirname}${config.public}`)));
app.use('/api', require('./api/index'));

if (!module.parent) app.listen(config.port);

module.exports = app;
