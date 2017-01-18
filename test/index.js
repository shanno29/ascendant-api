
// Mongoose Tests
require('./util/mongoose.test');

// Unit Tests
require('./user/user.controller.test');
require('./chat/chat.controller.test');
require('./post/post.controller.test');
require('./friend/friend.controller.test');
require('./match/match.controller.test');
require('./track/track.controller.test');

// Express Server Test
require('./util/express.server.test');

// Integration Tests
require('./user/user.route.test');
require('./chat/chat.router.test');
require('./post/post.route.test');
require('./friend/friend.route.test');
require('./match/match.route.test');
require('./track/track.route.test');

// Purge Database
require('./util/purge.database.test');
