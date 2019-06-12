


require('./customElement/b_select');



$(window).ready(function(){
	console.log('ready')
	init();
});


var init = function(){
	let data = [                      //@param:array(必填)      select的数据
		{key:"1",val:"男"},
		{key:"2",val:"女"},
		{key:'3',val:'不告诉你'}
	];
	let dom = $('b-select');


	dom.attr({
		val:'',
		radio:'true',
		viewport:'750',
		title:'请选择您的年龄',
		placeholder:'请选择你的年龄'
	}).data({
		data:data
	});
};