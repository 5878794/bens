



//polyfill 需要
require('@webcomponents/custom-elements');
require('@webcomponents/shadydom');




class testSlot extends HTMLElement{

	//注册要监听的属性
	static get observedAttributes() {
		//监听的属性需要全部小写

	}

	//元素属性改变回调
	attributeChangedCallback(name, oldValue, newValue) {
	}

	//元素加入页面回调
	connectedCallback() {
		// console.log('connect');
	}

	//元素删除回调
	// disconnectedCallback(){
	// 	console.log('删除咯');
	// }

	constructor(){
		super();
		//创建shadow容器
		this.shadow = this.attachShadow({mode: 'open'});


		let div = $('<div></div>'),
			div1 = $('<div1>111</div1>'),
			div2 = $('<div1>333</div1>'),
			slot1 = $('<slot name="a">111</slot>'),
			slot = $('<slot name="b">111</slot>');

		div.css({
			width:'100%',
			height:'100%'
		});
		div1.css({
			width:'100%',
			height:'100%'
		});
		div2.css({
			width:'100%',
			height:'100%'
		});
		slot.css({
			width:'100%',
			height:'100%'
		});
		slot1.css({
			width:'100%',
			height:'100%'
		});

		div.append(div1);
		div.append(slot);
		div.append(div2);
		div.append(slot1);
		this.shadow.appendChild(div.get(0));

	}


}


customElements.define('test-slot', testSlot );