

let sprites = Symbol(),
	parentDom = Symbol(),
	canvas = Symbol(),
	createCanvas = Symbol(),
	ctx = Symbol(),
	setCanvasStyle = Symbol(),
	fixCanvasImageBug = Symbol(),
	refreshParentDom = Symbol();



class Layer{
	constructor(opt = {}){

		this.width = opt.width;
		this.height = opt.height;
		this.zIndex = opt.zIndex || 1;

		this[sprites] = [];
		this[parentDom] = null;
		this[canvas] = null;
		this[ctx] = null;

		this[createCanvas]();
	}

	[createCanvas](){
		let _canvas = document.createElement("canvas"),
			_ctx = _canvas.getContext("2d");

		this[canvas] = _canvas;
		this[ctx] = _ctx;
	}

	[setCanvasStyle](){
		let width = parseInt(this[parentDom].width()),
			height = parseInt(this[parentDom].height()),
			canvas_width = (this.width)? this.width : width,
			canvas_height = (this.height)? this.height : height,
			left = (width - canvas_width)/2,
			top = (height - canvas_height)/2;

		this[canvas].width = canvas_width;
		this[canvas].height = canvas_height;

		$(this[canvas]).css({
			width:canvas_width+"px",
			height:canvas_height+"px",
			position:"absolute",
			left:left,
			top:top,
			"z-index":this.zIndex
		});
	}

	[fixCanvasImageBug](){
		let canvas1 = this[canvas],
			ctx1 = this[ctx];


		let devicePixelRatio = window.devicePixelRatio || 1,
			backingStorePixelRatio =    ctx1.webkitBackingStorePixelRatio ||
										ctx1.mozBackingStorePixelRatio ||
										ctx1.msBackingStorePixelRatio ||
										ctx1.oBackingStorePixelRatio ||
										ctx1.backingStorePixelRatio ||
										1;

		let ratio = devicePixelRatio / backingStorePixelRatio;

		if (devicePixelRatio !== backingStorePixelRatio) {
			let oldWidth = canvas1.width,
				oldHeight = canvas1.height;

			canvas1.width = oldWidth * ratio;
			canvas1.height = oldHeight * ratio;

			canvas1.style.width = oldWidth + 'px';
			canvas1.style.height = oldHeight + 'px';

			ctx1.scale(ratio, ratio);
		}
	}

	[refreshParentDom](){
		this[sprites].map((sprite)=>{
			sprite.parent = this[canvas];
		})
	}

	set parent(dom){
		this[parentDom] = dom;
		this[setCanvasStyle]();
		this[fixCanvasImageBug]();
		dom.append(this[canvas]);
		this[refreshParentDom]();
	}

	get parent(){
		return this[parentDom];
	}

	append(sprite){
		sprite.parent = this[canvas];
		this[sprites].push(sprite);
	}

	render(){
		this[sprites].map((sprite)=>{

			sprite.render();
		})
	}

	destroy(){
		this[canvas].remove();
	}
}


module.exports = Layer;