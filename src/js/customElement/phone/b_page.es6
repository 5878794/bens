
// var doms = $('body').children();
// var body1 = $('<template></template>');
// $('head').append(body1);
// body1.append(doms);
//
// let page111 = $('<b-page></b-page>');
// $('body').append(page111);
//
// page111 = page111.get(0)
//
// var a = async function(){
// 	await page111.loadHtml('./login.html');
// 	await page111.loadCss('./css/login.css')
// 	await page111.loadJs('./js/dist/login.min.js')
// 	await page111.loadCss('./css/all.css')
// 	await page111.loadCss('./css/common.css')
//
// }
//
//
// a();







//polyfill 需要
require('@webcomponents/custom-elements');
require('@webcomponents/shadydom');

class bPage extends HTMLElement{

	//元素加入页面回调
	connectedCallback() {


	}

	//元素删除回调
	disconnectedCallback(){
		if(this.destroy){
			this.destroy();
		}
	}

	constructor(){
		super();

		//创建shadow容器
		this.shadow = this.attachShadow({mode: 'open'});



	}


	async loadHtml(src){
		this.shadow.innerHTML = await mFetch.getBodyHtml(src);
	}

	async loadJs(src){
		let jsSrc = await mFetch.catchFile(src);
		let script = document.createElement('script');
		script.src = jsSrc;
		this.shadow.appendChild(script);


	}

	async loadCss(src){
		let cssFile = await mFetch.catchFile(src);
		let style = document.createElement('link');
		style.href = cssFile;
		style.type = 'text/css';
		style.rel = 'stylesheet';
		this.shadow.appendChild(style);
	}


	page(str){
		let dom = this.shadow.querySelectorAll(str);
		return $(dom);
	}
}


customElements.define('b-page', bPage );

