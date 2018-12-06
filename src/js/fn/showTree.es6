//显示树形菜单。。。。

//type1
//最后一层是checkbox的
//异步最终返回结果  [{name:'',code:''}]格式
// eg:
// 	let data = await showDom({
// 		data:treeData,                  //数据  数据查看 ../code/temp_TreeCode.js
// 		selected:['010101','010103'],   //初始选中的选项的code
// 		notEdit:['010103']              //不能修改的选项的code
// 	},1);
// 	console.log(data);



let $$ = require('../lib/event/$$'),
	showTree1 = require('./treeSelect1'),
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