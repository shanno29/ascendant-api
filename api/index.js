const router = require('express').Router();

router.use('/courses', require('./course/course.route'));
router.use('/groups', require('./group/group.route'));
router.use('/orgs', require('./org/org.route'));

module.exports = router;