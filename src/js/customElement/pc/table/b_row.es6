

//==========================================================
//b_row
//==========================================================







//polyfill 需要
require('@webcomponents/custom-elements');
require('@webcomponents/shadydom');

let addStyleFile = require('../../fn/addStyleFile');

let bodyDom = Symbol(),
	createDom = Symbol();


class bRow extends HTMLElement{
	//元素加入时
	connectedCallback() {
		//加载全局样式
		addStyleFile(this.shadow,'all_pc.css');

		//设置标签类型 b-row 的
		$(this).css({display:'block'});

		//添加子元素
		let slot = $('<slot></slot>');
		this[bodyDom].append(slot);

	}

	constructor(){
		super();
		//创建shadow容器
		this.shadow = this.attachShadow({mode: 'open'});
		this[createDom]();
		this.shadow.appendChild(this[bodyDom].get(0));


	}

	[createDom](){
		let dom = $('<div class="box_hlt"></div>');
		dom.css({
			width:'100%',height:'100%'
		});

		this[bodyDom] = dom;
	}
}


customElements.define('b-row', bRow);
