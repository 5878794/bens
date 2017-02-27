let device = require("./../device"),
	eachRun = Symbol(""),
	body = Symbol(""),
	isRunning = Symbol(""),
	scenes = Symbol(""),
	runner = Symbol(""),
	setBody = Symbol(""),
	isShow = true;


class app{
	constructor(opt = {}){
		this[body] = opt.body || $("body");

		this[isRunning] = true;
		this[scenes] = [];
		this[runner] = null;

		this[setBody]();
	}

	[setBody](){
		if(!device.checkDomHasPosition(this[body])){
			this[body].css({
				position:"relative"
			})
		}
	}

	append(scene){
		scene.parent = this[body];
		this[scenes].push(scene);
	}

	[eachRun](){
		this[scenes].map((scene)=>{

			scene.render();
		})
	}

	run(){

		let fn = ()=> {
			if(isShow && this[isRunning]){
				this[eachRun]();
			}

			this[runner] = requestAnimationFrame(fn);
		};

		fn();
	}

	pause(){
		this[isRunning] = false;

	}
	resume(){
		this[isRunning] = true;
	}

	destroy(){
		cancelAnimationFrame(this[runner]);
	}

}



(function(){
	//监听浏览器窗口是否显示或在顶层
	window.addEventListener("focus",()=>{
		isShow = true;
	});
	window.addEventListener("blur",()=>{
		isShow = false;
	});
})();



module.exports = app;