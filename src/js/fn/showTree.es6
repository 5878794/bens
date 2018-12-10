//显示树形菜单。。。。

// type 说明见下面



let $$ = require('../lib/event/$$'),
	showTree1 = require('./treeSelect1'),
	showTree2 = require('./treeSelect2'),
	showTree3 = require('./treeSelect3'),
	showTree4 = require('./treeSelect4'),
	stopBodyScroll = require('../lib/event/divScrollBodyNotScroll');


let createDom = function(){
	let zz = $('<div></div>'),
		body = $('<div></div>'),
		main = $('<div></div>'),
		btn = $('<div>选择</div>');

	zz.css({
		position:'fixed',
		left:0,right:0,top:0,bottom:0,
		background:'rgba(0,0,0,0.5)',
		'z-index':'1000'
	}).addClass('box_scc');
	body.css({
		width:'95%',
		height:'95%',
		background:'#fff',
		'padding':'0.2rem',
		'box-sizing':'border-box'
	}).addClass('box_slc');
	main.addClass('boxflex1').css({
		'overflow-x':'hidden',
		'overflow-y':'scroll',
		width:'100%',
		'-webkit-overflow-scrolling': 'touch'
	});
	btn.css({
		width:'100%',
		height:'0.8rem',
		'line-height':'0.8rem',
		'font-size':'0.32rem',
		'text-align':'center',
		color:'#fff',
		background:'#5290f1',
		'margin-top':'0.2rem'
	});

	body.append(main).append(btn);
	zz.append(body);

	return {btn,zz,main}
};




module.exports = function(opt,type){
	return new Promise((success)=>{
		//创建dom
		let {btn,zz,main} = createDom();
		opt.dom = main.get(0);
		$('body').append(zz);

		//阻止body滚动
		let cc = new stopBodyScroll({
			canScrollDom:main,
			notScrollDom:zz
		});


		//生成树形菜单
		let dd;
		if(type == 1){
			//最后一层是多选框的
			// new showTree1({
			// 	dom:document.body,                  //放入的容器
			// 	data:treeData,                      //数据
			// 	selected:['010101','010103'],       //初始选中的选项的code
			// 	notEdit:['010103']                  //不能修改的选项的code
			// });
			dd = new showTree1(opt);
		}else if(type == 2){
			//每级都是checkbox
			//最终输出带层级的文本
			dd = new showTree2(opt);
		}else if(type == 3) {
			//最后一级是checkbox
			//最终输出带层级的文本
			dd = new showTree3(opt);
		}else if(type == 4){
			//倒数第二级是checkbox
			dd = new showTree4(opt);
		}else{
			throw '树形结构菜单的类型不存在，只有1-4类'
		}

		//点击返回数据
		$$(btn).myclickok(function(){
			let data = dd.getSelectVal();
			success(data);
			dd.destroy();
			cc.destroy();
			$$(btn).unbind(true);
			$$(zz).unbind(true);
			zz.remove();
		});
		$$(zz).myclickok(function(e){
			e.stopPop();
		}).myclickdown(function(e){
			e.stopPop();
		}).myclickup(function(e){
			e.stopPop();
		});
	})
};