var express = require('express');
var router = express.Router();

/* GET course page. */
router.get('/', function(req, res, next) {
    res.render('signup', { title: 'Signup Page' });
});

module.exports = router;