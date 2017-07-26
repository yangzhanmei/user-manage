const connection = require('../server/dbs/connect');
const server = require('../server');
const request = require('supertest');
const should = require('chai').should();

describe('deleteUser', () => {
    const deleteResult = "success";
    let defaultUser, id;

    beforeEach((done) => {
        defaultUser = {
            user: 'yang',
            name: '杨战美',
            age: 21,
            sex: '女',
            tel: '15809244435',
            email: '15809244435@163.com',
            tip: '无'
        };
        connection.query(`delete from usersTest`, (err, result) => {
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
    it('delete user success', function (done) {
        defaultUser.id = id;
        request(server)
            .post('/deleteUser')
            .send({id: id})
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
                res.text.should.be.equal(deleteResult);
                done();
            });
    });
});