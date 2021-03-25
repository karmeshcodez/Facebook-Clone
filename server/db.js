const Pool = require("pg").Pool; //this is how we connect to the db from the server

const pool = new Pool({
    user: "karmesh",
    password: "password",
    host: "localhost",
    port: 5000,
    database: "facebookclone"
});

module.exports = pool;