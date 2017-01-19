const controller = require('./user.controller');
const router = require('express').Router();
const status = require('../util/status');
const multer = require('multer');


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

router.put('/:key/login', (req, res) => {
    controller
        .login(req.params.key, req.body)
        .then(status.pass(res))
        .then(null, status.fail(res));
});

router.put('/:key', (req, res) => {
    controller
        .edit(req.params.key, req.body)
        .then(status.pass(res))
        .then(null, status.fail(res));
});

router.put('/:key/avatars', multer({dest: 'public/images/users/avatars'}).single('avatar'),  (req, res) => {
    controller
        .editAvatar(req.params.key, req.file)
        .then(status.pass(res))
        .then(null, status.fail(res));
});

router.put('/:key/banners', multer({dest: 'public/images/users/banners'}).single('banner'), (req, res) => {
    controller
        .editBanner(req.params.key, req.file)
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