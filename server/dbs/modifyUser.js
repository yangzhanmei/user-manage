function modifyUser(req, res) {
    const connection = require('./connect');
    const modify = `update users set user = '${req.body.user}',name = '${req.body.name}',
    age = '${req.body.age}',sex = '${req.body.sex}',tel = '${req.body.tel}',
    email='${req.body.email}',tip = '${req.body.tip}'where id = ${req.body.id}`;

    connection.query(modify, function (err, rows) {
        if (err) {
            res.end("fail");
        } else {
            res.send("success");
        }
    })
}

module.exports = {modifyUser};