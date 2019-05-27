// Donate Link
function checkDonate() {
	if(window.location.hash == '#donate') {
		document.getElementById('donate-btn').click();
	}
}

// Sidebar Menu
let burger = document.querySelector('header .burger');
let sidebar = document.querySelector('.sidebar');
let sidebarActive = false;

burger.addEventListener('click', function (event) {
	if(sidebarActive) {
		this.classList.remove('active');
		sidebar.classList.remove('active');
		sidebarActive = false;
	} else {
		this.classList.add('active');
		sidebar.classList.add('active');
		sidebarActive = true;
	}
});

// Hide header on mobile scroll
let lastScrollY = 0;
let header = document.querySelector('header');

window.addEventListener('scroll', function(event) {
	if(this.scrollY > lastScrollY && this.scrollY > 96 && !sidebarActive) {
		header.classList.add('hide');
	} else {
		header.classList.remove('hide');
	}

	lastScrollY = this.scrollY;
});