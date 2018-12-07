// 树形菜单级联    多选
// 数据查看 ../code/temp_TreeCode.js

//eg:
//new treeDom({
// 	    dom:document.body,      //容器
// 		data:treeData,          //数据
//});



let $$ = require('../event/$$'),
	handleData = Symbol(),
	createDom = Symbol(),
	createItem = Symbol(),
	clearLastLayerArrow = Symbol(),
	addEvent = Symbol(),
	closeAllTree = Symbol();

let arrowImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABVUlEQVRYR+2Vv0rDUBTGvxMFR1NfwCniU7g4uTioiCAuVoSknXwRlyZBUBcRRNShj+BjNOIrJOLa5iu3mFJK2tykgTjcTBnOPd/v/E7+CBq+pOF8GABjwBgwBoyB/2nA7n1vWzK8pchWHf8KAlGyMbpBe/d3vl+ugVYwuBPIdR3hWQ8Cfuw5XU2ArwMw7YvIeh0QJIck9pPuzqcWgCqyg+hQyPdVISbhIseJ5/Tzhln6EE4ggA8B1qqYIDAicLQoXPUsfAs2/ejEEryUhVDhKXH203HelsEXAqjDfxCvogGs6gkwJU6LwrUMZPQtPzqH4KkIQoWDuIg7zrPO2rQMZI3sMLoU4n4RRNnwUgZmISziYX46FU7BVeI6jzqTZzWlDEzXEUauEMFsUCpolw2vZCAPggIvdp2wzOQrGZiuozfYU/d5XzhdmEor0G2uU2cAjIHGDYwBh8hvIXuOOLoAAAAASUVORK5CYII=';

class treeSelect{
	constructor(opt){
		this.dom = opt.dom || document.body;
		this.data = opt.data || [];

		this.listPaddingLeft = '25px';
		this.fontSize = '16px';

		this[handleData]();
		this[createDom]();
		this[clearLastLayerArrow]();
		this[closeAllTree]();
		this[addEvent]();
	}

	//数据处理排序
	//根据数据
	[handleData](){
		//以parent（父级id）属性排序
		this.data = this.data.sort(function(a,b){
			a.parent = (a.parent)? a.parent : '0';
			b.parent = (b.parent)? b.parent : '0';
			return a.parent.localeCompare(b.parent);
		})
	}


	//生成dom
	[createDom](){
		this.data.map(rs=>{
			if(rs.parent == '0'){
				this[createItem](rs,this.dom);
			}else{
				let parentId = 'id'+rs.parent,
					body = document.getElementById(parentId);
				this[createItem](rs,body);
			}
		});
	}

	//生成列表元素
	[createItem](data,body){
		body = $(body);
		let bodyText = (body.attr('text'))? body.attr('text') : '';
		bodyText = (bodyText)? bodyText+'$$$$'+data.name : data.name;


		let main = $('<div></div>'),
			div = $('<a code="'+data.code+'" text="'+data.name+'">'+data.name+'</a>'),
			img = $('<img src="'+arrowImage+'"/>'),
			children = $('<p text="'+bodyText+'" id="id'+data.code+'"></p>');

		div.css({
			display:'block',
			position:'relative',
			'padding-left':this.listPaddingLeft,
			'line-height':this.fontSize,
			'font-size':this.fontSize,
			'padding-bottom':'5px',
			'padding-top':'5px'
		});
		children.css({'padding-left':this.listPaddingLeft,margin:0});
		img.css({
			position:'absolute',
			left:0,
			top:'5px',
			width:this.fontSize,
			height:this.fontSize,
			transform:'rotate(-90deg)'
		}).addClass('hover_animate1');

		div.append(img);
		main.append(div).append(children);
		body.append(main);
	}

	//清除最后一层多箭头
	[clearLastLayerArrow](){
		let lastDom = this.getLastLayer();
		lastDom.map(dom=>{
			$(dom).find('a').css({'padding-left':'0'}).find('img').remove();
		})
	}

	//获取最后一层的dom
	getLastLayer(){
		let doms = [];
		$(this.dom).find('p').each(function(){
			if($(this).children().length == 0){
				doms.push($(this).parent());
			}
		});

		return doms;
	}

	//关闭所有菜单的折叠
	[closeAllTree](){
		$(this.dom).find('p').css({
			display:'none'
		}).attr({
			state:'close'
		})
	}

	//添加事件
	[addEvent](){
		$(this.dom).find('a').each(function(){
			let hasChildren = $(this).parent().find('p').children();
			if(hasChildren.length != 0){
				$$(this).myclickok(function(){
					let dom = $(this).parent().children('p'),
						isOpen = (dom.attr('state') == 'open');

					if(isOpen){
						//关闭
						dom.css({display:'none'}).attr({state:'close'});
						$(this).find('img').css({transform:'rotate(-90deg)'});
					}else{
						//打开
						dom.css({display:'block'}).attr({state:'open'});
						$(this).find('img').css({transform:'rotate(0)'});
					}
				});
			}
		})
	}

	//注销
	destroy(){
		let list = $(this.dom).find('a');
		$$(list).unbind(true);
		$(this.dom).html('');
	}
}



module.exports = treeSelect;