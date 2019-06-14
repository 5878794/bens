


require('./customElement/b_select');
require('./customElement/b_banner');



$(window).ready(function(){
	console.log('ready')
	page.init();
});


var page = {
	init(){
		this.setSelect();
		this.setBanner();

	},

	setSelect(){
		let data = [                      //@param:array(必填)      select的数据
			{key:"1",val:"男"},
			{key:"2",val:"女"},
			{key:'3',val:'不告诉你'}
		];
		let dom = $('b-select').get(0);

		dom.data =data;
		// dom.val = '';
		dom.radio = true;
		dom.viewport = 750;
		dom.title = '请选择您的年龄';
		dom.placeholder = '请选择你的年龄';


	},

	setBanner(){
		let banner = $('b-banner').get(0);
		banner.data = [
			{href:'https://www.baidu.com',image:'http://pic37.nipic.com/20140113/8800276_184927469000_2.png'},
			{href:'https://www.baidu.com',image:'http://pic15.nipic.com/20110628/1369025_192645024000_2.jpg'},
			{href:'https://www.baidu.com',image:'http://k.zol-img.com.cn/sjbbs/7692/a7691515_s.jpg'},
			{href:'https://www.baidu.com',image:'http://pic9.nipic.com/20100923/2531170_140325352643_2.jpg'}
		];
		banner.run();
	}
};

