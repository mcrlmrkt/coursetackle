var express = require('express');
var router = express.Router();

/* GET course page. */
router.get('/', function(req, res, next) {
    res.render('profile', { title: 'Profile Page' });
});

module.exports = router;