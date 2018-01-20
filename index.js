const bodyParser = require('body-parser');
const config = require('./src/_core/config');
const express = require('express');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/json' }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, OPTIONS, HEAD');
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use('/documentation', express.static('./documentation'));
app.use('/coverage', express.static('./coverage'));
app.use('/api', require('./src/index'));

app.listen(config.port, () => console.log(`Listening on ${config.host}:${config.port}`));

module.exports = app;
