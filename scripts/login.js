function loginClicked() {
 var email = document.getElementById('login_email').value;
 localStorage['username'] = email;
}

function logoutClicked() {
	localStorage.removeItem('username');
	window.location.reload();
}

function populateUsername() {
	var value = localStorage['username'];
	if (value == null) {
		value = "";
	} else {
		value = "Hi, " + value;
	}
	document.getElementById('username').innerHTML = value;
}