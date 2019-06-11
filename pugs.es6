let pug = require('pug'),
	fs = require('fs');




// let renderFn = function(){
global.isWxApp = true;
let html = pug.renderFile(
	'ttt.pug',
	{
		globals:['isWxApp'],
		pretty:true
	}
);
fs.writeFileSync('ttt.xxx',html,function(err){
	if(err){
		console.log(err);
	}
});

global.isWxApp = false;
html = pug.renderFile(
	'ttt.pug',
	{
		globals:['isWxApp'],
		pretty:true
	}
);
fs.writeFileSync('ttt.yyy',html,function(err){
	if(err){
		console.log(err);
	}
});




// };


// renderFn();