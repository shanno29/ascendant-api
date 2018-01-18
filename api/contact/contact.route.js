const controller = require('./contact.controller');
const router = require('express').Router();
const status = require('../_core/status');

// http://localhost:3000/api/contact/
router.get('/', (req, res) =>
  controller
    .getAllContactSections()
    .then(status.check(res))
    .catch(console.log));

module.exports = router;
