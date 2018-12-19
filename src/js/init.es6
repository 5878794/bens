let setViewPort = require('./lib/ui/setViewport'),
	device = require('./lib/device'),
	loadFn = require('./lib/ui/loading'),
	$$ = require('./lib/event/$$'),
	jsAnimate = require('./lib/fn/jsAnimate');

require('./lib/jq/cssAnimate');


setViewPort(640);
let loading = new loadFn();

// let serverUrl = 'http://phr.care4u.cn/HealthServer/hotSpot_getListPage.do?state=1&size=15&index=1';
// let imgServer = 'http://phr.care4u.cn/HealthWeb/';

let serverUrl = 'http://118.123.173.101:7001/HealthServer/hotSpot_getListPage.do?state=1&size=15&index=1';
let imgServer = 'http://118.123.173.101:7001/HealthWeb/';


$(document).ready(function(){
	loading.show('极速加载中');

	PAGE.init().then(function(){
		loading.hide();
	}).catch(function(e){
		loading.hide();
		alert(e);
	});
});



let PAGE = {
	async init(){
		let data = await this.getData();
		this.bindData(data);

		this.addEvent();
	},

	getData(){
		return new Promise((success,error)=>{
			$.ajax({
				type: 'get',
				cache: false,
				url: serverUrl,
				data: {},
				traditional:true,
				//contentType:"application/json",
				// dataType: "json",
				timeout: 20000,     //20秒
				success: function(rs) {
					if($.isString(rs)){
						rs = JSON.parse(rs);
					}
					if(rs.stateCode == 'success'){
						success(rs.data);
					}else{
						error('接口错误');
						throw '接口错误';
					}
				},
				error: function(err) {
					error("网络错误,无法连接服务器。");
					throw "网络错误,无法连接服务器。";
				}
			});
		})
	},
	bindData(data){
		let body = $('body'),
			item = $('#list');

		data.map(rs=>{
			let thisItem = item.clone().removeClass('hidden').attr({id:''}),
				img = imgServer+rs.img,
				context = rs.content,
				title = rs.title;

			thisItem.find('.item_top').css({
				background:'url('+img+') no-repeat center center',
				'background-size':'cover'
			}).find('.title').text(title);
			thisItem.find('.item_main').html(context);

			body.append(thisItem);
		});
	},

	addEvent(){
		let doms = $('.list'),
			_this = this;

		$$(doms).myclickok(function(){
			//清除列表事件（因列表展开层是嵌套在列表中，会导致事件穿透）
			$$(doms).unbind(true);
			$(this).css({
				'will-change':'all'
			});
			//显示动画
			_this.showAnimate($(this).find('.item'));
		});
	},

	showAnimate(dom){
		//获取元素当前相对屏幕位置及参数
		let offset = dom.offset(),
			scrollTop = $(window).scrollTop(),
			topToScreen = offset.top - scrollTop,
			leftToScreen = offset.left,
			width = device.rem2Px(640,6),
			height = device.rem2Px(640,4.6),
			endWidth = device.rem2Px(640,6.4),
			endHeight = window.innerHeight,
			_this = this;


		//浮出元素
		dom.css({
			position:'fixed',
			left:leftToScreen+'px',
			top:topToScreen+'px',
			'z-index':10,
			'overflow-x':'hidden',
			'overflow-y':'scroll',
			'-webkit-overflow-scrolling' : 'touch'
		});
		dom.find('.item_main').css({display:'block'});


		//动画展示详情
		let a = new jsAnimate({
			start:0,                  //@param:number   初始位置
			end:1,                    //@param:number   结束位置
			time:800,                 //@param:number   动画执行时间  ms
			type:"Back",             //@param:str      tween动画类别,默认：Linear 详见函数内tween函数
			class:"easeInOut",           //@param:str      tween动画方式,默认：easeIn 详见函数内tween函数
			stepFn:function(val){     //@param:fn       每步执行函数,返回当前属性值
				let _left = leftToScreen + (0-leftToScreen)*val,
					_top = topToScreen + (0-topToScreen)*val,
					_width = width + (endWidth-width)*val,
					_height = height + (endHeight-height)*val;
					_height = (_height<height)? height : _height;


				dom.css({
					left:_left+'px',
					top:_top+'px',
					width:_width+'px',
					height:_height+'px'
				});

			},
			endFn:function(){         //@param:fn       动画结束执行
				//动画展示关闭按钮
				let close = dom.find('.close');
				close.css({display:'block'});
				setTimeout(function(){
					close.cssAnimate({
						opacity:1
					},800);
				},100);

				$$(close).myclickok(function(){
					$$(close).unbind(true);
					$(this).cssAnimate({
						opacity:0
					},500,function(){
						close.css({display:'none'});
					});
					_this.hideAnimate(dom,topToScreen,leftToScreen,endWidth,endHeight,width,height);
				});
			}
		});
		a.play();
	},
	hideAnimate(dom,topToScreen,leftToScreen,endWidth,endHeight,width,height){
		let _this = this;
		let domScrollTop = dom.get(0).scrollTop;
		let a = new jsAnimate({
			start:0,                  //@param:number   初始位置
			end:1,                    //@param:number   结束位置
			time:800,                 //@param:number   动画执行时间  ms
			type:"Back",             //@param:str      tween动画类别,默认：Linear 详见函数内tween函数
			class:"easeInOut",           //@param:str      tween动画方式,默认：easeIn 详见函数内tween函数
			stepFn:function(val){     //@param:fn       每步执行函数,返回当前属性值
				let _left = 0 + (leftToScreen - 0)*val,
					_top = 0 + (topToScreen - 0)*val,
					_width = endWidth + (width-endWidth)*val,
					_height = endHeight + (height-endHeight)*val,
					scrollTop = domScrollTop + (0-domScrollTop)*val;
				// _height = (_height<height)? height : _height;


				dom.css({
					left:_left+'px',
					top:_top+'px',
					width:_width+'px',
					height:_height+'px'
				});
				dom.get(0).scrollTop = scrollTop;

			},
			endFn:function(){         //@param:fn       动画结束执行
				_this.addEvent();
				dom.find('.item_main').css({display:'none'});
				dom.css({
					'z-index':'auto',
					position: 'absolute',
					left:'0.2rem', top:'0.2rem',
					overflow:'hidden',
					'will-change':'auto'
				});
			}
		});
		a.play();
	}





	// addEvent(){
	// 	let top = 0;
	// 	let clickFn = function(dom){
	// 		let css = {
	// 			position:'fixed',
	// 			left:0,
	// 			top:0,
	// 			bottom:0,
	// 			right:0,
	// 			'z-index':'10',
	// 			'overflow-y':'auto',
	// 			'overflow-x':'hidden',
	// 			'-webkit-overflow-scrolling' : 'touch'
	// 		};
	//
	// 		dom.unbind('click').find('.item').css(css);
	//
	// 		dom.find('.close').click(function(){
	// 			$(this).unbind('click');
	// 			let dom = $(this).parent().parent().parent();
	// 			closeFn(dom);
	// 			setTimeout(function(){
	// 				dom.click(function(){
	// 					clickFn(dom);
	// 				});
	// 			},500)
	// 		})
	// 	};
	//
	// 	let closeFn = function(dom){
	// 		dom = dom.find('.item');
	// 		console.log(dom)
	// 		dom.css({
	// 			position: 'absolute',
	// 			left:'0.2rem',
	// 			right:'0.2rem',
	// 			top:'0.2rem',
	// 			bottom:'0.2rem',
	// 			overflow: 'hidden'
	// 		});
	// 	};
	//
	//
	// 	$('.list').click(function(){
	// 		clickFn($(this));
	// 	});
	// }
};