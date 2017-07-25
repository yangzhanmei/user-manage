function deleteUser(req, res) {
    const connection = require('./connect');
    const deleteQuery = `delete from users where id = ${req.body.id}`;

    connection.query(deleteQuery, (err, result) => {
        if (err) {
            res.end("fail");
        }
        else {
            res.send("success");
        }
    })
}

module.exports = {deleteUser};