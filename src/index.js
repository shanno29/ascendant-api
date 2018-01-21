const router = require('express').Router();

router.use('/', require('./_core/hello'));
router.use('/root', require('./root'));
router.use('/home', require('./home'));
router.use('/about', require('./about'));
router.use('/forms', require('./forms'));
router.use('/contact', require('./contact'));
router.use('/consulting', require('./consulting'));

module.exports = router;
