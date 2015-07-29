var users = require('users');
var new_user = users();

new_user.username = document.getElementById("signup_username").value;
new_user.password = document.getElementById("signup_password").value;
new_user.fullName = document.getElementById("signup_first").value + 
	document.getElementById("signup_last").value;
new_user.email = document.getElementById("signup_email").value;
new_user.field = document.getElementById("signup_field").value;

console.log(new_user.username);