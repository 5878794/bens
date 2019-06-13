
//==========================================================
//select选择控件  可以单选、多选
//==========================================================



// html:
// 	<b-select style="..."></b-select>

// js:
// 	let data = [                      //@param:array(必填)      select的数据
// 		{key:"1",val:"男"},
// 		{key:"2",val:"女"},
// 		{key:'3',val:'不告诉你'}
// 	];
// 	let dom = $('b-select');
//
//	//可以写到dom上  除val和data
// 	dom.attr({
// 		val:'',
// 		radio:'true',
// 		viewport:'750',
// 		title:'请选择您的年龄',
// 		placeholder:'请选择你的年龄'
// 	}).data({
// 		data:data
// 	});

//polyfill 需要
require('@webcomponents/custom-elements');
require('@webcomponents/shadydom');


let $$ = require('../lib/event/$$'),
	selectFn = require('../lib/input/select');



class bSelect extends HTMLElement{

	//注册要监听的属性
	static get observedAttributes() {
		return [
			"val"
			// "title",
			// "placeholder"
		];
	}

	//元素属性改变回调
	attributeChangedCallback(name, oldValue, newValue) {
		if(name == 'val'){
			setTimeout(()=>{
				this.showVal();
			},0);
		}
	}

	//元素加入页面回调
	connectedCallback() {
		// console.log('connect');
		this.showVal();
	}

	//元素删除回调
	// disconnectedCallback(){
	// 	console.log('删除咯');
	// }

	constructor(){
		super();

		//创建shadow容器
		this.shadow = this.attachShadow({mode: 'open'});

		this.body = null;

		this.init();
	}


	init(){
		this.createBody();
		this.addEvent();



		this.shadow.appendChild(this.body.get(0));

	}

	createBody(){
		let div = $('<div></div>'),
			span = $('<span class="val"></span>'),
			span1 = $('<span class="placeholder"></span>');

		div.css({
			width:'100%',
			height:'40px',
			background:'#fff',
			border:'1px solid #ccc'
		});
		span.css({
			color:'#333'
		});
		span1.css({
			color:'#ccc'
		});

		div.append(span).append(span1);
		this.body = div;
	}

	addEvent(){
		let _this = this;

		$$(this.body).myclickok(function(){
			_this.showSelect();
		});
	}

	showSelect(){
		let dom = $(this),
			selected = dom.attr('val'),
			data = dom.data('data'),
			title = dom.attr('title') || '请选择',
			isRadio = (dom.attr('radio') === 'true'),
			viewPort = dom.attr('viewport') || 750;
		viewPort = parseInt(viewPort);

		//处理data 让key全部转换成字符串
		data.map(rs=>{
			rs.key = rs.key.toString();
		});

		//处理选中的数组 初始传入为 1,2,3 要转换成数组
		selected = selected.split(',');
		let newSelected = [];
		selected.map(rs=>{
			newSelected.push(rs.toString());
		});


		new selectFn({
			titleText:title,       //@param:str             标题  默认：请选择
			data:data,
			selected:newSelected,           //@param:array(必填)    选中的key
			radio:isRadio,                  //@param:boolean          单选还是多选   默认true
			viewPort:viewPort,                //@param:number 设置psd的大小，布局需要使用rem 默认：750
			success:function(rs){
				//返回选择的对象
				//json数组，  传入的格式

				let keys = [];
				rs.map(r=>{
					keys.push(r.key)
				});

				dom.attr({
					val:keys.join(',')
				})
			},
			error:function(){
				//取消选择
			}
		});
	}

	showVal(){
		let val = $(this).attr('val'),
			data = $(this).data('data'),
			placeholder = $(this).attr('placeholder'),
			text = [];

		//没有数据或选值时
		if(!data){return;}

		if(!val){
			$(this.shadow).find('.placeholder').text(placeholder);
			$(this.shadow).find('.val').text('');
			return;
		}

		val = ','+val+',';
		data.map(rs=>{
			let thisKey = rs.key;
			thisKey = ','+thisKey+',';

			if(val.indexOf(thisKey)>-1){
				text.push(rs.val);
			}
		});

		text = text.join('、');

		$(this.shadow).find('.val').text(text);
		$(this.shadow).find('.placeholder').text('');
	}


}


customElements.define('b-select', bSelect );

