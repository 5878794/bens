//文件上传
//h5 需要支持 formData和xmlHttpRequest2

let $$ = require('../event/$$');

let init = Symbol(),
	addEvent = Symbol(),
	eventFn = Symbol(),
	checkInput = Symbol(),
	showError = Symbol(),
	upload = Symbol();


class uploadFile{
	constructor(opt={}){
		this.inputId = opt.inputId;
		this.uploadKey = opt.uploadKey || 'file';
		this.uploadType = opt.uploadType || ['image/jpeg','image/png','image/gif'];
		this.submitBtnID = opt.submitBtnID || "";
		this.uploadSize = opt.uploadSize || 1024*1024*20000;
		this.uploadOtherParam = opt.uploadOtherParam || {};
		this.serverUrl = opt.serverUrl || "";
		this.success = opt.success || function(){};
		this.error = opt.error || function(){};
		this.progress = opt.progress || function(){};


		if(!this.inputId || !this.serverUrl){
			throw 'uploadFile 缺少必要参数,inputId或serverUrl';
		}

		this.inputObj = document.getElementById(this.inputId);

		if(this.submitBtnID){
			this.submitBtn = document.getElementById(this.submitBtnID);
		}


		this[init]();
	}

	[init](){
		this[addEvent]();
	}

	[addEvent](){
		let _this = this;

		//判断是否设置上传按钮
		if(this.submitBtn){
			//点击按钮上传
			$$(this.submitBtn).myclickok(function(){
				_this[checkInput]();
			});
		}else{
			//选择文件上传
			this.inputObj.addEventListener('change',this[eventFn]=function(){
				_this[checkInput]();
			},false)
		}
	}

	[checkInput](){
		let file = this.inputObj.files;

		//检查是否有文件
		if(file.length == 0 && this.submitBtn){
			this[showError]('上传文件为空!');
			return;
		}

		if(file.length == 0){
			return;
		}

		file = file[0];

		//检查文件大小
		let fileSize = file.size;
		if(fileSize > this.uploadSize){
			this[showError]('上传文件超出'+(this.uploadSize/1024/1024).toFixed(1)+'M');
			return;
		}

		//检查文件类型
		let fileType = file.type;
		if(this.uploadType.indexOf(fileType) == -1){
			this[showError]('上传文件类型错误');
			return;
		}

		this[upload](file);
	}

	[showError](text){
		this.error(text);
	}

	[upload](file){
		let _this = this;

		//创建form
		let form = new FormData();
		form.append(this.uploadKey,file);

		//插入其它需要上传的数据
		for(let [key,val] of Object.entries(this.uploadOtherParam)){
			form.append(key,val);
		}

		//创建xml
		let xhr = new XMLHttpRequest();
		xhr.open('post',this.serverUrl,true);
		xhr.onload = function(e){
			if (xhr.status == 200) {
				var rs = e.target.responseText;
				rs = JSON.parse(rs);
				_this.success(rs);
			} else {
				_this[showError](xhr.status);
			}
		};
		xhr.onprogress = function(a){
			console.log(a)
		};

		xhr.send(form);
	}

	destroy(){
		if(this.submitBtn){
			//点击按钮上传
			$$(this.submitBtn).unbind(true);
		}else{
			//选择文件上传
			this.inputObj.removeEventListener('change',this[eventFn],false);
		}
	}
}

module.exports = uploadFile;