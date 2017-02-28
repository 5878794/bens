
//创建精灵

require("./../jq/extend");

let canvas = Symbol(),
	ctx = Symbol();




class Sprite{
	constructor(opt = {}){
		//精灵的宽、高、坐标
		this.width = opt.width || 0;
		this.height = opt.height || 0;
		this.x = opt.x || 0;
		this.y = opt.y || 0;
		//精灵的资源图片
		this.res = opt.res;
		//精灵旋转角度,根据中心点旋转
		this.rotate = opt.rotate || 0;
		//精灵透明度 0-100
		this.alpha = opt.alpha || 100;
		//画布中心点
		this.centerX = ($.isUndefined(opt.centerX))?  opt.width/2 : opt.centerX;
		this.centerY = ($.isUndefined(opt.centerY))?  opt.height/2 : opt.centerY;
		//水平翻转
		this.flipHorizontal = $.isBoolean(opt.flipHorizontal)? opt.flipHorizontal : false;
		//垂直翻转
		this.flipVertical = $.isBoolean(opt.flipVertical)? opt.flipVertical : false;

		this[canvas] = null;
		this[ctx] = null;
	}

	//设置父级画布
	set parent(dom){
		this[canvas] = dom;
		this[ctx] = dom.getContext("2d");
	}

	//获取父级画布
	get parent(){
		return this[canvas];
	}

	//渲染
	render(){
		this[ctx].save();
		//设置画笔透明度
		this[ctx].globalAlpha = this.alpha/100;

		//水平或垂直翻转画布
		var translate_x = (this.flipHorizontal)? this[canvas].width : 0,
			translate_y = (this.flipVertical)? this[canvas].height : 0,
			scale_x = (this.flipHorizontal)? -1 : 1,
			scale_y = (this.flipVertical)? -1 : 1;

		this[ctx].translate(translate_x,translate_y);
		this[ctx].scale(scale_x,scale_y);

		//中心点移至画布翻转后元素的中心点
		let center_x = this.x + this.centerX,
			center_y = this.y + this.centerY,
			x = (this.flipHorizontal)? this[canvas].width - center_x : center_x,
			y = (this.flipVertical)? this[canvas].height - center_y : center_y;


		this[ctx].translate(x,y);
		this[ctx].rotate(Math.PI*this.rotate/180);
		//画布旋转后还原到翻转后的顶点（左上角）
		this[ctx].translate(-x,-y);

		this[ctx].drawImage(
			this.res,
			0,
			0,
			this.res.width,
			this.res.height,
			(this.flipHorizontal)? this[canvas].width - this.width - this.x : this.x,
			(this.flipVertical)? this[canvas].height - this.height - this.y : this.y,
			this.width,
			this.height
		);


		this[ctx].globalAlpha = 1;
		this[ctx].restore();
	}



}


module.exports = Sprite;