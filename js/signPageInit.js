var url = window.location.href,
	isSignPage = (url.indexOf('\/#\/') > -1);

var loadScript = function(src){
	$.getScript(src);
	// var script = $('<script src="'+src+'"></script>');
	// $('head').append(script);
};

var reWriteFn = function(){
	$('script').each(function(){
		var src = $(this).data('src');
		if(src){
			loadScript(src);
		}
	});
};

var addWebpackInitFn = function(){
	loadScript('./js/dist/sign_page_run.min.js?t='+new Date().getTime());
};


var hidePage = function(){
	var page = document.getElementsByTagName('html')[0];
	page.style.visibility = 'hidden';
};


$(document).ready(function(){
	if(isSignPage){
		hidePage();
		addWebpackInitFn();
	}else{
		reWriteFn();
	}
});
