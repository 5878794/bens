
let device = require('./lib/device'),
	$$ = require('./lib/event/$$'),
	dataFilter = require('./lib/fn/dataFilterUndefined'),
	info = require('./lib/ui/info');

require('./customElement/phone/b_list');
require('./customElement/phone/b_bind');
require('./lib/jq/extend');



$(window).ready(function(){
	console.log('ready')
	page.init();
});


var i=0;
window.aa = function(){
	i++;
	console.log(i)
};

window.page = {
	async init(){




		$$('#aaa').myclickok(function(){
			console.log('ddd')
		});


		let list = $('b-list').get(0);

		// await device.sleep(2);
		let data = [
			{id:1,name:'aa',title:undefined},
			{id:2,name:'bb',title:null},
			{id:3,name:'cc',title:'ccTitle'},
			{id:4,name:'dd',title:'ddTitle'}
		];
		data = dataFilter(data);
		console.log(data)
		list.data = data;

		list.$$('.dddd').myclickok(function(){
			info.show($(this).text());
		});

		await device.sleep(1);

		list.$$('.dddd').unbind(true);


		list.data = [
			{id:1,name:'ee',title:'aaTitle'},
			{id:2,name:'ff',title:'bbTitle'},
			{id:3,name:'gg',title:'ccTitle'},
			{id:4,name:'hh',title:'ddTitle'}
		];

		await device.sleep(1);

		list.addData = [
			{id:1,name:'ii',title:'aaTitle'},
			{id:2,name:'jj',title:'bbTitle'},
			{id:3,name:'kk',title:'ccTitle'},
			{id:4,name:'ll',title:'ddTitle'}
		];




		let bd1 = $('#a1').get(0);
		let data1 = {
			title:undefined,
			time:'2011-11-11'
		};
		data1 = dataFilter(data1);
		console.log(data1)


		bd1.data = data1;
		bd1.$$('p').myclickok(function(){
			console.log($(this).text())
		});
		let bd2 = $('#a2').get(0);
		bd2.data = {
			title1:'test1Title',
			time1:'2011-12-12'
		};

		let a = bd2.find('.box_hcc').find('p').eq(0).text();
		console.log(a)
	},
	test(){
		i++;
		console.log(i);
	}

};

