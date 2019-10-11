



let loadPage = require('./customElement/fn/b_page_rout'),
	url = window.location.href,
	isSignPage = (url.indexOf('\/#\/') > -1);


let reWriteFn = function(){
	document.write = function(rs){
		// console.log(rs);
	};
};

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

let hidePage = function(){
	let page = document.getElementsByTagName('html')[0];
	page.style.visibility = 'hidden';
};

let showPage = function(){
	let page = document.getElementsByTagName('html')[0];
	page.style.visibility = 'visible';
};

// let getUrl = function(){
// 	let url = window.location.href;
// 	url = url.split('\/#\/')[1];
// 	url = (url)? url : 'index.html';
// 	return url;
// };



if(isSignPage){
	hidePage();
	reWriteFn();

	$(document).ready(async function(){
		clearCss();
		clearBodyHtml();
		showPage();
		// let url = getUrl();
		await loadPage.startPage(window.location.href);
	});
}

