const mysql = require('mysql');
const config = require('config');

const dbConfig = config.get('App.dbConfig');
const dbName = dbConfig.dbName;
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "111111",
    port: "3306",
    database: dbName
});

connection.connect();

module.exports = connection;