let game = require("./lib/game/game"),
	loadImg = require("./lib/fn/loadImg");





$(document).ready(function(){
	init();







});



async function init(){
	let imgs = await loadImg([{key:"icon",val:"./0.png"}])
					 .then(function(rs){
					 	 let newRes = {};
						 rs.map(function(obj){
							 newRes[obj.key] = obj.val;
						 });
						 return newRes;
					 });

	var app = new game.app({body:$("#test")}),
		scene = new game.scene(),
		layer = new game.layer(),
		sprite = new game.sprite({
			width:"100",
			height:"100",
			res:imgs.icon
		});

	layer.append(sprite);
	scene.append(layer);
	app.append(scene);



	app.run();

}