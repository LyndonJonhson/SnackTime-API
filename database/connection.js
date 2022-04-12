const database = require('knex')({
    client: 'mysql2',
    connection: {
        host: 'us-cdbr-east-05.cleardb.net',
        user: 'bef1363787ccc7',
        password: '6c514baf',
        database: 'heroku_8abdd38c7d33819'
    }
});

module.exports = database;