const controller = require('./consulting.controller');
const router = require('express').Router();
const status = require('../_core/status');

// config.url/api/consulting/
router.get('/', (req, res) =>
  controller
    .getAllConsultingSections()
    .then(status.check(res))
    .catch(console.log));

// config.url/api/consulting/:id
router.get('/:id', (req, res) =>
  controller
    .consultingSectionBy(req.params.id)
    .then(status.check(res))
    .catch(console.log));

module.exports = router;
