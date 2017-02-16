const controller = require('./user.controller');
const router = require('express').Router();
const auth = require('express-jwt-token');
const status = require('../util/status');
const multer = require('multer');


router.post('/', (req, res) => {
    controller
        .make(req.body)
        .then(status.pass(res))
        .then(null, status.fail(res));
});

router.put('/login', (req, res) => {
    controller
        .login(req.body)
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

router.put('/:key/avatars', auth.jwtAuthProtected, multer({dest: 'public/images/users/avatars'}).single('avatar'),  (req, res) => {
    controller
        .editAvatar(req.params.key, req.file)
        .then(status.pass(res))
        .then(null, status.fail(res));
});

router.put('/:key/banners', auth.jwtAuthProtected, multer({dest: 'public/images/users/banners'}).single('banner'), (req, res) => {
    controller
        .editBanner(req.params.key, req.file)
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