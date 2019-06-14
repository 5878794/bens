

//==========================================================
//switch开关按钮
//==========================================================

//TODO
//背景渐变动画
//参数设置


let $$ = require('../lib/event/$$');

let bodyDom = Symbol('bodyDom'),
	init = Symbol('init'),
	refresh = Symbol('refresh'),
	circleDom = Symbol('circleDom'),
	changeDom = Symbol('changeDom'),
	onDom = Symbol('onDom'),
	offDom = Symbol('offDom'),
	moveLength = Symbol('moveLength'),
	createBody = Symbol('createBody'),
	addEvent = Symbol('addEvent');




//polyfill 需要
require('@webcomponents/custom-elements');
require('@webcomponents/shadydom');


class bSwitch extends HTMLElement{

	//注册要监听的属性
	static get observedAttributes() {
		return [
			"val"
		];
	}

	//元素属性改变回调
	attributeChangedCallback(name, oldValue, newValue) {
		if(this[bodyDom]){
			this[refresh]();
		}
	}

	//元素加入页面回调
	connectedCallback() {
		this.width = parseInt($(this).width());
		this.height = parseInt($(this).height());
		this[init]();

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
		this[circleDom] = null;
		this[onDom] = null;
		this[offDom] = null;

		this[moveLength] = 0;
		this.height = 0;
		this.width = 0;

		this.param = {
			circleColor:'#fff',
			checkBgColor:'#51ccee',
			notCheckBgColor:'#ccc',
			borderColor:'#ccc',
			textShadowColor:'#ddd',
			textColor:'#fff',
			onText:'ON',
			offText:'OFF'
		};

	}

	[init](){
		this[createBody]();
		this[addEvent]();
		this[refresh]();
	}

	//connectedCallback 中触发
	//加入到dom到时候会触发改函数
	[createBody](){
		let div = $('<div></div>'),
			span = $('<span></span>'),
			on = $('<span>'+this.param.onText+'</span>'),
			off = $('<span>'+this.param.offText+'</span>');

		let border = this.height/15,
			width =  this.width - border*2,
			height = this.height - border*2,
			radio = this.height/2,
			move = width - height;

		this[moveLength] = move;

		div.css({
			position:'relative',
			top:border+'px',
			left:border+'px',
			width: width+'px',
			height:height+'px',
			background:this.param.notCheckBgColor,
			'box-shadow':this.param.borderColor+' 0px 0px 0px '+border+'px',
			'border-radius':radio+'px',
			overflow:'hidden'
		});

		span.css({
			position:'absolute',
			top: 0,
			left: 0,
			width:height+'px',
			height:height+'px',
			'z-index':10,
			'border-radius':radio+'px',
			'background-color':this.param.circleColor,
			'transition': 'all 0.3s'
		});

		let btnCss = {
			'line-height':height+'px',
			'font-size': radio+'px',
			'text-shadow': '0 0 '+radio/15+'px '+this.param.textShadowColor,
			color: this.param.textColor,
			display:'inline-block',
			position:'absolute',
			top:'0',
			height:height+'px'
		};

		on.css(btnCss).css({left:'0.5em',display:'none'});
		off.css(btnCss).css({right:'0.5em'});


		div.append(span).append(on).append(off);

		this[circleDom] = span;
		this[bodyDom] = div;
		this[onDom] = on;
		this[offDom] = off;

		this.shadow.appendChild(div.get(0));
	}

	[addEvent](){
		let _this = this;

		$$(this[bodyDom]).myclickok(function(){
			_this[changeDom]();
		});
	}

	[changeDom](){
		let state = ($(this).attr('val') === 'true');
		$(this).attr({val:!state});
	}

	[refresh](){
		let state = ($(this).attr('val') === 'true');

		if(state){
			this[bodyDom].css({background:this.param.checkBgColor});
			this[onDom].css({display:'inline-block'});
			this[offDom].css({display:'none'});
			this[circleDom].css({transform:'translateX('+this[moveLength]+'px)'});
		}else{
			this[bodyDom].css({background:this.param.notCheckBgColor});
			this[onDom].css({display:'none'});
			this[offDom].css({display:'inline-block'});
			this[circleDom].css({transform:'translateX(0px)'});
		}
	}



	get val(){
		return $(this).attr('val');
	}
	set val(val){
		val = (val)? true : false;
		$(this).attr({val:val});
	}
}


customElements.define('b-switch', bSwitch );

