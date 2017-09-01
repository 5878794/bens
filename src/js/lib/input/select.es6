//单选、多选控件

// let select = require("select");
// select({
// 	titleText:"请选中性别",
// 	data:[              //select的数据
// 		{key:"1",val:"男"},
// 		{key:"2",val:"女"}
// 	],
// 	inputId:"select_id",        //input  type=hidden  的id
// 	radio:true          //单选还是多选   默认true
// });





require("../jq/extend");
let app = require("../device"),
	zz = require("./bodyStyle"),
	$$ = require("../event/$$"),
	installSvg = require("../svg/installSvgSprite"),
	init = Symbol(),
	bindData = Symbol("bindData"),
	bindEvent = Symbol("bindEvent"),
	createListDom = Symbol("createListDom"),
	setSelectStyle = Symbol("setSelectStyle"),
	radioEvent = Symbol("radioEvent"),
	checkBoxEvent = Symbol("checkBoxEvent"),
	delSelectStyle = Symbol("delSelectStyle");




class select extends zz{
	constructor(opt={}){
		super(opt);
		//数据
		this.data = opt.data || [];
		//单选还是多选
		this.radio = ($.isBoolean(opt.radio))? opt.radio : true;
		//选中的对象
		this.selected = opt.selected || [];
		//点击确定按钮返回结果
		this.callback = opt.success || function(){};
		//取消执行
		this.closeFn = opt.error || function(){};
		//列表字体模式颜色
		this.notSelectColor = opt.notSelectColor || "#333";
		//选中的勾颜色
		this.selectedColor = opt.selectedColor || "#007df2";
		//行高 rem
		this.listLineHeight = app.rem2Px(this.viewPort,(opt.listLineHeight || 1));
		//行底部线条颜色
		this.listBottomColor = opt.listBottomColor || "#eee";
		//选中的勾的字体大小 图标字体
		this.selectedSize = app.rem2Px(this.viewPort,(opt.selectedSize || 0.32));
		//列表字体大小
		this.listFontSize = app.rem2Px(this.viewPort,(opt.listFontSize || 0.32));


		this[init]();
	}

	[init](){
		this[bindData]();
		this[bindEvent]();
		this.preventDefaultPushRefresh();
	}

	//创建行元素dom
	[createListDom](){
		let div = $("<div></div>");
		div.css3({
			width:"100%",
			"box-sizing":"border-box",
			height:this.listLineHeight+"px",
			"line-height":this.listLineHeight+"px",
			position:"relative",
			"padding-left":this.listLineHeight+"px",
			"border-bottom":"1px solid "+this.listBottomColor,
			"font-size":this.listFontSize+"px",
			color:this.notSelectColor
		}).addClass("diandian");

		let selected = $("<p></p>");
		selected.css({
			width:this.listLineHeight+"px",
			height:this.listLineHeight+"px",
			position:"absolute",
			left:0,top:0,
			display:"none",
			color:this.selectedColor,
			"text-align":"center",
			"font-size":this.selectedSize+"px"
		});
		selected.html(installSvg.get(this.svgYesId));

		div.append(selected).append("<span></span>");

		return div;
	}

	//设置选中行的样式
	[setSelectStyle](dom){
		dom.css({color:this.selectedColor})
			.addClass("__select__")
			.find("p")
			.css({display:"block"});

	}

	//清除选中的样式
	[delSelectStyle](dom){
		var _this = this;
		dom.each(function(){
			dom.css({color:_this.notSelectColor})
				.removeClass("__select__")
				.find("p")
				.css({display:"none"});
		});
	}


	//绑定数据
	[bindData](){
		let body = this.domBody,
			data = this.data,
			listDom = this[createListDom]();

		data.map(list=>{
			let this_dom = listDom.clone(),
				this_key = list.key;

			if(this.selected.indexOf(this_key)>-1){
				this[setSelectStyle](this_dom);
			}


			this_dom.data({data:list});
			this_dom.find("span").text(list.val);

			body.append(this_dom);
		});

		this.domBody.addScroll();

	}

	//绑定事件
	[bindEvent](){
		let list = this.domBody.find("div"),
			_this = this;

		$$(list).myclickok(function(){
			if(_this.radio){
				_this[radioEvent](list,$(this));
			}else{
				_this[checkBoxEvent]($(this));
			}
		});
	}

	//单选事件处理
	[radioEvent](list,dom){
		this[delSelectStyle](list);
		this[setSelectStyle](dom);
	}

	//多选事件处理
	[checkBoxEvent](dom){
		if(dom.hasClass("__select__")){
			this[delSelectStyle](dom);
		}else{
			this[setSelectStyle](dom);
		}
	}


	//点击确定返回结果
	success(){
		let list = this.domBody.find("div"),
			selected = [];

		list.each(function(){
			if($(this).hasClass("__select__")){
				selected.push($(this).data("data").key);
			}
		});

		this.callback(selected);
		this.destroy();
	}

	cancel(){
		this.closeFn();
		this.destroy();
	}

	destroy(){
		let list = this.domBody.find("div");
		$$(list).unbind(true);
		super.destroy();
	}
}



module.exports = function(opt){
	let inputId = opt.inputId,
		input = $("#"+inputId),
		selectedVal = input.val() || "";

	opt.data.map(this_data=>{
		this_data.key = this_data.key.toString();
	});


	opt.selected = selectedVal.split(",");
	console.log(selectedVal.split(","))

	opt.success = function(val=[]){
		input.val(val.join(","));
	};
	opt.error = function(){

	};
	new select(opt)
};