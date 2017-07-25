function findUser(req, res) {
    const connection = require('./connect');
    const find = `select * from users where user = '${req.body.user}'`;

    connection.query(find, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
}

module.exports = {findUser};