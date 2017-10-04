const moment = require('moment');

module.exports = (time) => { return moment(time, moment.ISO_8601).fromNow(); };
