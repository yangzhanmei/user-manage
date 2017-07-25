const express = require('express');
const router = express.Router();
const dao = require('../dbs/findUser');

router.post("/findUser", function (req, res) {
    dao.findUser(req, res);
});

module.exports = router;