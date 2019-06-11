

window.PeerConnection = window.PeerConnection ||
	window.webkitPeerConnection ||
	window.webkitRTCPeerConnection ||
	window.mozRTCPeerConnection;

var a,b;
var c= {"candidate":"candidate:569788076 1 udp 2113937151 172.16.21.22 57068 typ host generation 0 ufrag Q1o8 network-cost 50","sdpMid":"data","sdpMLineIndex":0},
	d ={"type":"offer","sdp":"v=0\r\no=- 3736955612030090438 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE data\r\na=msid-semantic: WMS\r\nm=application 9 DTLS/SCTP 5000\r\nc=IN IP4 0.0.0.0\r\na=ice-ufrag:Q1o8\r\na=ice-pwd:qyxdBE/BY+PrkztoIyLHJSE3\r\na=ice-options:trickle\r\na=fingerprint:sha-256 99:16:92:4B:7D:23:A6:E1:83:86:8F:AA:2E:F6:BB:E5:A5:99:07:41:27:2C:EA:D5:D3:7E:45:2A:4F:2D:E8:63\r\na=setup:actpass\r\na=mid:data\r\na=sctpmap:5000 webrtc-datachannel 1024\r\n"};


var coon = new PeerConnection();
// var channel = coon.createDataChannel('bens',{negotiated: true});
var init = async function(){


	//




	// channel.onopen = function(event) {
	// 	console.log('cancel open----')
	// 	channel.send('Hi you!');
	// };
	// channel.onclose = function(e){
	// 	console.log('cancel close===');
	// 	console.log(e)
	// };
	// channel.onmessage = function(event) {
	// 	console.log('cancel message in----')
	// 	console.log(event.data);
	// };





	coon.onicecandidate = function(e){
		console.log('确定候选人');
		if(e.candidate){
			a = JSON.stringify(e.candidate)
			console.log(e.candidate)
		}
	};

	coon.onnegotiationneeded = async function(e){
		console.log('需要协商-----创建offer');
		var offer = await coon.createOffer();
		b = JSON.stringify(offer);
		coon.setLocalDescription(offer);
	};

	coon.ondatachannel = function(e){
		console.log('open 通道')
		console.log(e);
	}



};


init();


// coon.setRemoteDescription(new RTCSessionDescription(d));
// coon.addIceCandidate(c);
//
// coon.createAnswer().then(function(ans){
// 	console.log("分配内容",ans);
// 	coon.setLocalDescription(ans);
// });


// channel.send('aasdfasdfasdfasdf');