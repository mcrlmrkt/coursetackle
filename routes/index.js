var express = require('express');
var router = express.Router();
var app = express();
app.get('login.js', function(req, res){
	res.render('login');
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CourseTackle' });
});



module.exports = router;
