
//创建一个场景,可以包含多个画布

let createDiv = Symbol(),
	setDivCss = Symbol(),
	body = Symbol(),
	layers = Symbol(),
	parentDom = Symbol(),
	refreshParentDom = Symbol();



class Scene{
	constructor(){
		//当前场景包含的画布层
		this[layers] = [];
		//当前场景包裹层
		this[body] = null;
		//父级层
		this[parentDom] = null;

		this[createDiv]();
	}

	//创建场景的包裹层
	[createDiv](){
		let div = $("<div></div>");

		this[body] = div;
	}

	//设置场景的样式
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

	//父级容器变更时执行刷新所包含的所有画布层的父级容器设置
	[refreshParentDom](){
		this[layers].map((layer)=>{
			layer.parent = this[body];
		})
	}

	//设置父级包裹层
	set parent(dom){
		this[parentDom] = dom;
		this[setDivCss]();
		dom.append(this[body]);
		this[refreshParentDom]();
	}

	//获取父级包裹层
	get parent(){
		return this[parentDom];
	}

	//添加场景
	append(layer){
		layer.parent = this[body];
		this[layers].push(layer);
	}

	//渲染场景
	render(){
		this[layers].map((layer)=>{

			layer.render();
		})
	}

	//销毁场景
	destroy(){
		this[body].remove();
	}
}


module.exports = Scene;