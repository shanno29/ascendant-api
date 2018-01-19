const controller = require('./forms.controller');
const router = require('express').Router();
const status = require('../_core/status');

// config.baseUrl/api/forms/
router.get('/', (req, res) =>
  controller
    .getAllFormsSections()
    .then(status.check(res))
    .catch(console.log));

module.exports = router;
