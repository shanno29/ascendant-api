const router = require('express').Router();

router.use('/users', require('./user/user.route'));
router.use('/posts', require('./post/post.route'));
router.use('/chats', require('./chat/chat.route'));
router.use('/tracks', require('./track/track.route'));
router.use('/matches', require('./match/match.route'));
router.use('/friends', require('./friend/friend.route'));

module.exports = router;

