
// let game = require("./lib/canvas/canvas"),
	// loadImg = require("./lib/fn/loadImg"),
	// canvasBtn = require("./lib/canvas/group/btn"),
let	winDiv = require("./lib/input/cascade"),
	$$ = require("./lib/event/$$"),
	select = require("./lib/input/select"),
	areaData = require("./lib/code/areaCode");


$(document).ready(function(){
	init().then(()=>{}).catch((e)=>{console.log(e)});


});



async function init(){
	let body = $("body");
	$$(body).myclickok(function(){
		new winDiv({
			areaData:areaData,
			areaSelected:[2498,2499],
			startParentId:1,
			success:function(rs){
				console.log(rs);
			}
		});

		// new select({
		// 	titleText: "请选中性别",       //@param:str             标题  默认：请选择
		// 	data: [                      //@param:array(必填)      select的数据
		// 		{key: "1", val: "男"},
		// 		{key: "2", val: "女"}
		// 	],
		// 	selected: [1],             //@param:array(必填)    选中的key
		// 	radio: false,                  //@param:boolean          单选还是多选   默认true
		// 	viewPort: 750,                //@param:number 设置psd的大小，布局需要使用rem 默认：750
		// 	success: function (rs) {
		// 		//返回选择的对象
		// 		//json数组，  传入的格式
		// 		console.log(rs)
		// 	},
		// 	error: function () {
		// 		//取消选择
		// 	}
		// })


	}).myclickup(function(){}).myclickdown(function(){});






	// let imgs = await loadImg([
	// 					{key:"icon1",val:"./image/0.png"},
	// 					{key:"icon2",val:"./image/1.png"},
	// 					{key:"icon3",val:"./image/2.png"},
	// 					{key:"icon4",val:"./image/3.png"},
	// 					{key:"icon5",val:"./image/4.png"},
	// 					{key:"icon6",val:"./image/5.png"},
	// 					{key:"icon7",val:"./image/6.png"}
	// 				 ])
	// 				 .then(function(rs){
	// 				 	 let newRes = {};
	// 					 rs.map(function(obj){
	// 						 newRes[obj.key] = obj.val;
	// 					 });
	// 					 return newRes;
	// 				 }).catch(function(e){
	// 				 	console.log(e)
	// 	});
	// var app = new game.app({
	// 		body:$("#test")
	// 	}),
	// 	scene = new game.scene(),
	// 	layer = new game.layer();
	//
	// var box = new game.group({
	// 	x:30,y:0,width:100,height:700
	// });
	//
	//
	// var height = 100;
	// for(var i=0,l=14;i<l;i++){
	// 	var n = i%7+1;
	// 	var image = new game.sprite({
	// 		x:0,y:i*height,width:100,height:height,
	// 		res:imgs["icon"+n]
	// 	});
	// 	box.append("img"+i,image);
	// }
	// var box1 = new game.group({
	// 	x:130,y:0,width:100,height:700
	// });
	// for(var ii=0,il=14;ii<il;ii++){
	// 	var ni = ii%7+1;
	// 	var image1 = new game.sprite({
	// 		x:0,y:ii*height,width:100,height:height,
	// 		res:imgs["icon"+ni]
	// 	});
	// 	box1.append("img"+ii,image1);
	// }
	//
	// var box2 = new game.group({
	// 	x:230,y:0,width:100,height:700
	// });
	// for(var z=0,zl=14;z<zl;z++){
	// 	var zn = z%7+1;
	// 	var image2 = new game.sprite({
	// 		x:0,y:z*height,width:100,height:height,
	// 		res:imgs["icon"+zn]
	// 	});
	// 	box2.append("img"+z,image2);
	// }
	//
	//
	//
	// box.myclickok(function(){
	// 	this.animate({
	// 		time:300,
	// 		style:{
	// 			y:-700
	// 		},
	// 		infinite:true
	// 	})
	// 	// box1.animate({
	// 	// 	time:500,
	// 	// 	style:{
	// 	// 		y:-700
	// 	// 	},
	// 	// 	infinite:true
	// 	// })
	// 	// box2.animate({
	// 	// 	time:700,
	// 	// 	style:{
	// 	// 		y:-700
	// 	// 	},
	// 	// 	infinite:true
	// 	// })
	// });
	// var obj = $("#btn");
	// $$(obj).myclickdown(function(){
	// 	// let temp = 0,
	// 	// 	oldY = null;
	// 	// box.renderFn = function(){
	// 	// 	temp++;
	// 	// 	if(oldY == this.y){
	// 	//
	// 	// 		return;
	// 	// 	}
	// 	// 	oldY = this.y;
	// 	// 	this.y -= temp;
	// 	// };
	//
	// 	box.animateStop();
	// 	box1.animateStop();
	// 	box2.animateStop();
	// 	box.clearAnimateList();
	// 	box1.clearAnimateList();
	// 	box2.clearAnimateList();
	//
	// 	getResultAnimate(box,box1,box2);
	//
	// });
	//
	// // box = new game.sprite({
	// // 	x:0,y:height,width:100,height:height,
	// // 	res:imgs["icon"+1]
	// // });
	// layer.append(box);
	// scene.append(layer);
	// app.append(scene);
	//
	// scene.addEvent();
	//
	// app.run();
	// app.showFrame();
	//
	// window.box = box;
}


