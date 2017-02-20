let key = {
	37:"left",          //左  小键盘
	38:"up",            //上
	39:"right",         //右
	40:"down",          //下
	87:"up",            //w
	65:"left",          //a
	83:"down",          //s
	68:"right",         //d
	32:"fire"           //空格
};


let click = new Map(),
	canUse = false;



document.addEventListener("keydown",function(e){
	var code = e.keyCode,
		now_key = key[code];

	if(now_key && canUse){
		click.set(now_key,true)
	}
},false);
document.addEventListener("keyup",function(e){
	var code = e.keyCode,
		now_key = key[code];
	if(now_key && canUse){
		click.set(now_key,false);
	}
},false);




module.exports = {
	click:click,
	addEventListener(){
		canUse = true;
		click.clear();
	},
	removeEventListener(){
		canUse = false;
		click.clear();
	}
};

