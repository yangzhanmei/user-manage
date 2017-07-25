const express = require('express');
const router = express.Router();
const dao = require('../dbs/deleteUser');

router.post('/deleteUser', (req, res) => {
    dao.deleteUser(req, res);
});

module.exports = router;