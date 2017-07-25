function addUser(req, res) {
    const connection = require('./connect');

    const select = `insert into users values(NULL,'${req.body.user}','${req.body.name}',
    ${req.body.age},'${req.body.sex}','${req.body.tel}','${req.body.email}','${req.body.tip}')`;

    connection.query(select, function (err, rows) {
        if (err) {
            res.end('新增失败：' + err);
        } else {
            res.send("success");
        }
    })
}

module.exports = {addUser};