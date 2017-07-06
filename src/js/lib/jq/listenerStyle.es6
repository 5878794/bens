
//dom对象的css监听


// 首先需要执行监听器
//  $("#aaa").listenerStyle(
//          ["width","height"],             //需要监听的属性
//          function(){                     //属性变动时执行的回调
//              console.log(this);          //this为该dom对象
//          }
// )


//更改属性需要特定的方法,因此更改了css的赋值函数
// $("#aaa").CSS({                          //必须使用此方法才能触发回调
// 	width:"200px"
// });




$.fn.listenerStyle = function(array,callback){
	let data = $(this).data("__listener_style__") || {},
		_this = $(this).get(0);

	array.map(param=>{
		let _param = "_"+param;
		data[param] = true;
		Object.defineProperty(_this.style,_param,{
			set(){
				callback.call(_this);
			}
		})
	});

	$(this).data({"__listener_style__":data});
};

$.fn.CSS = function(obj){
	let data = $(this).data("__listener_style__") || {},
		_this = $(this).get(0);

	for(let key of Object.keys(data)){
		if(obj.hasOwnProperty(key)){
			_this.style["_"+key] = 123;
			break;
		}
	}

	$(this).css(obj);
};








module.exports = null;