const mysql = require('mysql');
const connection = require('../server/dbs/connect');
const server = require('../server');
const request = require('supertest');
const should = require('chai').should();

describe('getUsers', () => {
    let modifyUser, id;
    const modifyResult = "success";

    beforeEach((done) => {
        const defaultUser = {
            user: 'yang',
            name: '杨战美',
            age: 21,
            sex: '女',
            tel: '15809244435',
            email: '15809244435@163.com',
            tip: '无'
        };

        modifyUser = {
            user: 'yang',
            name: '杨战美',
            age: 21,
            sex: '男',
            tel: '15809244435',
            email: '15809244435@163.com',
            tip: '学生'
        };
        connection.query(`delete from users`, (err, result) => {
            const insertQuery = `insert into users values(NULL,'${defaultUser.user}','${defaultUser.name}',${defaultUser.age},'${defaultUser.sex}','${defaultUser.tel}','${defaultUser.email}','${defaultUser.tip}')`;
            connection.query(insertQuery, function (err, result) {
                if (err) {
                    console.log(err);
                }
                id = result.insertId;
                done();
            });
        });
    });
    it('modify user success', function (done) {
        modifyUser.id = id;
        request(server)
            .post('/modifyUser')
            .send(modifyUser)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
                res.text.should.be.equal(modifyResult);
                done();
            });
    });
});