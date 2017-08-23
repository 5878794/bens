
//下拉加载

let app = require("../device"),
	animate = require("../fn/jsAnimate"),
	points = Symbol("points"),
	hasTouched = Symbol("hasTouched"),
	y = Symbol("y"),
	animateFn = Symbol("animateFn"),
	maxPushHeight = Symbol("maxPushHeight"),
	maxScrollHeight = Symbol("maxScrollHeight"),
	init = Symbol("init"),
	createShowDom = Symbol("createShowDom"),
	refreshParam = Symbol("setParam"),
	setLoadingDomStyle = Symbol("setLoadingDomStyle"),
	addEvent = Symbol("addEvent"),
	touchStartFn = Symbol("touchStartFn"),
	touchMoveFn = Symbol("touchMoveFn"),
	touchEndFn = Symbol("touchEndFn"),
	androidTouchStart = Symbol("androidTouchStart"),
	androidTouchMove = Symbol("androidTouchMove"),
	androidTouchEnd = Symbol("androidTouchEnd"),
	iosTouchStart = Symbol("iosTouchStart"),
	iosTouchMove = Symbol("iosTouchMove"),
	iosTouchEnd = Symbol("iosTouchEnd"),
	savePoint = Symbol("savePoint"),
	clearPoint = Symbol("clearPoint"),
	{abs} = Math;

var viewport,body;


class pushLoading{
	constructor(opt={}){
		viewport = opt.viewport || 320;
		body = $("body");
		this.loadingDom = opt.loadingDom || pushLoading[createShowDom]();
		this.canLoadingFn = opt.canLoadingFn || function(){};
		this.notCanLoadingFn = opt.notCanLoadingFn || function(){};
		this.loadingFn = opt.loadingFn || function(){};
		this.bottomFixedDivHeihgt = 0;


		//按下的点的集合
		this[points] = [];
		//是否已经按下
		this[hasTouched] = false;
		//下拉滚动条到0的时候的偏移量
		this[y] = 0;
		//动画函数对象
		this[animateFn] = null;
		//最大下拉高度
		this[maxPushHeight] = 0;
		//滚动条能滚动的最大高度
		this[maxScrollHeight] = 0;

		body.css({position:"relative"});

		this[init]();
	}

	//创建上拉加载要显示的dom
	static [createShowDom](){
		let dom = $("<div><span>上拉加载</span></div>"),
			height = app.rem2Px(viewport,1.5);


		dom.css({
			width:"100%",height:height+"px",
			"text-align":"center",
			"font-size":"0.24rem",
			"line-height":height+"px"
		});

		return dom;
	}

	[init](){
		this[refreshParam]();
		this[setLoadingDomStyle]();
		this[addEvent]();
	}

	//刷新参数
	refresh(){
		this[refreshParam]();
	}

	//加载完成隐藏dom
	end(){
		this.notCanLoadingFn();
		body.css3({transform:""});
		this[y] = 0;
	}

	//设置参数
	[refreshParam](){
		this[maxPushHeight] = parseInt(this.loadingDom.height());

		//计算最大大滚动距离
		let bodyHeight = body.height(),
			screenHeight = window.innerHeight;
		this[maxScrollHeight] = (bodyHeight > screenHeight)? bodyHeight-screenHeight : 0;
	}

	//设置刷新dom的定位
	[setLoadingDomStyle](){
		let height = parseInt(this.loadingDom.height());

		//微信背景色  rgb(48,49,51)
		this.loadingDom.css({
			position:"fixed",
			left:0,
			bottom:-height+"px",
			"z-index":-1,
			background:"#fff"
		});

		//ios超出弹性部分的遮挡层
		// let wxZZ = $("<div></div>");
		// wxZZ.css({
		// 	position:"absolute",
		// 	left:0,top:height+"px",width:"100%",height:"1000px",
		// 	background:"#fff"
		// });
		// this.loadingDom.append(wxZZ);

		body.append(this.loadingDom);
	}

	//添加事件
	[addEvent](){
		let _this = this;
		document.addEventListener(app.START_EV,this[touchStartFn] = function(e){
			if(app.isAndroid){
				_this[androidTouchStart](e);
			}else{
				_this[iosTouchStart](e);
			}

		},false);
		document.addEventListener(app.MOVE_EV,this[touchMoveFn] = function(e){
			if(app.isAndroid){
				_this[androidTouchMove](e);
			}else{
				_this[iosTouchMove](e);
			}

		},false);
		document.addEventListener(app.END_EV,this[touchEndFn] = function(e){
			if(app.isAndroid){
				_this[androidTouchEnd]();
			}else{
				_this[iosTouchEnd]();
			}

		},false);
	}

	[iosTouchStart](){
		if(this[animateFn]){
			this[animateFn].stop();
		}
	}
	[iosTouchMove](){
		console.log($(window).scrollTop(),this[maxScrollHeight]);
		// let l = this[maxScrollHeight] - $(window).scrollTop();
		//
		// if(l<0){
		// 	body.css3({
		// 		transform:"translate3d(0,"+ l/10+"px,0)"
		// 	});
		// 	this[y] = l/10;
		// }
		//
		// if(abs(l+l/10) >= this[maxPushHeight]){
		// 	this.canLoadingFn.call(this.loadingDom);
		// }else{
		// 	this.notCanLoadingFn.call(this.loadingDom);
		// }
	}
	[iosTouchEnd](){
		// let l = this[y],
		// 	_this = this,
		// 	endY = 0;
		//
		// //执行刷新
		// if(abs(l+l*10)>this[maxPushHeight]){
		// 	setTimeout(function(){
		// 		_this.loadingFn();
		// 	},500);
		//
		// 	endY = this[maxPushHeight];
		// }
		//
		// if(l<0){
		// 	this[animateFn] = new animate({
		// 		start:l,                  //@param:number   初始位置
		// 		end:endY,                    //@param:number   结束位置
		// 		time:500,                 //@param:number   动画执行时间  ms
		// 		type:"Cubic",             //@param:str      tween动画类别,默认：Linear 详见函数内tween函数
		// 		class:"easeIn",           //@param:str      tween动画方式,默认：easeIn 详见函数内tween函数
		// 		stepFn:function(val){     //@param:fn       每步执行函数,返回当前属性值
		// 			body.css3({
		// 				transform:"translate3d(0,"+val+"px,0)"
		// 			});
		// 			_this[y] = val;
		// 		},
		// 		endFn:function(){         //@param:fn       动画结束执行
		// 			body.css3({
		// 				transform:""
		// 			});
		// 			_this[y] = endY;
		// 		},
		// 		alternate:false,          //@param:boolean  动画结束时是否反向运行，默认：false
		// 		infinite:false            //@param:boolean  动画是否循环执行，默认：false
		// 	});
		// 	this[animateFn].play();
		// }
	}

	[androidTouchStart](){

	}
	[androidTouchMove](){

	}
	[androidTouchEnd](){

	}


	//记录点的位置等
	[savePoint](e){
		var point = (e.touches)? e.touches[0] : e;

		var y = point.clientY;
		this[points].push(y);
	}

	//清除记录的点集合
	[clearPoint](){
		this[points] = [];
	}
}


module.exports = pushLoading;