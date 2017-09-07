


require("../jq/extend");
let select = require("./select"),
	app = require("../device"),
	$$ = require("../event/$$"),
	init = Symbol(),
	createShowSelectedDiv = Symbol(),
	selectedDiv = Symbol();



class cascade extends select{
	constructor(opt={}){
		super(opt);


		//已选择的类别的显示dom
		this[selectedDiv] = null;

		this[init]();
	}

	[init](){
		this[createShowSelectedDiv]();
		this[selectedDiv].insertAfter(this.domTitle);


	}


	//创建显示区域
	[createShowSelectedDiv](){
		let div = $("<div></div>");
		div.css3({
			width:"100%",
			height:this.listLineHeight+"px",
			"box-sizing":"border-box",
			background:"#eee",
			"line-height":this.listLineHeight+"px",
		});

		this[selectedDiv] = div;
	}


}




module.exports = cascade;