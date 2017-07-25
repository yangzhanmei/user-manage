const mysql = require('mysql');
const server = require('../server');
const request = require('supertest');
const should = require('chai').should();

describe('addUser', () => {
    const addResult = "success";
    const userToAdd = {
        user: 'yang',
        name: '杨战美',
        age: 21,
        sex: '女',
        tel: '15809244435',
        email: '15809244435@163.com',
        tip: '无'
    };

    it('add user success', function (done) {
        request(server)
            .post('/addUser')
            .send(userToAdd)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
                res.text.should.be.equal(addResult);
                done();
            });
    });
});