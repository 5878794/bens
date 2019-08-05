
let device = require('./lib/device'),
	write = require('./lib/ui/writeWord');




$(window).ready(function(){
	console.log('ready')
	page.init();
});


var page = {
	init(){
		window.aa = new write({
			domId:'test',
			lineWidth:4
		})

	}

};

