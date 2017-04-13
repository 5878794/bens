
// 曲线图带颜色块



// a = new svg.Graph({
// 	dom:$("#test"),       //@param:jqobj 要插入的dom
// 	data:[
// 		{x:8,y:""},
// 		{x:9,y:1},
// 		{x:10,y:3},
// 		{x:11,y:4},
// 		{x:12,y:12},
// 		{x:13,y:12},
// 		{x:14,y:15},
// 		{x:15,y:20},
// 		{x:16,y:10},
// 		{x:17,y:""},
// 		{x:18,y:""},
// 	],
// 	line:[10,20]
// });


let svgObj = require("./../svg/svg"),
	init = Symbol(),
	createSVG = Symbol(),
	setDom = Symbol(),
	createXLine = Symbol(),
	getPointXY = Symbol(),
	createDataLine = Symbol(),
	getYScale = Symbol(),
	sortLineArray = Symbol(),
	createXName = Symbol();

require("../jq/extend");



class graph2{
	constructor(opt){
		this.dom = opt.dom || $("body");
		this.data = opt.data || [];
		this.lines = opt.line || [];
		this.bg = opt.bg || "rgb(136,135,231)";
		this.topHeight = 60;
		this.bottomHeight = 30;
		this.padding = 10;
		this.lineColor = "#ccc";
		this.graphColor = "#fff";
		this.graphPaddingLeft = 45;
		this.graphPaddingRight = 15;
		this.areaColor = "rgba(255,255,255,0.3)";
		this.fontSize = 14;
		this.pointR = 3;


		this.scaleY = 1;
		this.width = parseInt(this.dom.width());
		this.height = parseInt(this.dom.height());
		this.maxVal = this.lines[this.lines.length-1] || 0;
		this.svg = null;


		this[init]();
	}
	[init]() {
		this[createSVG]();
		this[sortLineArray]();
		this[getYScale]();
		this[setDom]();
		this[createXLine]();
		this[createDataLine]();
		this[createXName]();


		this.dom.html(this.dom.html());
	}
	//创建svg对象
	[createSVG](){
		this.svg = new svgObj({
			container:this.dom,
			viewBoxWidth:this.width,
			viewBoxHeight:this.height
		});
	}

	//线条数组排序
	[sortLineArray](){
		//添加x轴的底线
		this.lines.push(0);
		this.lines.sort(function(x,y){return x>y});
	}

	//计算y轴数值的缩放比例
	[getYScale](){
		let height = this.height - this.padding*2 - this.topHeight - this.bottomHeight,
			maxLineVal = this.lines[this.lines.length-1];

		this.scaleY = height/maxLineVal;
	}

	//设置dom属性
	[setDom](){
		this.dom.css3({
			background:this.bg,
			overflow:"hidden",
			"border-radius":"10px"
		})
	}

	//坐标从左上角转换为左下角
	[getPointXY](x,y){
		let newY = this.height - y;
		return x+","+newY;
	}

	//创建横线
	[createXLine](){
		for(var i=0,l=this.lines.length;i<l;i++){
			let x1 = this.padding,
				y1 = this.padding + this.bottomHeight + this.scaleY*this.lines[i],
				line_width = this.width - this.padding*2,
				p1 = this[getPointXY](x1,y1),
				xLine = this.svg.createElement({
					tag:"path",
					attr:{
						d:"M "+p1+" H "+line_width,
						fill:"none",
						stroke:this.lineColor,
						"stroke-width":"1",
						"stroke-linecap": "round",
						"stroke-dasharray":(i==0 || i==this.lines.length-1)? "2 0" : "2 2"
					}
				});
			this.svg.svg.append(xLine);
		}
	}

	//创建数据线
	[createDataLine](){
		var number = this.data.length,
			pointJg = (this.width - this.padding*2 - this.graphPaddingLeft - this.graphPaddingRight)/(number-1);

		for(var i=0,l=number;i<l;i++){
			if(this.data[i].y == ""){continue;}

			//生成当前点
			let _y1 = (this.data[i].y > this.maxVal)? this.maxVal : this.data[i].y,
				x1 = this.padding + this.graphPaddingLeft + i*pointJg,
				y1 = this.padding + this.bottomHeight + _y1*this.scaleY,
				p1 = this[getPointXY](x1,y1),
				_p1 = p1.split(","),
				point = this.svg.createElement({
				tag:"circle",
				attr:{
					cx:_p1[0],
					cy:_p1[1],
					r:this.pointR,
					"stroke-width":2,
					fill:this.bg,
					stroke:this.graphColor
				}
			});


			//判断下一个点是否存在,存在就划线到下一个点
			if(this.data[i+1] && this.data[i+1].y !== ""){
				let _y2 = (this.data[i+1].y > this.maxVal)? this.maxVal : this.data[i+1].y,
					x2 = this.padding + this.graphPaddingLeft + (i+1)*pointJg,
					y2 = this.padding + this.bottomHeight + _y2*this.scaleY,
					p2 = this[getPointXY](x2,y2),
					_p2 = p2.split(","),
					line = this.svg.createElement({
						tag:"path",
						attr:{
							d:"M "+p1+" L "+p2,
							fill:"none",
							stroke:this.graphColor,
							"stroke-width":"1",
							"stroke-linecap": "round"
						}
					}),
					x3 = _p2[0],
					y3 = this.padding+this.bottomHeight,
					//第2点在x轴的投影点
					p3 = this[getPointXY](x3,y3),
					x4 = _p1[0],
					y4 = y3,
					//第1点在x轴的投影点
					p4 = this[getPointXY](x4,y4),
					area = this.svg.createElement({
						tag:"path",
						attr:{
							d:"M "+p1+" L "+p2+" L "+p3+" L "+p4+" Z",
							fill:this.areaColor,
							stroke:"none"
						}
					});
				this.svg.svg.append(area);
				this.svg.svg.append(line);
			}

			this.svg.svg.append(point);
		}
	}

	//写x轴坐标
	[createXName](){
		let pointJg = (this.width - this.padding*2 - this.graphPaddingLeft - this.graphPaddingRight)/(this.data.length-1),
			textArea = this.svg.createElement({
				tag:"text",
				attr:{
					x:0,
					y:0,
					"font-size":this.fontSize+"px",
					width:this.width,
					height:this.height,
					overflow:"visible"
				}
			});

		for(let i=0,l=this.data.length;i<l;i++){
			let this_text = this.data[i].x,
				x = this.padding + this.graphPaddingLeft + pointJg*i,
				y = this.padding + this.bottomHeight,
				p = this[getPointXY](x,y),
				_p = p.split(","),
				text = this.svg.createElement({
					tag:"tspan",
					val:this_text,
					attr:{
						x:_p[0],
						y:_p[1],
						fill:this.lineColor,
						dx:-this.pointR*2+"px",
						dy:this.fontSize+(this.bottomHeight-this.fontSize)/2+"px"
					}
				});
			textArea.append(text);
		}

		let tx = this.padding,
			ty = this.padding+this.bottomHeight,
			tp = this[getPointXY](tx,ty),
			_tp = tp.split(","),
			title = this.svg.createElement({
				tag:"tspan",
				val:"时间",
				attr:{
					x:_tp[0],
					y:_tp[1],
					fill:this.lineColor,
					dx:-this.pointR*2+"px",
					dy:this.fontSize+(this.bottomHeight-this.fontSize)/2+"px"
				}
			});

		textArea.append(title);

		this.svg.svg.append(textArea);
	}

	//写y轴坐标


	//写顶部文字信息
}



module.exports = graph2;