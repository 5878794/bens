let video111 = require("./lib/ui/video");



$(document).ready(function(){
	// bens = video;
	// video({
	// 	dom:$("#video"),     //要插入的dom
	// 	videoSrc:"fll.mp4",  //视频地址
	// 	autoPlay:false,    //自动播放
	// 	loop:true,       //循环播放
	// 	muted:false,     //是否静音
	// 	isCordova:false   //是否是在cordova中使用
	// });

	var video = $("video").get(0);
	video111(video);
	// setTimeout(()=>{
	// 	$("video").get(0).play();
	// },1000)
	video.addEventListener('touchstart', function () {
		video.play();
	});

});
