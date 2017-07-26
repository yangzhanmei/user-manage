function creatDatabase() {
    const connection = require('./connect');
    const config = require('config');

    const dbConfig = config.get('App.dbConfig');
    const dbName = dbConfig.dbName;

    connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName}`, (err, result) => {
        if (err) {
            console.log(err);
            return err;
        }
        else {
            return result;
        }
    });

    connection.query(`create table if not exists users(
    id int(11) auto_increment primary key,
    user varchar(20) CHARACTER SET utf8,
    name varchar(20) CHARACTER SET utf8,
    age int(11),
    sex char(10) CHARACTER SET utf8,
    tel varchar(30),
    email varchar(30),
    tip varchar(30) CHARACTER SET utf8)`);
}

module.exports = creatDatabase;