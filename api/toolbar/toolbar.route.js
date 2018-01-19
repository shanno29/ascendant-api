const controller = require('./toolbar.controller');
const router = require('express').Router();
const status = require('../_core/status');

// config.baseUrl/api/toolbar/
router.get('/', (req, res) =>
  controller
    .getAllToolbarSections()
    .then(status.check(res))
    .catch(console.log));

module.exports = router;
