const controller = require('./chat.controller');
const router = require('express').Router();
const status = require('../util/status');

router.post('/', (req, res) => {
    controller
        .make(req.body)
        .then(status.pass(res))
        .then(null, status.fail(res));
});

router.get('/:key', (req, res) => {
    controller
        .lookup(req.params.key)
        .then(status.pass(res))
        .then(null, status.fail(res));
});
router.get('/:key/user', (req, res) => {
    controller
        .listUser(req.params.key)
        .then(status.pass(res))
        .then(null, status.fail(res));
});
router.get('/', (req, res) => {
    controller
        .listAll()
        .then(status.pass(res))
        .then(null, status.fail(res));
});

router.delete('/:key', (req, res) => {
    controller
        .remove(req.params.key)
        .then(status.pass(res))
        .then(null, status.fail(res));
});

module.exports = router;