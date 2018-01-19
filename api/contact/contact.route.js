const controller = require('./contact.controller');
const router = require('express').Router();
const status = require('../_core/status');

// config.url/api/contact/
router.get('/', (req, res) =>
  controller
    .getAllContactSections()
    .then(status.check(res))
    .catch(console.log));

module.exports = router;
