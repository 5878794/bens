//blackAndWhite 图片转黑白
//原理:
//先转  gray = (r+g+b)/3
//取0-255的中间值127来比较   大于转255  下于等于转0


module.exports = function(opt){
	let newImage = new ImageData(this.width,this.height),
		newWidth  = newImage.width,
		// newHeight = newImage.height,
		oldRgbaData = this.rgbaData;
	// oldWidth = this.width,
	// oldHeight = this.height;

	//传入点新点图像点坐标点，通过原来点图像点计算新增
	let fn = function(x,y){
		let n = (y*newWidth+x)*4,
			all = (oldRgbaData[n]+oldRgbaData[n+1]+oldRgbaData[n+2])/3,
			nowVal = (all>127)? 255 : 0;

		return {
			r:nowVal,
			g:nowVal,
			b:nowVal,
			a:255
		}
	};




	return {
		filterFn:fn,
		newImage:newImage
	};
};