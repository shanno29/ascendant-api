
// Unit Tests
require('./user/user.controller.test');
require('./track/track.controller.test');
require('./match/match.controller.test');
require('./friend/friend.controller.test');
require('./chat/chat.controller.test');
// require('./post/post.controller.test');

// Integration Tests
require('./user/user.route.test');
require('./track/track.route.test');
require('./match/match.route.test');
require('./friend/friend.route.test');
require('./chat/chat.router.test');
// require('./post/post.route.test');

// Purge Database
require('./util/purge.database.test');
