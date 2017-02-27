

let canvas = Symbol(),
	ctx = Symbol();




class Sprite{
	constructor(opt){
		this.width = opt.width;
		this.height = opt.height;
		this.x = opt.x || 0;
		this.y = opt.y || 0;
		this.res = opt.res;
		this.rotate = opt.rotate || 0;
		this.alpha = opt.alpha || 100;

		this[canvas] = null;
		this[ctx] = null;
	}

	set parent(dom){
		this[canvas] = dom;
		this[ctx] = dom.getContext("2d");
	}

	get parent(){
		return this[canvas];
	}

	render(){
		this[ctx].save();
		//设置画笔透明度
		this[ctx].globalAlpha = this.alpha/100;

		this[ctx].drawImage(
			this.res,
			0,
			0,
			this.res.width,
			this.res.height,
			this.x,
			this.y,
			this.width,
			this.height
		);


		this[ctx].globalAlpha = 1;
		this[ctx].restore();
	}



}


module.exports = Sprite;