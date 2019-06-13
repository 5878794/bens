//==========================================================
//banner滚动
//==========================================================




//polyfill 需要
require('@webcomponents/custom-elements');
require('@webcomponents/shadydom');


let bannerFn = require('../lib/ui/bannerScroll'),
	bodyDom = Symbol('body'),
	winDom = Symbol('win'),
	objFn = Symbol('obj'),
	init = Symbol('init'),
	createBody = Symbol('createBody'),
	addItem = Symbol('addItem'),
	setParam = Symbol('setParam');


class bBanner extends HTMLElement{

	//注册要监听的属性
	static get observedAttributes() {
		return [
			"intervals",
			"animateTime",
			"showPoints",
			"leftBtnId",
			"rightBtnId"
		];
	}

	//元素属性改变回调
	attributeChangedCallback(name, oldValue, newValue) {
		this[setParam]();
	}

	//元素加入页面回调
	connectedCallback() {
		// console.log('connect');
		this[setParam]();
	}

	//元素删除回调
	// disconnectedCallback(){
	// 	console.log('删除咯');
	// }

	constructor(){
		super();

		//创建shadow容器
		this.shadow = this.attachShadow({mode: 'open'});

		this[bodyDom] = null;
		this[winDom] = null;
		this[objFn] = null;


		this.changeStartFn = null;
		this.changeEndFn = null;
		this.intervals = 2000;
		this.animateTime = 600;
		this.showPoints = true;
		this.leftBtnId = null;
		this.rightBtnId = null;


		this[init]();
	}


	[setParam](){
		let intervals = $(this).attr('intervals') || 2000,
			animateTime = $(this).attr('animateTime') || 600,
			showPoints = $(this).attr('showPoints') || false,
			leftBtnId = $(this).attr('leftBtnId') || null,
			rightBtnId = $(this).attr('rightBtnId') || null;

		intervals = parseInt(intervals);
		animateTime = parseInt(animateTime);
		showPoints = (showPoints === 'true');

		this.intervals = intervals;
		this.animateTime = animateTime;
		this.showPoints = showPoints;
		this.leftBtnId = leftBtnId;
		this.rightBtnId = rightBtnId;
	}


	[init](){
		this[createBody]();


		this[winDom].append(this[bodyDom]);
		this.shadow.appendChild(this[winDom].get(0));

	}


	[createBody](){
		let div = $('<div></div>'),
			div1 = $('<div></div>');

		div.css({
			width:'100%',
			height:'100%'
		});
		div1.css({
			width:'100%',
			height:'100%'
		});

		this[winDom] = div1;
		this[bodyDom] = div;
	}

	[addItem](data){
		// data=[{href:'',image:''}];

		data.map(rs=>{
			this[bodyDom].append('<a href="'+rs.href+'" style="background-image:url('+rs.image+');background-size:100% 100%;"></a>')
		});
	}

	run(data){
		if(this[objFn]){
			this[objFn].destroy();
		}

		this[addItem](data);


		let _this = this,
			win = this[winDom],
			body = this[bodyDom],
			intervals = this.intervals,
			animateTime = this.animateTime,
			showPoints = this.showPoints,
			leftBtn = (this.leftBtnId)? $('#'+this.leftBtnId) : null,
			rightBtn = (this.rightBtnId)? $('#'+this.rightBtnId) : null;

		this[objFn] = new bannerFn({
			win: win,                      //@param:jqobj    外层窗口
			body: body,        //@param:jqobj    滑动层
			time: intervals,                         //@param:number   滑动间隔时间
			animateTime: animateTime,             //@param:number   滑动动画时间
			showPoint:showPoints,                    //@param:number   是否显示下面的小点
			leftBtn:leftBtn,    //@param:jqobj    左滑动按钮
			rightBtn:rightBtn,      //@param:jqobj    右滑动按钮
			changeStartFn:function(page){
				if(_this.changeStartFn){
					_this.changeStartFn.call(this,page);
				}
			},     //@param:fn       滑动开始时执行函数，传递当前要滑动到的页面number
			changeEndFn:function(page){
				if(_this.changeEndFn){
					_this.changeEndFn.call(this,page);
				}
			}        //@param:fn       滑动结束时执行函数，传递当前要滑动到的页面number
		})
	}

	get changeStart(){
		return this.changeStartFn;
	}
	set changeStart(fn){
		this.changeStartFn = fn;
	}

	get changeEnd(){
		return this.changeEndFn;
	}

	set changeEnd(fn){
		this.changeEndFn = fn;
	}



}


customElements.define('b-banner', bBanner );