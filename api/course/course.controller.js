const config = require('../../config');
const db = require('sqlite-async');

module.exports = {

    // http://localhost:3000/api/courses
    getAll: () => {
        return db.open(config.SQL_DB)
            .then(db => db.all('SELECT * FROM ' + config.COURSE_CATALOG));
    },

    // http://localhost:3000/api/courses/id
    lookup: (id) => {
        return db.open(config.SQL_DB)
            .then(db => db.all('SELECT * FROM '+ config.COURSE_CATALOG + ' WHERE crse_id =' + id));
    },

};


