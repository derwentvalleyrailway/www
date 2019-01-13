// Responsive Menu
$burger = $("#main-nav .burger");
$menu = $("#main-nav .container > ul");
$burger.on('click', function(e) {
	if($burger.hasClass('active')) {
		// Close
		$burger.removeClass('active');
		$menu.slideUp(200);
	} else {
		// Open
		$burger.addClass('active');
		$menu.slideDown(200);
	}
});