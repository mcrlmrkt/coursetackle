var User = require('./models/user');
module.exports = function(app, passport){
	app.get('/', function(req, res){
		res.render('index.ejs', { message: req.flash('loginMessage')});
	});

	app.post('/', passport.authenticate('local-login', {
		successRedirect: '/profile',
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

	/*app.get('/:username/:password', function(req, res){
		var newUser = new User();
		newUser.local.username = req.params.username;
		newUser.local.password = req.params.password;
		console.log(newUser.local.username + " " + newUser.local.password);
		newUser.save(function(err){
			if(err)
				throw err;
		});
		//res.send("Success!");

	});*/

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