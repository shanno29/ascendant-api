const controller = require('./about.controller');
const router = require('express').Router();
const status = require('../_core/status');

// config.baseUrl/api/about
router.get('/', (req, res) =>
  controller
    .getAllAboutSections()
    .then(status.check(res))
    .catch(console.log));

module.exports = router;
