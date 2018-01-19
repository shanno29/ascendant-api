const controller = require('./home.controller');
const router = require('express').Router();
const status = require('../_core/status');

// config.baseUrl/api/home/
router.get('/', (req, res) =>
  controller
    .getAllHomeSections()
    .then(status.check(res))
    .catch(console.log));

module.exports = router;
