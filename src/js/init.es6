let video111 = require("./lib/media/audio");



$(document).ready(function(){
	bens = video111;
	let b = new bens({
		src:"m2.aiff",            //@param:str     播放的音频地址
		ready:function(){         //缓存准备好后播放
			console.log("ready")

		},
		error:function(filename){ //缓存失败回调
console.log(filename)
		}
	});

	bens = b;
	document.addEventListener("touchstart",()=>{
		b.play({
			loop:true,        //@param:bool
			delay:1,         //@param:number  延迟多久开始播放  单位：秒
			start:12,         //@param:number  播放从第几秒开始,设置循环时有bug，会从第1秒开始  单位：秒
			continued:12      //@param:number  播放多长时间     单位：秒
		})
	},false)

});
