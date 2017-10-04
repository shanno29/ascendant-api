const controller = require('./org.controller');
const router = require('express').Router();
const status = require('../core/status');

router.get('/', (req, res) => {
    controller
        .getAll()
        .then(status.pass(res))
        .then(null, status.fail(res));
});

module.exports = router;