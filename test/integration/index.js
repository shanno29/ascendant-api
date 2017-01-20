// Global Variables
global.userOneJwt = '';
global.userTwoJwt = '';
global.userThreeJwt = '';

// Express Server Test
require('./../util/express.server.test');

// Integration Tests
require('./../integration/user.route.test.js');
require('./../integration/chat.router.test.js');
require('./../integration/post.route.test.js');
require('./../integration/friend.route.test.js');
require('./../integration/match.route.test.js');
require('./../integration/track.route.test.js');

// Purge Database
require('./../util/purge.database.test');
