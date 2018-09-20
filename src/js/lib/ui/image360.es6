//360度全景图
// 需要自己加载THREE.js
// THREE.WebGLRenderer 96


let createWorld = Symbol(),
	createSphere = Symbol(),
	addEvent = Symbol(),
	touchStart = Symbol(),
	touchStartFn = Symbol(),
	touchMove = Symbol(),
	touchMoveFn = Symbol(),
	touchEnd = Symbol(),
	touchEndFn = Symbol(),
	run = Symbol(),
	getRadian = Symbol(),
	setParam = Symbol();

let device = require('../device');

class image360{
	constructor(opt){
		//图片地址
		this.image = opt.image;
		//容器
		this.body = opt.body || document.body;
		this.bodyWidth = parseInt($(this.body).width());
		this.bodyHeight = parseInt($(this.body).height());

		//球体半径
		this.r = (this.bodyWidth > this.bodyHeight)? this.bodyWidth : this.bodyHeight;
		//加载器
		this.loader = null;
		//场景
		this.scene = null;
		//相机
		this.camera = null;
		//渲染器
		this.renderer = null;
		//球体对象
		this.sphere = null;

		this.radianX = 0;
		this.radianY = 0;
		this.isTouch = false;
		this.point = [];


		//创建世界
		this[createWorld]();
		//参数设置
		this[setParam]();
		//创建球体
		this[createSphere]();
		//添加事件监听
		this[addEvent]();

		this[run]();
	}

	//创建世界
	[createWorld](){
		//创建场景
		this.scene = new THREE.Scene();
		//创建相机
		this.camera = new THREE.PerspectiveCamera( 90, this.bodyWidth/this.bodyHeight, 1, 1000 );
		//创建渲染器
		this.renderer = new THREE.WebGLRenderer();

		this.body.appendChild( this.renderer.domElement );
	}

	//创建球体
	[createSphere](){
		var geometry = new THREE.SphereGeometry( this.r, 120, 40 );
		geometry.scale( - 1, 1, 1 );
		var jpg = new THREE.MeshBasicMaterial({
			color:0x000000
		});
		var mesh = new THREE.Mesh( geometry, jpg );

		new THREE.TextureLoader().load(this.image, function (texture) {
			// texture.image.width = 400;
			// texture.image.height = 300;
			mesh.material = new THREE.MeshBasicMaterial({
				map: texture
			});
		});

		this.sphere = mesh;
		this.scene.add(mesh);
	}

	//参数设置
	[setParam](){
		this.renderer.setSize( this.bodyWidth, this.bodyHeight );
		this.renderer.setPixelRatio( window.devicePixelRatio );
		this.renderer.setClearColor( 0x000000, 1 );

		// this.renderer.domElement.width = $(this.body).width();
		// this.renderer.domElement.height = $(this.body).height();
		// $(this.renderer.domElement).css({
		// 	width:$(this.body).width()+'px',
		// 	height:$(this.body).height()+'px'
		// })
	}

	//运行
	[run](){
		var _this = this;
		var animate = function () {
			requestAnimationFrame( animate );

			_this.renderer.render( _this.scene, _this.camera );
		};
		animate();
	}

	//添加事件监听
	[addEvent](){
		// new THREE.OrbitControls(this.camera)
		let _this = this;

		this.body.addEventListener(device.START_EV,this[touchStartFn] = function(e){
			_this[touchStart](e);
		},false);
		this.body.addEventListener(device.MOVE_EV,this[touchMoveFn] = function(e){
			_this[touchMove](e);
		},false);
		this.body.addEventListener(device.END_EV,this[touchEndFn] = function(e){
			_this[touchEnd](e);
		},false);
	}

	[touchStart](e){
		this.isTouch = true;
		this.point = [];
		let point = (e.touches)? e.touches[0] : e;
		if(point){
			this.point.push({
				x:point.clientX,
				y:point.clientY
			})
		}
	}
	[touchMove](e) {
		if (!this.isTouch) { return; }
		let point = (e.touches) ? e.touches[0] : e;
		if(point){
			this.point.push({
				x:point.clientX,
				y:point.clientY
			});
			this[getRadian](point.clientX, point.clientY);
		}


	}
	[touchEnd](e){
		if (!this.isTouch) { return; }
		this.isTouch = false;
		let point = this.point[this.point.length-1];
		console.log(point)
		let {radianX, radianY} = this[getRadian](point.x, point.y);
		this.radianX += radianX;
		this.radianY += radianY;
	}

	//计算弧度并旋转
	[getRadian](x,y){
		// console.log(x,y)
		// Math.asin(_mx/r)
		let startPoint = this.point[0],
			s_x = startPoint.x,
			s_y = startPoint.y,
			m_x = x - s_x,
			m_y = y - s_y;

		m_x = (m_x > this.r)? this.r : m_x;
		m_x = (m_x < -this.r)? -this.r : m_x;
		m_y = (m_y > this.r)? this.r : m_y;
		m_y = (m_y < -this.r)? -this.r : m_y;

		let radianX = Math.asin(m_x/this.r),
			radianY = Math.asin(m_y/this.r);

		// console.log(radianX,radianY);
		this.sphere.rotation.x = this.radianY+radianY;
		this.sphere.rotation.y = this.radianX+radianX;

		return {radianX, radianY};
	}
}


module.exports = image360;