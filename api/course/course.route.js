const controller = require('./course.controller');
const router = require('express').Router();
const status = require('../core/status');

router.get('/', (req, res) => {
    controller
        .getAll()
        .then(status.pass(res))
        .then(null, status.fail(res));
});

router.get('/:key', (req, res) => {
    controller
        .lookup(req.params.key)
        .then(status.pass(res))
        .then(null, status.fail(res));
});

module.exports = router;