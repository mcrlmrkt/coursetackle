var User = require('./models/user');
module.exports = function(app, passport){
	app.get('/', function(req, res){
		res.render('index.ejs', { message: req.flash('loginMessage')});
	});

	app.post('/', passport.authenticate('local-login', {
		successRedirect: '/newsfeed',
		failureRedirect: '/',
		failureFlash: true
	}));

	app.get('/signup', function(req, res){
		res.render('signup.ejs', {message: req.flash('signupMessage')});
	});

	//when submit, going to post to our server
	app.post('/signup', passport.authenticate('local-signup', {
		succesRedirect: '/newsfeed',
		failureRedirect: '/signup',
		failureFlash: true
	}));
		
	app.get('/profile', isLoggedIn, function(req, res){
		res.render('profile.ejs', { user: req.user})
	});

	app.get('/newsfeed', function(req, res){
		res.render('newsfeed.ejs')
	});

	app.get('/course', isLoggedIn, function(req, res){
		res.render('course.ejs', { user: req.user})
	})

	app.get('/logout', function(req, res){
		req.logout();
		res.redirect('/');
	})
};

function isLoggedIn(req, res, next) {
	if(req.isAuthenticated()) {
		return next();
	}

	res.redirect('/');
}