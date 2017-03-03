
//精灵动画class   详见animate参数

let spriteResAnimate = require("./spriteResAnimate"),
	tween = require("./../fn/tween"),
	animateList = Symbol(),
	nowAnimateStyle = Symbol(),
	setNowStyle = Symbol(),
	getNowAnimateStyle = Symbol(),
	setAnimateStyle = Symbol(),
	tweenFn = Symbol(),
	getTweenFn = Symbol(),
	addInfiniteAnimateList = Symbol();




class SpriteAnimate extends spriteResAnimate{
	constructor(opt = {}){
		super(opt);

		//动画队列
		this[animateList] = [];
		//当前动画的样式
		this[nowAnimateStyle] = null;
		//当前动画的方式函数
		this[tweenFn] = null;

	}

	//动画赋值接口
	animate(opt = {}){
			//动画时间,毫秒
		let time = opt.time || 1000,
			//延迟执行时间,毫秒
			delay = opt.delay || 0,
			//是否循环
			infinite = $.isBoolean(opt.infinite)? opt.infinite : false,
			//是否反向运行,需要循环才会执行
			flip = $.isBoolean(opt.flip)? opt.flip : false,
			//运行完后水平翻转,需要循环才会执行
			endFlipHorizontal = $.isBoolean(opt.endFlipHorizontal)? opt.endFlipHorizontal : false,
			//运行完后垂直翻转,需要循环才会执行
			endFlipVertical = $.isBoolean(opt.endFlipVertical)? opt.endFlipVertical : false,
			//回调函数
			callback = opt.callback || function(){},
			//需要变动的样式
			style = opt.style || {},
			//动画方式(详见tween类)
			animateStyle = opt.animateStyle || "Linear",
			//动画类
			animateClass = opt.animateClass || "";


		setTimeout(()=>{
				//根据参数选择动画函数
			let _tween = this[getTweenFn](animateStyle,animateClass);

			//加入队列
			this[animateList].push({
				time:time,
				animateTweenFn:_tween,
				callback:callback,
				style:style,
				infinite:infinite,
				flip:flip,
				endFlipHorizontal:endFlipHorizontal,
				endFlipVertical:endFlipVertical
			})
		},delay);
	}

	//获取动画补间函数
	[getTweenFn](animateStyle,animateClass){
		let _tween;
		if(animateStyle == "Linear"){
			_tween = tween[animateStyle];
		}else{
			if(tween[animateStyle]){
				if(tween[animateStyle][animateClass]){
					_tween = tween[animateStyle][animateClass];
				}else{
					_tween = tween[animateStyle].easeIn;
				}
			}else{
				_tween = tween[animateStyle];
			}
		}

		return _tween;
	}

	//获取当前的动画样式对象
	[getNowAnimateStyle](){
		//有当前的动画对象 直接返回
		if(this[nowAnimateStyle]){
			return this[nowAnimateStyle];
		}

		//队列没有直接返回空
		if(this[animateList].length == 0){
			return null;
		}

		//没有从队列中获取一个新的出来
		let _obj = this[animateList].shift(),
			_style = _obj.style,
			_s_style = {};

		//设置动画中要变换的属性的当前值,新建对象保存
		for(var key in _style){
			if(_style.hasOwnProperty(key)){
				_s_style[key] = this[key] || 0;
			}
		}
		_obj._style = _s_style;

		//计算动画的开始时间和结束时间
		_obj.startTime = new Date().getTime();
		_obj.endTime = _obj.startTime + _obj.time;

		//设置当前动画对象并返回
		this[nowAnimateStyle] = _obj;
		return this[nowAnimateStyle];
	}

	//计算并设置当前样式
	[setAnimateStyle](){
		//获取参数
		let _nowTime = new Date().getTime(),
			{   startTime,
				endTime,
				time,
				style,
				_style,
				animateTweenFn,
				callback,
				infinite
			} = this[nowAnimateStyle];

		//是否动画已完成
		let isFinish = (_nowTime>=endTime);
		_nowTime = (isFinish)? endTime : _nowTime;

		//设置当前时间的值
		let _pre = (_nowTime - startTime)/time;
		for(var key in style){
			if(style.hasOwnProperty(key)){
				let _start = _style[key],
					_needMove = style[key] - _style[key];

				this[key] = animateTweenFn(_pre,_start,_needMove,1);
			}
		}

		//动画未完成
		if(!isFinish){
			return;
		}

		//如果不是循环动画,执行回调结束
		if(!infinite){
			callback();
			this[nowAnimateStyle] = null;
			return;
		}


		//是循环动画,组装新参数传入动画队列最前面
		this[addInfiniteAnimateList]();
		this[nowAnimateStyle] = null;

	}

	//无限动画根据参数计算后加入队列
	[addInfiniteAnimateList]() {
		let {
				time,
				animateTweenFn,
				callback,
				style,
				_style,
				infinite,
				flip,
				endFlipHorizontal,
				endFlipVertical
			} = this[nowAnimateStyle];


		//反转元素
		if (endFlipHorizontal) {
			this.flipHorizontal = !this.flipHorizontal;
		}
		if (endFlipVertical) {
			this.flipVertical = !this.flipVertical;
		}


		//计算新的动画,加入队列前方
		let newObj = {
			time: time,
			animateTweenFn: animateTweenFn,
			callback: callback,
			style: (flip) ? _style : style,
			infinite: infinite,
			flip: flip,
			endFlipHorizontal: endFlipHorizontal,
			endFlipVertical: endFlipVertical
		};

		this[animateList].unshift(newObj);
	}

	//获取当前的动画样式值
	[setNowStyle](){
		let _nowStyle = this[getNowAnimateStyle]();
		if(!_nowStyle){return;}

		this[setAnimateStyle]();

	}

	render(){
		this[setNowStyle]();

		super.render();
	}
}




module.exports = SpriteAnimate;