//sharpen 锐化

//原理:
//图像中的像素点  =  自身  + （自身 - 周围8个点的平均值）*锐化度
//                                                锐化度一般取0.3


//number：  锐化度


module.exports = function(number){
	let newImage = new ImageData(this.width,this.height),
		newWidth  = newImage.width,
		newHeight = newImage.height,
		oldRgbaData = this.rgbaData,
		oldWidth = this.width,
		oldHeight = this.height;

	let getVal = function(p00,p10,p20,p01,p11,p21,p02,p12,p22){
		let r = oldRgbaData[p11] +
					(oldRgbaData[p11] -
						(   oldRgbaData[p00] +
							oldRgbaData[p10] +
							oldRgbaData[p20] +
							oldRgbaData[p01] +
							oldRgbaData[p21] +
							oldRgbaData[p02] +
							oldRgbaData[p12] +
							oldRgbaData[p22]
						)/8
					)*number;
		let g = oldRgbaData[p11+1] +
					(oldRgbaData[p11+1] -
						(   oldRgbaData[p00+1] +
							oldRgbaData[p10+1] +
							oldRgbaData[p20+1] +
							oldRgbaData[p01+1] +
							oldRgbaData[p21+1] +
							oldRgbaData[p02+1] +
							oldRgbaData[p12+1] +
							oldRgbaData[p22+1]
						)/8
					)*number;
		let b = oldRgbaData[p11+2] +
					(oldRgbaData[p11+2] -
						(   oldRgbaData[p00+2] +
							oldRgbaData[p10+2] +
							oldRgbaData[p20+2] +
							oldRgbaData[p01+2] +
							oldRgbaData[p21+2] +
							oldRgbaData[p02+2] +
							oldRgbaData[p12+2] +
							oldRgbaData[p22+2]
						)/8
					)*number;
		let a = oldRgbaData[p11+3];

		return {r,g,b,a};
	};


	//传入点新点图像点坐标点，通过原来点图像点计算新增
	let fn = function(x,y){
		//获取周边9个点
		let x0 = x-1,
			x1 = x,
			x2 = x+1,
			y0 = y-1,
			y1 = y,
			y2 = y+1;

		x0 = (x0<0)? 0 : x0;
		x2 = (x2>oldWidth)? oldWidth : x2;
		y0 = (y0<0)? 0 : y0;
		y2 = (y2>oldHeight)? oldHeight : y2;

		let p00 = (y0*oldWidth+x0)*4,
			p10 = (y0*oldWidth+x1)*4,
			p20 = (y0*oldWidth+x2)*4,
			p01 = (y1*oldWidth+x0)*4,
			p11 = (y1*oldWidth+x1)*4,
			p21 = (y1*oldWidth+x2)*4,
			p02 = (y2*oldWidth+x0)*4,
			p12 = (y2*oldWidth+x1)*4,
			p22 = (y2*oldWidth+x2)*4;

		let rgba = getVal(p00,p10,p20,p01,p11,p21,p02,p12,p22);

		return {
			r:rgba.r,
			g:rgba.g,
			b:rgba.b,
			a:rgba.a
		}
	};




	return {
		filterFn:fn,
		newImage:newImage
	};
};