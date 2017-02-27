

let createDiv = Symbol(),
	setDivCss = Symbol(),
	body = Symbol(),
	layers = Symbol(),
	parentDom = Symbol(),
	refreshParentDom = Symbol();



class Scene{
	constructor(){

		this[layers] = [];
		this[body] = null;
		this[parentDom] = null;

		this[createDiv]();
	}

	[createDiv](){
		let div = $("<div></div>");

		this[body] = div;
	}

	[setDivCss](){
		let width = parseInt(this[parentDom].width()),
			height = parseInt(this[parentDom].height());

		this[body].css({
			width:width+"px",
			height:height+"px",
			position:"absolute",
			left:0,
			top:0
		});
	}

	[refreshParentDom](){
		this[layers].map((layer)=>{
			layer.parent = this[body];
		})
	}

	set parent(dom){
		this[parentDom] = dom;
		this[setDivCss]();
		dom.append(this[body]);
		this[refreshParentDom]();
	}

	get parent(){
		return this[parentDom];
	}

	append(layer){
		layer.parent = this[body];
		this[layers].push(layer);
	}

	render(){
		this[layers].map((layer)=>{

			layer.render();
		})
	}

	destroy(){
		this[body].remove();
	}
}


module.exports = Scene;