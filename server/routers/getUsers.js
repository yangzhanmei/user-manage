const express = require('express');
const router = express.Router();
const dao = require('../dbs/getUsers');

router.get("/getUsers", function (req, res) {
    dao.getUsers(res);
});

module.exports = router;