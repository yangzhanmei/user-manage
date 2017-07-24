const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "111111",
    port: "3306",
    database: "users"
});

connection.connect();

module.exports = connection;