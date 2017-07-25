function creatDatabase() {
    const connection = require('./connect');

    connection.query(`CREATE DATABASE IF NOT EXISTS users`, (err, result) => {
        if (err) {
            console.log(err);
            return err;
        }
        else {
            console.log('create database sucess');
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