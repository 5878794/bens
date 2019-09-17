
let device = require('./lib/device'),
	$$ = require('./lib/event/$$'),
	info = require('./lib/ui/info');

require('./customElement/phone/b_list');
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
		list.list = [
			{id:1,name:'aa',title:'aaTitle'},
			{id:2,name:'bb',title:'bbTitle'},
			{id:3,name:'cc',title:'ccTitle'},
			{id:4,name:'dd',title:'ddTitle'}
		];
		// list.item('.dddd').myclickok(function(){
		// 	info.show($(this).text());
		// });

		await device.sleep(1);

		list.item('.dddd').unbind(true);


		list.list = [
			{id:1,name:'ee',title:'aaTitle'},
			{id:2,name:'ff',title:'bbTitle'},
			{id:3,name:'gg',title:'ccTitle'},
			{id:4,name:'hh',title:'ddTitle'}
		];

		await device.sleep(1);

		list.addList = [
			{id:1,name:'ii',title:'aaTitle'},
			{id:2,name:'jj',title:'bbTitle'},
			{id:3,name:'kk',title:'ccTitle'},
			{id:4,name:'ll',title:'ddTitle'}
		]

	},
	test(){
		i++;
		console.log(i);
	}

};

