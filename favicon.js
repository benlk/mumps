var page = require('webpage').create();
page.viewportSize = {
	width: 124,
	height: 80
};
page.open('./screenshot.html', function() {

	page.clipRect = {
		top: 0,
		left: 0,
		width: 64,
		height: 64
	}
	page.render('favicon.png');
	phantom.exit();
});
