
//创建游戏app

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
		//app容器
		this[body] = opt.body || $("body");
		//app是否运行中
		this[isRunning] = false;
		//app包含的场景
		this[scenes] = [];
		//动画函数运行器
		this[runner] = null;

		this[setBody]();
	}

	//设置容器样式
	[setBody](){
		if(!device.checkDomHasPosition(this[body])){
			this[body].css({
				position:"relative"
			})
		}
	}

	//添加场景
	append(scene){
		scene.parent = this[body];
		this[scenes].push(scene);
	}

	//渲染所有场景
	[eachRun](){
		this[scenes].map((scene)=>{

			scene.render();
		})
	}

	//开始运行
	run(){

		let fn = ()=> {
			if(isShow && this[isRunning]){
				this[eachRun]();
			}

			this[runner] = requestAnimationFrame(fn);
		};

		this[isRunning] = true;
		fn();
	}

	//暂停
	pause(){
		this[isRunning] = false;
	}

	//恢复
	resume(){
		this[isRunning] = true;
	}

	//销毁
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