let createStickClass = require("./lib/chart/histogram");



$(document).ready(function(){
	// bens = createStickClass;

	bens = new createStickClass({
		body:$("#test"),      //@param:jqobj   容器
		maxYNumber:"",        //@param:number  y轴显示最大值  默认数据中的最大值
		minYNumber:"",        //@param:number  y轴显示最小值  默认0
		showYTextNumber:"",   //@param:number  y轴显示几个刻度
		showXTextNumber:"",   //@param:number  x轴显示几个刻度
		YUnit:"",             //@param:string  y轴单位
		fontColor:"",         //@param:string  字体颜色
		graphColor:"",        //@param:string  图形颜色
		graphNoDataColor:"",   //@param:string  图形数据为0时的颜色
		lineWidth:"",         //@param:number  柱状图线条的宽度
		fontSize:"",          //@param:number  x，y轴文字大小  px
		xAxisHeight:"",       //@param:number  x轴文本高度
		yAxisWidth:"",        //@param:number  y轴文本宽度
		rightPadding:"",      //@param:number  右侧留白区域
		value:[               //@param:array   要显示的数据
			{"10-1":11},            //数据格式  key为x轴显示的文字，value为值
			{"10-2":22},
			{"10-3":33},
			{"10-4":44},
			{"10-5":33},
			{"10-4":44},
			{"10-5":33},
			{"10-4":44},
			{"10-5":33},
			{"10-4":44},
			{"10-5":33},
			{"10-4":44},
			{"10-5":33}
		]
	});


});
