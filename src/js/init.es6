let animate = require("./lib/fn/jsAnimate");



$(document).ready(function(){
	let a = new animate({
		start:0,
		end:1,
		time:900,
		stepFn:function(val){
			let scale = 1-val;
			$("#aa").css3({
				transform:"scale("+scale+")"
			})
		}
	});
	a.play();
});
