

// TODO
//之前的类要处理，不适应单页面
//页面卸载还没做
//手机上返回时滚动条在最顶端


//单页面加载
//占用了window.appPage变量

//打开新页面  loadPage.openUrl

//由于webpack加载过的页面不会在加载和自动执行，所以需要缓存
//需要缓存启动页面的函数  loadPage.catch

//需要设置SETTING.js 中publishJS
	// publishJS:[
		// 'polyfill.js',
		// 	'jquery-3.1.1.min.js',
		// 	'setting.js',
		// 	'common.min.js',
		// 	'signPageInit.js'
	// ]


//需要一个新的启动页js,打包成webpack的入口
//sign_page_run.es6

//页面需要单独挂载js目录下的   signPageInit.js
//该js根据地址是否包含  /#/ 处理页面js分别加载


//加载
let loadPage = require('./b_page_rout'),
	url = window.location.href,
	isSignPage = (url.indexOf('\/#\/') > -1);





let clearBodyHtml = function(){
	document.body.innerHTML = '';
	document.body.style.display = '';
};

//清除除 all.css 以外的css
let clearCss = function(){
	let links = $('link');
	links.each(function(){
		if($(this).attr('href').indexOf('all.css') == -1 ){
			$(this).remove();
		}
	});
};



let showPage = function(){
	let page = document.getElementsByTagName('html')[0];
	page.style.visibility = 'visible';
};




if(isSignPage){
	$(document).ready(async function(){
		clearCss();
		clearBodyHtml();
		showPage();
		await loadPage.startPage(window.location.href);
	});
}


//重复js动态加载webpack的包后不会重复加载并执行
//因此缓存入口函数 直接调用
let catchFn = function(fn){
	let url1 = window.location.href;
	url1 = url1.substr(url1.lastIndexOf('\/')+1);
	url1 = url1.split('.')[0];
	url1 = url1 || 'index';

	if(!window.appPage){window.appPage = {}}
	window.appPage[url1] = fn;

};


module.exports = {
	openUrl:function(pageUrl,url){
		loadPage.openUrl(pageUrl,url)
	},
	catch:catchFn
};

