const controller = require('./footer.controller');
const router = require('express').Router();
const status = require('../_core/status');

// http://localhost:3000/api/footer/
router.get('/', (req, res) =>
  controller
    .getAllFooterSections()
    .then(status.check(res))
    .catch(console.log));

module.exports = router;
