const express = require('express');
const app = express();
const getUsers = require('./server/routers/getUsers');
const bodyParser = require('body-parser');
const createDatabase = require('./server/dbs/creatDatabase');
const addUser = require('./server/routers/addUser');
const modifyUser = require('./server/routers/modifyUser');
const deleteUser = require('./server/routers/deleteUser');

createDatabase();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '100mb', extended: true}));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.use('/', getUsers);
app.use('/', addUser);
app.use('/', modifyUser);
app.use('/', deleteUser);

app.listen(3000, () => {
    console.log('Server started.');
});