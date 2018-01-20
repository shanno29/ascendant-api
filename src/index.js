const router = require('express').Router();

router.use('/', require('./_core/hello'));
router.use('/about', require('./about/about.route'));
router.use('/home', require('./home/home.route'));
router.use('/contact', require('./contact/contact.route'));
router.use('/forms', require('./forms/forms.route'));
router.use('/consulting', require('./consulting/consulting.route'));
router.use('/footer', require('./footer/footer.route'));
router.use('/toolbar', require('./toolbar/toolbar.route'));

module.exports = router;
