function new_account(){
	var usr = document.getElementById("signup_username").value;
	var pw = document.getElementById("signup_password").value;
	var firstn = document.getElementById("signup_first").value;
	var lastn = document.getElementById("signup_last").value;
	var e = document.getElementById("signup_email").value;
	
	if (check_null('username', usr )){
		this.username = usr;
	}
	if (check_null('password', pw)){
		this.password = pw;
	}
	if (check_null('first name', firstn )){
		this.first_name = firstn;
	}
	if (check_null('last name', lastn )){
		this.last_name = lastn;
	}
	if (/^[0-9A-Za-z_-]+$/.test(e) && check_null('e-mail', e)){
		this.email = e;
	} else {
		alert("Not a valid mail.utoronto.ca email.")
	}
}

function check_null(val, str){
	if (str == ""){
		alert("Not a valid " + val + ".")
	} else {
		return true;
	}
}