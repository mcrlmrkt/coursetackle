var LocalStrategy = require('passport-local').Strategy;


var User            = require('../app/models/user');

module.exports = function(passport) {


	passport.serializeUser(function(user, done){
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done){
		User.findById(id, function(err, user){ //mongoose function
			done(err, user);
		});
	});

	//local-signup is localstrategy's name
	passport.use('local-signup', new LocalStrategy({
		usernameField: 'username',
		passwordField: 'password',
		firstNameField: 'firstName',
		lastNameField: 'lastName',
		emailField: 'email',
		passReqToCallback: true
	},
	function(req, username, password, 
		firstName, lastName, email, done){
		process.nextTick(function(){
			//look up in db where username matches the username
			User.findOne({'local.username': signup_username}, function(err, user){
				if(err)
					return done(err);
				if(user){ //don't want to reregister the user
					return done(null, false, req.flash('signupMessage', 'That username is already taken'));
				} else { //otherwise create a new user
					var newUser = new User();
					newUser.local.username = username;
					newUser.local.password = password;
					newUser.local.firstName = firstName;
					newUser.local.lastName = lastName;
					newUser.local.email = email;

					newUser.save(function(err){
						if(err)
							throw err;
						return done(null, newUser);
					})
				}
			})

		});
	}));

	passport.use('local-login', new LocalStrategy({
		usernameField: 'username',
		passwordField: 'password',
		passReqToCallback: true
	},
	function(req, username, password, done){
			process.nextTick(function(){
				User.findOne({ 'local.username': username}, function(err, user){
					if(err)
						return done(err);
					if(!user)
						return done(null, false, req.flash('loginMessage', 'Invalid username or password'));
					if(user.local.password != password){
						return done(null, false, req.flash('loginMessage', 'Invalid username or password'));
					}
					return done(null, user);

				});
			});
		}
	));

};