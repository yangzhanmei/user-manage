function getUsers(res) {
    const connection = require('./connect');

    connection.query("select * from users", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
}

module.exports = {getUsers};