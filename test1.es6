

window.PeerConnection = window.PeerConnection ||
	window.webkitPeerConnection ||
	window.webkitRTCPeerConnection ||
	window.mozRTCPeerConnection;


var coon = new PeerConnection();





var a,b;
var init = async function(){
	var coon = new PeerConnection();
	// var channel = coon.createDataChanne/**/l('bens',{negotiated: true});

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
		console.log(e);

	};

	coon.onnegotiationneeded = async function(e){
		console.log(e);
		var offer = await coon.createOffer();
		b = JSON.stringify(offer);
		coon.setLocalDescription(offer);
	};



	var channel = coon.createDataChannel('bens',{negotiated: true});



};


init();