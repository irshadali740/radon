const express = require('express');
const logger1 = require('./../logger/logger')
const helper1 = require('./../util/helper')
const formattor1 = require('./../validator/formattor')
const router = express.Router();

router.get('/test-me', function (req, res) {
    logger1.Welcome()
    helper1.a()
    helper1.b()
    helper1.c()
    formattor1.first()
    formattor1.second()
    formattor1.third()
    res.send('My first ever api!')
});


module.exports = router;
// adding this comment for no reason