var page = require('webpage').create();
page.viewportSize = {
	width: 560,
	height: 292
};
page.open('./screenshot.html', function() {

	page.clipRect = {
		top: 0,
		left: 0,
		width: 560,
		height: 292
	}
	page.render('og-img.png');
	phantom.exit();
});
