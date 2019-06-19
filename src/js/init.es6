
let device = require('./lib/device');

require('./customElement/b_select');
require('./customElement/b_banner');
require('./customElement/b_switch');
require('./customElement/b_push_load');
require('./customElement/b_pull_refresh');
require('./customElement/b_sms_btn');




$(window).ready(function(){
	console.log('ready')
	page.init();
});


var page = {
	init(){
		this.setSelect();
		this.setBanner();
		this.setSwitch();
		this.setBPushLoad();
		this.setBPullRefresh();
		this.setSmsBtn();
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
		dom.isRadio = true;
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
	},

	setSwitch(){
		let switchDom = $('b-switch').get(0);
		// switchDom.circleColor = 'green';
		// switchDom.val = false;
	},

	setBPushLoad(){
		let dom = $('b-push-load').get(0),
			that = this;

		$(dom).attr({viewport:750});
		dom.getData = async function(pageIndex,pageSize){

			if(pageIndex == 1){
				// alert('loading')
			}

			let data = await that.getData();
			for(let i=0,l=20;i<l;i++){
				$('body').append('<div style="width:100%;height:20px;">'+i+'</div>')
			}

			if(pageIndex == 1){
				// alert('hide loading')
			}
			this.loadOk();
		}


	},
	getData(){
		return new Promise(success=>{
			setTimeout(function(){
				success([]);
			},2000)
		})
	},

	setBPullRefresh(){
		let dom = $('b-pull-refresh').get(0);


	},



	setSmsBtn(){
		let dom = $('b-sms-btn').get(0);
		dom.intervalTime = 60;
		dom.intervalText = '{x}秒';
		dom.fontColor = 'rgb(32,95,254)';
		dom.bgColor = 'rgb(255,255,255)';
		dom.fontSize = '12';
		dom.runFn = async function(){
			await device.sleep(1);
			console.log(1);

			dom.success();
		};
		dom.run();
	}



};

