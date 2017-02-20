//动画函数
window.requestAnimationFrame =
	window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	window.oRequestAnimationFrame ||
	window.msRequestAnimationFrame ||
	function(callback) {  setTimeout(callback, 100/6)};



window.cancelRequestAnimationFrame =
	window.cancelAnimationFrame ||
	window.cancelRequestAnimationFrame ||
	window.webkitCancelAnimationFrame ||
	window.webkitCancelRequestAnimationFrame ||
	window.mozCancelRequestAnimationFrame ||
	window.oCancelRequestAnimationFrame ||
	window.msCancelRequestAnimationFrame ||
	clearTimeout;





let play = null,
	isPaused = false;

let app = {
	runFn:null,
	//运行
	run(){
		var fn = () => {
			if(this.runFn && !isPaused){
				this.runFn();
			}

			play = requestAnimationFrame(fn);

		};

		fn();
	},
	//暂停
	pause(){
		isPaused = true;
	},
	//恢复
	resume(){
		isPaused = false;
	},
	//停止
	stop(){
		cancelRequestAnimationFrame(play);
		this.runFn = null;
	},
	//阻止dom的touchmove事件  以免屏幕滑动
	preventTouchMove(dom){
		dom = dom || window;
		dom.addEventListener("touchmove", (e) => {
			e.preventDefault();
		}, false);
	}
};



if(window.addEventListener){
	window.addEventListener("focus",function(){
		app.resume();
	});
	window.addEventListener("blur",function(){
		app.pause();
	});
}




module.exports = app;