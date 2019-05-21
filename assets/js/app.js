let $ = require('./jquery');

// Donate Link
$(document).ready(function() {
	if(window.location.hash == '#donate') {
		document.getElementById('donate-btn').click();
	}
});