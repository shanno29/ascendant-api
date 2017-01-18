const controller = require('./track.controller');
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

router.get('/:key/friends', (req, res) => {
    controller
        .listFriends(req.params.key)
        .then(status.pass(res))
        .then(null, status.fail(res));
});

router.get('/:key/matches', (req, res) => {
    controller
        .listMatches(req.params.key)
        .then(status.pass(res))
        .then(null, status.fail(res));
});

router.get('/:key/nearby', (req, res) => {
    controller
        .listNearby(req.params.key)
        .then(status.pass(res))
        .then(null, status.fail(res));
});

router.get('/search/:query/:limit', (req, res) => {
    controller
        .search(req.param.query, req.param.limit)
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