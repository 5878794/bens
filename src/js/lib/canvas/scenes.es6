

//canvas画布
// var canvas = require("./canvas");


//创建画布
// var aa = new canvas({
// 	width:400,          //@param:number  default:window.innerWidth
// 	height:300,         //@param:number  default:window.innerHeight
// 	zIndex:1,           //@param:number  default:1
// 	body:document.body  //@param:dom     default:document.body
// });



//修复画布中图片模糊的bug
let fixedCanvasImageBug = function(canvas, ctx){
	var devicePixelRatio = window.devicePixelRatio || 1;
	var backingStorePixelRatio =    ctx.webkitBackingStorePixelRatio ||
									ctx.mozBackingStorePixelRatio ||
									ctx.msBackingStorePixelRatio ||
									ctx.oBackingStorePixelRatio ||
									ctx.backingStorePixelRatio ||
									1;

	var ratio = devicePixelRatio / backingStorePixelRatio;

	if (devicePixelRatio !== backingStorePixelRatio) {
		let oldWidth = canvas.width,
			oldHeight = canvas.height;

		canvas.width = oldWidth * ratio;
		canvas.height = oldHeight * ratio;

		canvas.style.width = oldWidth + 'px';
		canvas.style.height = oldHeight + 'px';

		ctx.scale(ratio, ratio);
	}
};



let Scenes = class{
	constructor(opt){
		opt = opt || {};
		this.width = opt.width || window.innerWidth;
		this.height = opt.height || window.innerHeight;
		this.zIndex = opt.zIndex || 1;
		this.body = opt.body || document.body;

		this.canvas = null;
		this.ctx = null;

		this.elemList = [];

		this._create();
	}

	//创建画布
	_create(){
		let canvas = document.createElement("canvas"),
			ctx = canvas.getContext("2d"),
			left = (window.innerWidth - this.width) /2,
			top = (window.innerHeight - this.height) /2;

		canvas.width = this.width;
		canvas.height = this.height;
		canvas.style.cssText = "position:absolute;z-index:"+this.zIndex+";left:"+left+"px;top:"+top+"px;";
		this.body.appendChild(canvas);

		this.canvas = canvas;
		this.ctx = ctx;

		fixedCanvasImageBug(canvas,ctx);
	}

	//清除画布
	clear(color){
		color = color || "rgba(0,0,0,0)";
		this.ctx.fillStyle = color;
		this.ctx.clearRect(0,0,this.width,this.height);
		this.canvas.style.display = "none";// Detach from DOM
		this.canvas.offsetHeight; // Force the detach
		this.canvas.style.display = "inherit"; // Reattach to DOM
	}

	//添加元素 obj/array obj
	add(elem){
		if(!$.isArray(elem)){
			elem = [elem];
		}
		this.elemList.push.apply(this.elemList,elem);
	}

	//删除元素 obj/array obj
	del(elem){
		let delFn = (obj) =>{
			let n = this.elemList.indexOf(obj);
			this.elemList.splice(n,1);
		};

		if($.isArray(elem)){
			for(let i=0,l=elem.length;i<l;i++){
				delFn(elem[i]);
			}
		}else{
			delFn(elem);
		}

	}

	//渲染画布
	render(){
		this.elemList.map((_elem) => {
			_elem.render(this.canvas);
		})
	}

	//销毁画布
	destroy(){
		this.elemList = [];
		$(this.canvas).remove();
	}
};










module.exports = Scenes;


