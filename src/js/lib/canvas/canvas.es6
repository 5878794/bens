let app = require("./app"),
	scene = require("./scene"),
	layer = require("./layer"),
	sprite = require("./spriteAnimate"),
	//阻止窗口滚动
	preventScroll = ()=> {
		window.addEventListener(device.MOVE_EV, (e) => {
			e.preventDefault();
		}, false);
	};



module.exports = {
	app,
	scene,
	layer,
	sprite,
	preventScroll
};


