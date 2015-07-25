var express = require('express');
var router = express.Router();

/* GET course page. */
router.get('/', function(req, res, next) {
    res.render('course', { title: 'Course Page' });
});

module.exports = router;