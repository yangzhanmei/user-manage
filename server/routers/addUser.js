const express = require('express');
const router = express.Router();
const dao = require('../dbs/addUser');

router.post("/addUser", function (req, res) {
    dao.addUser(req, res);
});

module.exports = router;