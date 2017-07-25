const express = require('express');
const router = express.Router();
const dao = require('../dbs/modifyUser');

router.post("/modifyUser", function (req, res) {
    dao.modifyUser(req, res);
});

module.exports = router;