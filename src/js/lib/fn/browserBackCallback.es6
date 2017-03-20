//浏览器点后退按钮执行回调,在次点击浏览器历史记录后退
//回调只会执行一次。。。。
//微信需要先在页面点击一次才能生效






let addEvent = Symbol(),
	run = Symbol();


class browserBackCallback{
	constructor(callback){
		this.callback = callback || function(){};

		this[addEvent]();
		this[run]();
	}

	[addEvent](){
		var _this = this;
		window.addEventListener("popstate", function(e) {

			if(e.state.show){
				_this.callback();
			}

		}, false);
	}
	[run](){
		var  state = window.history.state;

		if(!state){
			window.history.replaceState({show:true,isOpened:false},"","");
			window.history.pushState({show:false,isOpened:true},"","");
		}else if(state && state.show){
			window.history.replaceState({show:true,isOpened:false},"","");
			window.history.pushState({show:false,isOpened:true},"","");
		}

	}

}


module.exports = browserBackCallback;