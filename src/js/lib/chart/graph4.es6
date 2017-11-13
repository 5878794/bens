


//生成曲线图效果4




let svgObj = require("./../svg/svg"),
	init = Symbol('init'),
	typeInfo = [
		{
			name:'月经期',
			color:'#ff9436',
			val:'10'
		},{
			name:'安全期',
			color:'07ecc2',
			val:'15'
		},{
			name:'易孕期',
			color:'ff4b6f',
			val:'90'
		}
	],
	createSVG = Symbol(),
	getSvgWidth = Symbol(),
	setBodyStyle = Symbol(),
	getRealPoint = Symbol(),
	createLine = Symbol();





class graph4{
	constructor(opt={}){
		this.body = opt.body || $("body");
		this.data = opt.data || [];         //[{x:0,y:0},...]
		this.y = opt.y || [0,20,40,60,80,100];
		this.yTitle = opt.yTitle || '怀孕几率(%)';
		this.typeInfo = opt.typeInfo || typeInfo;

		this.todayBg = '#fbc114';
		this.todayColor = '#51301e';
		this.xDateColor = '#ababab';
		this.xDateFontsize = 22;
		this.color = '#666666';
		this.fontsize = 24;
		this.infoFontSize = 22;
		this.infoColor = '#666666';
		this.yTitleColor = '#ababab';
		this.yTitleFontSize = 22;
		this.lineColor = '#cecece';

		//是否显示线条颜色说明块
		this.isShowInfo = opt.isShowInfo || false;

		//svg 除曲线图外的空白区域（空白区域包含x、y信息）
		this.leftPadding = opt.leftPadding || 140;
		this.bottomPadding = opt.bottomPadding || 120;
		this.topPadding = opt.topPadding || 40;
		this.rightPadding = opt.rightPadding || 20;
		this.infoHeight = opt.infoHeight || 50;


		//svg的宽、高
		this.width = null;
		this.height = null;
		//线条 x、y的间距
		this.xySpacing = null;
		//y轴 1个点对应的距离xp；
		this.yScale = null;


		this.svg = null;

		this[init]();
	}

	[init](){
		this[setBodyStyle]();
		this[getSvgWidth]();
		this[createSVG]();
		this[createLine]();

		this.body.html(this.body.html());
	}

	//设置容器样式
	[setBodyStyle](){
		this.body.css({
			'overflow-x':'scroll',
			'overflow-y':'hidden',
			'-webkit-overflow-scrolling':'touch'
		});
	}

	//根据数据获取svg的总宽、高
	[getSvgWidth](){
		this.height = parseInt(this.body.height());

		let height = this.height - this.topPadding - this.bottomPadding;
		height = (this.isShowInfo)? height - this.infoHeight : height;

		//获取x、y坐标间的间距
		this.xySpacing = height/5;
		this.yScale = height/this.y[this.y.length-1];

		this.width = (this.data.length - 1) * this.xySpacing + this.leftPadding + this.rightPadding;
	}

	//创建svg
	[createSVG](){
		this.svg = new svgObj({
			container:this.body,
			width:this.width,
			height:this.height
		});
	}

	//获取真实的坐标
	[getRealPoint](x,y){
		x = x*this.xySpacing + this.leftPadding;
		y = this.height - this.bottomPadding - y*this.yScale;

		return x+","+y;
	}

	//创建表格
	[createLine](){
		let g = this.svg.createElement({
			tag:"g",
			attr:{}
		});


		//创建横线
		let x1 = 0,
			x2 = this.data.length-1;

		this.y.map(_y=>{
			let p1 = this[getRealPoint](x1,_y),
				p2 = this[getRealPoint](x2,_y),
				line = this.svg.createElement({
				tag:"path",
				attr:{
					d:"M "+p1+" L "+p2,
					fill:"none",
					stroke:this.lineColor,
					"stroke-width":"1px"
				}
			});

			g.append(line);
		});


		//创建竖线
		let y1 = 0,
			y2 = this.y[this.y.length-1];

		for(let i =0,l=this.data.length;i<l;i++){
			let p1 = this[getRealPoint](i,y1),
				p2 = this[getRealPoint](i,y2),
				line = this.svg.createElement({
					tag:"path",
					attr:{
						d:"M "+p1+" L "+p2,
						fill:"none",
						stroke:this.lineColor,
						"stroke-width":"1px"
					}
				});

			g.append(line);
		}



		this.svg.svg.append(g);
	}

}


module.exports = graph4;








