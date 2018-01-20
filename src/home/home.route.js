const controller = require('./home.controller');
const router = require('express').Router();
const status = require('../_core/status');

router.all('/', (req, res) =>
  controller.all()
    .then(status.check(res))
    .catch(console.log));

router.get('/:id', (req, res) =>
  controller.get(req.params.id)
    .then(status.check(res))
    .catch(console.log));

module.exports = router;
