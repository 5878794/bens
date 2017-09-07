
// let game = require("./lib/canvas/canvas"),
	// loadImg = require("./lib/fn/loadImg"),
	// canvasBtn = require("./lib/canvas/group/btn"),
let	winDiv = require("./lib/input/cascade"),
	$$ = require("./lib/event/$$");


$(document).ready(function(){
	init().then(()=>{}).catch((e)=>{console.log(e)});


});



async function init(){
	let body = $("body");
	$$(body).myclickok(function(){
		new winDiv({
			data:[                      //@param:array(必填)      select的数据
				{key:"1",val:"男"},
				{key:"2",val:"女"},
				{key:"3",val:"男"},
				{key:"4",val:"女"},
				{key:"5",val:"男"},
				{key:"6",val:"女"},
				{key:"7",val:"男"},
				{key:"8",val:"女"},
				{key:"9",val:"男"},
				{key:"10",val:"女"},
				{key:"11",val:"男"},
				{key:"12",val:"女"}
			],
			selected:["1"]
		});
			// .then(rs=>console.log(rs));
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


async function getResultAnimate(box,box1,box2) {

	box.y = 0;
	// s = v0·t + a·t²/2
	// 加速度a，时间t，初速度v0

	let nowSpeed = 700/500,
		t = new Date().getTime(),
		//计算总运行时间
		//平均速度 = (初始速度-结束速度)/2
		//运动时间 = 距离/平均速度
		totalTime = 7000*2/nowSpeed,
		//加速度 = (结束速度 - 初始速度) / 时间
		a = nowSpeed/totalTime,
		nowY = box.y,
		tempY = 0;


	box.myRender = function(){
		let t1 = new Date().getTime(),
			runTime = t1 - t,
			//当前位置 = 初始速度 * 当前运行时间 - 加速度*运行时间*运行时间/2
			y = nowSpeed*runTime - a*runTime*runTime/2;
		// console.log(y)
		// console.log(tempY)
		if(runTime>=totalTime){
			this.myRender = null;
			y = nowSpeed*totalTime - a*totalTime*totalTime/2;
			this.y = nowY - y;
			this.y = this.y%700;
			return;
		}

		tempY = y;
		this.y = nowY - y;
		this.y = this.y%700;
	};

	// box.animate({
	// 	time:300,
	// 	style:{
	// 		y:-700
	// 	},
	// 	infinite:true
	// })


	// box.animate({
	// 	time:1000,
	// 	style:{
	// 		y:-700
	// 	},
	// 	animateStyle:"Quad",
	// 	animateClass:"easeOut",
	// 	callback:function(){
	// 		this.y = 0;
	// 	}
	// });
	// box.animate({
	// 	time:2000,
	// 	style:{
	// 		y:-700
	// 	},
	// 	callback:function(){
	// 		this.y = 0;
	// 	}
	// });
	// box.animate({
	// 	time:2000,
	// 	style:{
	// 		y:-300
	// 	}
	// });





	// box1.animate({
	// 	time:1000,
	// 	style:{
	// 		y:-700
	// 	}
	// });
	// box2.animate({
	// 	time:1000,
	// 	style:{
	// 		y:-700
	// 	}
	// });

	// box1.animate({
	// 	time:2000,
	// 	style:{
	// 		y:-700
	// 	}
	// });
	// box2.animate({
	// 	time:2000,
	// 	style:{
	// 		y:-700
	// 	}
	// });

	// box1.animate({
	// 	time:2000,
	// 	style:{
	// 		y:-400
	// 	}
	// });
	// box2.animate({
	// 	time:2000,
	// 	style:{
	// 		y:-200
	// 	}
	// });
}