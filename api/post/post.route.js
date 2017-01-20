const controller = require('./post.controller');
const router = require('express').Router();
const auth = require('express-jwt-token');
const status = require('../util/status');

router.post('/', auth.jwtAuthProtected, (req, res) => {
    controller
        .make(req.body)
        .then(status.pass(res))
        .then(null, status.fail(res));
});

router.get('/:key', auth.jwtAuthProtected, (req, res) => {
    controller
        .lookup(req.params.key)
        .then(status.pass(res))
        .then(null, status.fail(res));
});

router.put('/:key', auth.jwtAuthProtected, (req, res) => {
    controller
        .edit(req.params.key, req.body)
        .then(status.pass(res))
        .then(null, status.fail(res));
});

router.get('/:key/user', auth.jwtAuthProtected, (req, res) => {
    controller
        .listUser(req.params.key)
        .then(status.pass(res))
        .then(null, status.fail(res));
});

router.get('/', auth.jwtAuthProtected, (req, res) => {
    controller
        .listAll()
        .then(status.pass(res))
        .then(null, status.fail(res));
});

router.delete('/:key', auth.jwtAuthProtected, (req, res) => {
    controller
        .remove(req.params.key)
        .then(status.pass(res))
        .then(null, status.fail(res));
});

module.exports = router;
