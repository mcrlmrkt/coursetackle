var express = require('express');
var router = express.Router();

/* GET course page. */
router.get('/', function(req, res, next) {
    res.render('newsfeed', { title: 'Newsfeed Page' });
});

module.exports = router;