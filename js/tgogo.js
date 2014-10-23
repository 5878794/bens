/*
 * Filename : 
 * =====================================
 * Created with WebStorm.
 * User: bens
 * Date: 14-9-2
 * Time: 上午10:09
 * Email:5878794@qq.com
 * =====================================
 * Desc:  依赖　　jq.js    device.js
 * TODO
 * tab切换 表单提交  表单验证
 */



//*****************************************************
//banner动画
//*****************************************************
//说明：
//class:　__TGOGO__　              @必须写死
//data-type: bannerScroll         @必须写死
//data-changeTime:5000            (可选)＠动画间隔时间　　　默认5000
//data-animateTime:1000           (可选)@动画执行时间　　　默认1000
//
//内部必须由ａ标签包裹img,color写到ａ标签上可添加图片背景色
//----------------------------------------------------
//
//
//eg:
//
//<div class="__TGOGO__" data-type="bannerScroll" data-direction="y" data-changeTime="5000" data-animateTime="1000">
//    <a color="#eee" href="1.html"><img src="" /></a>
//    <a color="#333" href="1.html"><img src="" /></a>
//    <a color="#666" href="1.html"><img src="" /></a>
//    <a color="#777" href="1.html"><img src="" /></a>
//</div>





//*****************************************************
//滚动加载
//*****************************************************
//说明：
//class:　__TGOGO__　                @必须写死
//data-type: scrollLoad             @必须写死
//data-bind_fn：str                  @param:str  执行绑定的函数名。放到window对象下
//data-button_length：100            @param:str  触发滚动加载的距离
//data-scroll_for_key："ID"          @oaram:str  滚动加载时依赖的表示key
//data-search_data："pageSize:10,productId:1"  @param:str  ajax请求时需要的其它参数  按eg中的方式写
//data-ajax_url:"http://www.baidu.com"  @param:str  ajax请求地址
//
//eg：
//
//<div class="__TGOGO__ scroll_load"
//data-type="scrollLoad"
//data-bind_fn="bindData"
//data-button_length = "100"
//data-scroll_for_key = "ID"
//data-search_data = "pageSize:10,productId:1"
//data-ajax_url = "http://172.18.252.40:8021/StoreShare/CountDownComment"
//>
//a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>
//a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>
//a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>
//</div>




//*****************************************************
//跑马灯
//*****************************************************
//说明：
//class:　__TGOGO__　                @必须写死
//data-type: marquee                 @必须写死
//data-direction:"x"                @param:str  x/y  横向或纵向移动
//data-spd："30"                     @param:str  移动速度  约低越慢
//
//eg: div内必须为span元素包裹，且不能在包裹span元素
//
//<div class="__TGOGO__ marquee" data-type="marquee" data-direction="x" data-spd="30">
//    <span>忽而今夏 刮中 100积分</span>
//    <span>司医生的小助理 刮中 100积分</span>
//    <span>*****163.com 刮中 30碎片</span>
//    <span>糹莫。Moo 刮中 100积分</span>
//    <span>糹莫。Moo 刮中 100积分</span>
//    <span>蓝歆11 刮中 30碎片</span>
//    <span>54ruyan 刮中 100积分</span>
//    <span>123 刮中 30碎片</span>
//    <span>*****278896 刮中 100积分</span>
//    <span>兔斯基tutu 刮中 30碎片</span>
//</div>




//*****************************************************
//商品详情内图片自适应
//*****************************************************
//说明：
//class:　__TGOGO__　                       @必须写死
//data-type: imgAutoResize                 @必须写死
//
//eg:
//
//<div class="__TGOGO__ img_div" data-type="imgAutoResize">
//    <img src="http://172.18.254.158:8021/image/game/pc/card/top-banner_02.jpg" />
//</div>




//*****************************************************
//图片上传按钮 后端程序需要集成进来
//*****************************************************
//说明：
//class:　__TGOGO__　                       @必须写死
//data-type: uploadImage                   @必须写死
//data-server_url ="/test/api/product/UploadPictureByIframe"    @上传图片接口
//data-show_picture_id="show_image_wrap"                        @显示上传图片div区
//data-can_uplad_type="jpg,jpeg,png"                            @上传文件类型
//data-can_upload_number = "5"                                  @上传最大数
//data-show_picture_width = "100"                               @上传后显示图片大小
//data-show_picture_height = "60"
//data-hide_input_name = "upload_files"                         @存放取值的type=hidden的input的 name
//                                                              @初始显示在上传区的图片，没有留空
//data-has_pictures = "TempUpload/20140912/185dca975350458780d72b45d3cd79d9_72_72.png,TempUpload/20140912/c7e36a67f3054c579e4682d1ce14ad2e_215_215.png"
//data-show_picture_url = "http://172.18.252.118:8023/"         @显示图片的服务器前缀
//fn_name = "实例化的名称"  @自动生成，取这个属性可取到函数名
//
//eg:
//
//<div class="__TGOGO__ uploadfile"
//data-type="uploadImage"
//data-server_url ="/test/api/product/UploadPictureByIframe"
//data-show_picture_id="show_image_wrap"
//data-can_uplad_type="jpg,jpeg,png"
//data-can_upload_number = "5"
//data-show_picture_width = "100"
//data-show_picture_height = "60"
//data-hide_input_name = "upload_files"
//data-has_pictures = "aaa.jpg,bbb.jpg"
//data-show_picture_url = "http://172.18.252.118:8023/">
//上传图片
//</div>
//
//<div class="show_image_wrap" id="show_image_wrap"></div>






//*****************************************************
//弹出居中层
//*****************************************************
//注意：弹出层内的事件先自己绑定，弹出层关闭后在打开会保持关闭前的样子，要变动在关闭后的事件内执行
//说明：
//class:　__TGOGO__　                       @必须写死
//data-type: showCenterDiv                 @必须写死
//data-center_div_id="center_div1"          @要弹出的div的id
//data-show_event="click"                   @触发弹出层的事件名
//data-z_index="100"                        @弹出层的z-index 层级
//data-before_show_run = "before_show"      @弹出层打开前执行函数名
//data-after_close_run = "after_close"      @弹出层关闭后执行函数名
//fn_name = ""  "实例化的名称"  @自动生成，取这个属性可取到函数名
//
//eg:
//
//<div class="__TGOGO__ div2"
//data-type="showCenterDiv"
//data-center_div_id="center_div1"
//data-show_event="click"
//data-z_index="100"
//data-before_show_run = "before_show"
//data-after_close_run = "after_close"
//>
//显示居中弹出层
//</div>





//*****************************************************
//图片自适应div大小  一个div内一个图片的情况
//*****************************************************
//说明：
//class:　__TGOGO__　                       @必须写死
//data-type: imgFixedDiv                   @必须写死
//
//eg:
//
//<div class="__TGOGO__" data-type="imgFixedDiv" style="width:100px; height: 200px; background: teal">
//    <img src="http://e.hiphotos.baidu.com/image/w%3D310/sign=a0b6e89c59b5c9ea62f305e2e538b622/b90e7bec54e736d1bb03529f99504fc2d5626911.jpg" />
//</div>



//*****************************************************
//富文本编辑器
//需要挂载
//<link rel="stylesheet" href="js/plus/doc_edit/themes/default/default.css" />
//<script charset="utf-8" src="js/plus/doc_edit/kindeditor-min.js"></script>
//<script charset="utf-8" src="js/plus/doc_edit/lang/zh_CN.js"></script>
//*****************************************************
//说明：
//class:　__TGOGO__　                       @必须写死
//data-type: editDiv                       @必须写死
//data-val="123"                            @初始值
//data-level = "2"                          @功能等级  1：精简的   2：比较全
//data-fn_name="abceee"                     @实例化类名，取值用  window["abceee"].html()
//
//eg:
//
//<textarea
//class="__TGOGO__"
//data-type="editDiv"
//data-val="123"
//data-fn_name="abceee"
//style="width: 600px;height: 300px;">
//
//</textarea>




//*****************************************************
//时间选择控件
//需要挂载
//<link rel="stylesheet" href="js/plus/datepicker/jquery-ui-1.10.4.custom.min.css" />
//<script src="js/plus/datepicker/jquery-ui-1.10.4.custom.min.js" type="text/javascript"></script>
//*****************************************************
//说明：
//class:　__TGOGO__　                        @必须写死
//data-type: dataInput                      @必须写死
//data-min_year = "1994"                    @显示的最小年份
//data-max_year = "2009"                    @显示的最大年份   不填默认是到当前年
//
//eg:
//
//<input type="text" class="__TGOGO__"
//data-type = "dataInput"
//data-min_year = "1994"
//data-max_year = "2009"
///>








//*****************************************************
//数据提交及检查
//*****************************************************
//数据提交  说明：
//class:　__TGOGO__　                        @必须写死
//data-type: "ajaxSubmit"                      @必须写死
//data-ajax_src="/"                            @数据提交地址
//data-ajax_type="post"                         @数据提交方式
//data-ajax_timeout="60000"                     @ajax超时时间
//data-ajax_success_fn = "test_ajax"            @ajax成功执行函数名（需要放到window对象下）
//data-ajax_error_fn = "test_ajax_err"          @ajax失败执行函数名（需要放到window对象下）
//data-check_error_fn = "test_check_err"        @表单检查失败执行函数名（需要放到window对象下）
//data-check_before_fn = "test_check_before"    @ajax提交前执行函数名（需要放到window对象下）


//表单检查   说明:
//需要放到表单提交html内
//data-err_msg=""                               @数据验证失败提示文字
//name=""                                       @数据提交时的key
//data-rule="username,must,max:10,min:1"        @数据验证规则 （,隔开）
//      rule有： 见  TGOGO.__rule_list_fn  对象, 外加：must,min:10,max:10,规则前3个字母不能是min或max


//eg:
//<div class="__TGOGO__"
//data-type="ajaxSubmit"
//data-ajax_src="/"
//data-ajax_type="post"
//data-ajax_timeout="60000"
//data-ajax_success_fn = "test_ajax"
//data-ajax_error_fn = "test_ajax_err"
//data-check_error_fn = "test_check_err"
//data-check_before_fn = "test_check_before"
//>
//    <input type="text" data-rule="username,must,max:10,min:1" data-err_msg="请输入6位用户名" name="aa" /></br>
//<select name="bb" data-rule="must" data-err_msg = "请选择">
//    <option value="">请选择</option>
//    <option value="1">a</option>
//<option value="2">b</option>
//<option value="3">c</option>
//</select></br>
//<textarea name="cc" data-rule="must">123</textarea></br>
//<input type="checkbox" data-rule="must" name="dd" value="123"/>123</br>
//<input type="radio" name="ee" value="222" />222</br>
//<input type="radio" name="ee" value="333" />333</br>
//<input type="submit" value="submit" />
//</div>






//*****************************************************
//鼠标悬停显示右浮动层  处理顶部和底部自适应
//*****************************************************
//说明：
//class:　__TGOGO__　                        　@必须写死
//data-type: "showFloatDiv"                   @必须写死
//data-show_div_id="aabb"                     @要显示的ｄｉｖ的ｉｄ

















$(document).ready(function(){
    TGOGO.run($("body"));
});






var TGOGO = {};
TGOGO.settings = {
    //要加载的图片地址前缀  想对于html地址
    resourceSrc:"image/",
    ajaxTimeOut:60000,
    //调用的外部显示loading函数
    loadShow: function(){
        TGOGO.loading.show();
    },
    //调用的外部关闭loading函数
    loadHide: function(){
        TGOGO.loading.hide();
    },
    alert:function(msg){
        alert(msg)
    }
};



//监听的class
TGOGO.className = "__TGOGO__";
TGOGO.run = function(obj){
    var _this = this;
    obj.find("."+_this.className).each(function(){
        var this_obj = $(this),
            type = this_obj.data("type");

        if(!this.__isRun__){
            this.__isRun__ = true;
            if(type && _this.hasOwnProperty(type)){
                _this[type](this_obj);
            }
        }
    });
};



//*****************************************************
//banner动画
//*****************************************************
TGOGO.banner_scroll_fn = (function () {
    var device = DEVICE;
    var scrollBanner = function (data) {
        this.win = data.win;            //包裹层
        this.body = data.body;          //移动层
        this.imgLength = this.body.find("a").length;
        this.direction = data.direction || "x"; //移动方向  x/y
        this.time = data.time || 5000;      //动画间隔时间
        this.animateTime = data.animateTime || 1000;    //动画时间
        this.pointBg = "#ccc";
        this.pointSelectBg = "#f00";

        this.winWidth = null;
        this.winHeight = null;

        this.page = 0;
        this.maxPage = this.imgLength - 1;

        this.intervalFn = null;
        this.points = [];

        this.touchStartTime = 0;
        this.touchPoints = [];
        this.leftPx = 0;

        this.init();
    };
    scrollBanner.prototype = {
        init: function () {
            this.styleSet();
            this.addPoint();
            this.setDiv();
            this.addEvent();


        },
        //设置样式
        styleSet: function () {
            this.win.css({
                position: "relative",
                overflow: "hidden"
            });

            this.body.css({
                position: "absolute",
                left: 0,
                top: 0
            });

            this.body.find("a").css({
                display: "block",
                width: this.winWidth + "px",
                height: this.winHeight + "px",
                border: "none",
                overflow: "hidden",
                "position": "relative"
            });

            if (this.direction == "x") {
                this.body.find("a").css({
                    float: "left",
                    display: "block"
                })
            }

            this.body.find("a").each(function () {
                var img = $(this).find("img"),
                    img_src = img.attr("src"),
                    color = $(this).attr("color") || "transparent";

                img.remove();
                $(this).css({
                    "background-image": "url('" + img_src + "')",
                    "background-repeat": "no-repeat",
                    "background-position": "center center",
                    "background-color": color
                });

            });


        },
        //添加指示的点点
        addPoint: function () {
            var _this = this;

            var div = $("<div></div>"),
                width = _this.imgLength * 20;
            div.css({
                width: width + "px",
                height: "10px",
                position: "absolute",
                bottom: "10px",
                left: "50%",
                "margin-left": -width / 2 + "px"
            });


            var span = $("<div></div>");
            span.css({
                width: "10px",
                height: "10px",
                margin: "0 5px",
                background: this.pointBg,
                "border-radius": "5px",
                float: "left"
            });

            for (var i = 0, l = this.imgLength; i < l; i++) {
                var this_item = span.clone().attr({ n: i });
                if (i == 0) {
                    this_item.css({ background: this.pointSelectBg })
                }
                div.append(this_item);
            }
            this.points = div.find("div");


            this.win.append(div)
        },
        //设置窗口参数等
        setDiv: function () {

            this.body.stop(true, true);

            this.winWidth = parseInt(this.win.width());
            this.winHeight = parseInt(this.win.height());

            var width = (this.direction == "x") ? this.winWidth * this.imgLength : this.winWidth,
                height = (this.direction == "x") ? this.winHeight : this.winHeight * this.imgLength;


            this.body.css({
                width: width + "px",
                height: height + "px"
            });
            this.body.find("a").css({
                width: this.winWidth + "px",
                height: this.winHeight + "px"
            })



        },
        //添加事件
        addEvent: function () {
            var _this = this;
            $(window).resize(function () {
                _this.setDiv();
            });

            var temp_fn = function () {
                if (_this.imgLength <= 1) {
                    return;
                }
                _this.intervalFn = setInterval(function () {
                    _this.page++;
                    _this.animate();
                }, _this.time);
                _this.animate();
            };



            if (!device.hasTouch) {
                this.win.hover(function () {
                    _this.body.stop(true);
                    clearInterval(_this.intervalFn);
                    _this.intervalFn = null;
                }, function () {
                    if (!_this.intervalFn) {
                        temp_fn();
                    }
                });


                this.points.mouseover(function () {
                    _this.page = $(this).attr("n");
                    _this.animate();
                });



                temp_fn();
            } else {
                var win_obj = this.win.get(0);
                win_obj.addEventListener(device.START_EV, _this.startEventFn = function (e) {

                    _this.body.stop(true);
                    clearInterval(_this.intervalFn);
                    _this.leftPx = parseInt(_this.body.css("left"));
                    _this.intervalFn = null;
                    _this.startEvent(e);
                }, false);
                win_obj.addEventListener(device.MOVE_EV, _this.moveEventFn = function (e) {
                    _this.savePoint(e);

                    var lastpoint = _this.touchPoints[_this.touchPoints.length - 1];
                    var lastpointx = lastpoint.x;
                    var lastpointy = lastpoint.y;

                    var startpoint = _this.touchPoints[0];
                    var startpointx = startpoint.x;
                    var startpointy = startpoint.y;

                    var pointsx = lastpointx - startpointx;
                    var pointsy = lastpointy - startpointy;

                    if (Math.abs(pointsx) > Math.abs(pointsy)) {
                        e.preventDefault();
                        _this.moveEvent(e, pointsx);
                    }

                }, false);
                win_obj.addEventListener(device.END_EV, _this.endEventFn = function (e) {
                    _this.endEvent(e);
                    if (!_this.intervalFn) {
                        temp_fn();
                    }
                }, false);
                temp_fn();
            }


        },
        //动画
        animate: function () {
            this.page = (this.page > this.maxPage) ? 0 : this.page;

            this.points.css({ background: this.pointBg });
            this.points.eq(this.page).css({ background: this.pointSelectBg });

            this.body.stop(true);
            if (this.direction == "x") {
                this.body.animate({
                    left: -this.page * this.winWidth + "px"
                }, this.animateTime)
            } else {
                this.body.animate({
                    top: -this.page * this.winHeight + "px"
                }, this.animateTime / 2)
            }
        },
        startEvent: function (e) {
            this.touchPoints = [];
            this.touchStartTime = new Date().getTime();
            this.savePoint(e);
        },
        moveEvent: function (e, pointsx) {
            if (this.touchStartTime == 0) { return; }

            var t_left = this.leftPx + pointsx;
            this.body.css({
                left: t_left + "px"
            });
        },
        endEvent: function () {
            if (this.touchStartTime == 0) { this.scrollBack(); return; }
            if (this.touchPoints.length < 2) { this.scrollBack(); return; }

            var end_time = new Date().getTime(),
                use_time = end_time - this.touchStartTime,
                _this = this;

            this.touchStartTime = 0;


            var lastpoint = this.touchPoints[this.touchPoints.length - 1];
            var lastpointx = lastpoint.x;
            var lastpointy = lastpoint.y;

            var startpoint = this.touchPoints[0];
            var startpointx = startpoint.x;
            var startpointy = startpoint.y;

            var pointsx = Math.abs(startpointx - lastpointx);
            var pointsy = Math.abs(startpointy - lastpointy);
            if (use_time < 500 && pointsx > 30 && pointsx > pointsy) {
                if (startpointx > lastpointx) {
                    _this.page++;
                    _this.page = (_this.page > _this.maxPage) ? _this.maxPage : _this.page;
                    _this.animate();
                } else {
                    _this.page--;
                    _this.page = (_this.page >= 0) ? _this.page : 0;
                    _this.animate();
                }
            } else {
                //back roll
                _this.scrollBack();
            }


        },
        savePoint: function (e) {
            var touch;
            if (device.hasTouch) {
                touch = e.touches[0];
            } else {
                touch = e;
            }
            this.touchPoints.push({ x: touch.pageX, y: touch.pageY });
        },
        scrollBack: function () {
            this.animate();
        }


    };
    return scrollBanner;
})();
TGOGO.bannerScroll = function(obj){
    var body = $("<div></div>");
    obj.append(body);
    body.append(obj.find("a"));


    var direction = obj.data("direction") || "x",
        changeTime = obj.data("changeTime") || 5000,
        animateTime = obj.data("animateTime") || 1000;

    new this.banner_scroll_fn({
        win:obj,
        body:body,
        direction:direction,
        time:changeTime,
        animateTime:animateTime
    });
};



//*****************************************************
//富文本编辑器
//*****************************************************
TGOGO.editDiv = function(obj){
    var name = obj.attr("name"),
        fn_name = obj.data("fn_name"),
        val = obj.data("val") || "",
        width = parseInt(obj.width()),
        level = obj.data("level"),
        height = parseInt(obj.height());

    var myLevel = {
        "2":[ 'source', '|', 'undo', 'redo', '|', 'preview', 'cut', 'copy', 'paste',
            'plainpaste', 'wordpaste', '|', 'justifyleft', 'justifycenter', 'justifyright',
            'justifyfull', 'insertorderedlist', 'insertunorderedlist', 'indent', 'outdent', 'subscript',
            'superscript', 'clearhtml', 'quickformat', 'selectall', '|', 'fullscreen', '/',
            'formatblock', 'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold',
            'italic', 'underline', 'strikethrough', 'lineheight', 'removeformat', '|', 'image', 'table', 'hr', 'emoticons', 'baidumap', 'pagebreak',
            'anchor', 'link', 'unlink'],
        "1":[ 'undo', 'redo', '|',  'justifyleft', 'justifycenter', 'justifyright',
            'justifyfull', 'clearhtml', 'quickformat', '|',
            'emoticons', 'fontsize', 'forecolor', 'hilitecolor', 'bold',
            'italic', 'underline', 'strikethrough', 'lineheight', 'removeformat', '|', 'hr',
             'link', 'unlink']
    };
    level = myLevel[level] || myLevel[2];


    name = name || "__temp__divedit_"+DEVICE.counter();
    obj.attr({name:name});

    fn_name = fn_name || "__temp__divedit_fn_"+DEVICE.counter();

    KindEditor.ready(function(K) {
        window[fn_name] = K.create('textarea[name="'+name+'"]', {
            minHeight:height+"px",
            minWidth:width+"px",
            items:level
        });
        window[fn_name].html(val.toString());
    });
};




//*****************************************************
//滚动加载
//*****************************************************
TGOGO.scroll_load_fn = (function(){
    var device = DEVICE;
    var scroll_load = function (data) {
        this.ajaxFn = data.ajaxFn || function () { };
        this.buttonLength = data.buttonLength || 100;

        //是否加载中
        this.isLoading = false;
        //是否活动（多个加载在一个页面时使用）
        this.active = true;

        this.scrollFn = null;

        this.init();
    };
    scroll_load.prototype = {
        init: function () {
            this.addEvent();
        },
        //添加事件
        addEvent: function () {
            var _this = this;

            device.addEvent(window, "scroll", this.scrollFn = function () {
                _this.checkLoad();
            });
        },
        //检查是否触发加载事件
        checkLoad: function () {
            var scroll_top = parseInt($(document).scrollTop()),
                scroll_height = parseInt($("body").prop("scrollHeight")),
                win_height = parseInt($(window).height()),
                scroll_button = scroll_height - scroll_top - win_height;


            if (scroll_button < this.buttonLength && !this.isLoading && this.active) {
                this.ajaxFn();
            }
        },
        //销毁
        destroy: function () {
            device.removeEvent(window, "scroll", this.scrollFn);
        }
    };

    _scrollLoad = function (data) {
        var _this = this;

        this.buttonLength = data.buttonLength || 100;
        this.mainDiv = data.mainDiv;
        this.showLoading = data.showLoading || true;
        this.ajaxFn = data.ajaxFn;

        this.loadObj = null;

        this.scrollFn = new scroll_load({
            ajaxFn: function () {
                if(_this.mainDiv.css("display") != "none"){
                    _this.ajaxStart.call(_this);
                }
            },
            buttonLength: _this.buttonLength
        });

    };
    _scrollLoad.prototype = {
        ajaxStart: function () {
            var _this = this;
            _this.scrollFn.isLoading = true;

            if (_this.showLoading) {
                _this.showLoad();
            }

            _this.ajaxFn();

        },
        //显示loading
        showLoad: function () {
            var div = $("<div>加载中，请稍后！</div>");
            div.css({
                width: "100%",
                height: "30px",
                "line-height": "30px",
                "text-align": "center",
                color: "#000"
            });
            this.mainDiv.append(div);

            this.loadObj = div;
        },
        //隐藏loading
        hideLoad: function () {
            if (this.loadObj && this.loadObj.find("a").length != 0) {
                this.loadObj.find("a").unbind("click").unbind("hover");
            }

            if (this.loadObj && this.loadObj.length != 0) {
                this.loadObj.remove();
            }

            this.loadObj = null;
        },
        //加载失败显示loading
        reShowLoad: function () {
            var _this = this,
                div = $("<div>加载失败，<a>点击重试</a></div>");


            div.css({
                width: "100%",
                height: "30px",
                "line-height": "30px",
                "text-align": "center",
                color: "#000"
            });
            div.find("a").click(function () {
                _this.hideLoad();
                _this.ajaxStart();
            }).hover(function () {
                $(this).css({ color: "#999" });
            }, function () {
                $(this).css({ color: "#000" });
            });
            this.mainDiv.append(div);
            this.loadObj = div;
        },
        //ajax调用成功回调
        ajaxSuccess: function () {
            this.hideLoad();
            this.scrollFn.isLoading = false;
        },
        //ajax调用失败回调
        ajaxError: function () {
            this.hideLoad();
            this.reShowLoad();
        },
        //ajax 加载完数据
        destroy: function () {
            this.hideLoad();
            this.scrollFn.destroy();
            this.scrollFn = null;

            this.mainDiv = null;
            this.showLoading = null;
            this.ajaxFn = null;
        },
        //
        tempDestroy: function () {
            this.hideLoad();
            this.mainDiv = null;
            this.showLoading = null;
            this.ajaxFn = function () {  };
        },
        //设置是否触发滚动加载
        setActive: function (state) {
            if (this.scrollFn) {
                this.scrollFn.active = state;
            }
        }
    };

    return _scrollLoad;
})();
TGOGO.scrollLoad = function(obj){
    var button_length = obj.data("button_length") || 100,
        bind_data_fn = obj.data("bind_fn"),
        scroll_id = 0,
        scroll_key = obj.data("scroll_for_key"),
        search_data = obj.data("search_data"),
        ajax_url = obj.data("ajax_url"),
        _search_data = {},
        __obj;

    search_data = search_data.split(",");
    for(var i= 0,l=search_data.length;i<l;i++){
        var this_s_d = search_data[i].split(":"),
            this_s_k = this_s_d[0];
        _search_data[this_s_k] = this_s_d[1];
    }


    var param = {
        mainDiv: obj,
        buttonLength: button_length,
        ajaxFn: function () {
            var data = _search_data,
                type = "get";

            data[scroll_key] = scroll_id;


            $.ajax({
                type:type,
                cache:false,
                url:ajax_url,
                data:data,
                contentType:"application/json",
                dataType:"json",
                timeout:600000,
                headers:{
                    "X-Requested-With":"XMLHttpRequest"
                },
                success:function(rs){
                    var state = rs.State;
                    if(state == 1){
                        //成功
                        var result = rs.Data || [];
                        result = result.Channel || {};
                        result = result.Item || [];

                        if (!result || result.length == 0) {
                            __obj.tempDestroy();
                            window[bind_data_fn]([]);
                        } else {
                            var rs_length = result.length,
                                last_data = result[rs_length - 1];

                            scroll_id = last_data[scroll_key];
                            __obj.ajaxSuccess();
                            window[bind_data_fn](result);
                        }
                    }else{
                        //失败
                        var msg = rs.Message;
                        __obj.ajaxError();
                    }
                },
                error:function(e){
                    var state = e.status,
                        msg = "";

                    if(state == "404" || state == "500"){
                        msg = "服务器繁忙,请稍后在试!";
                    }else{
                        msg = "无法连接服务器";
                    }

                    __obj.ajaxError(msg);
                }
            });
        }
    };



    __obj = new this.scroll_load_fn(param);
    __obj.ajaxStart();
};



//*****************************************************
//跑马灯
//*****************************************************
TGOGO.marquee_fn = (function(){
    var marquee = function(opt){
        this.div = opt.div;
        this.direction = opt.direction;
        this.spd = opt.spd || 100;

        this.allWidth = 0;
        this.allHeight = 0;

        this.obj1 = null;
        this.obj2 = null;
        this.body = null;

        this.canMove = true;

        this.width = parseInt(this.div.width());
        this.height = parseInt(this.div.height());

        this.init();
    };
    marquee.prototype = {
        init:function(){
            this.addDom();

            if(!this.canMove){
                return;
            }

            this.setCss();

            if(this.direction == "x"){
                this.run_x();
            }else{
                this.run_y();
            }


        },
        addDom:function(){
            var main = $("<div></div>"),
                body = $("<div></div>"),
                span = this.div.find("span"),
                main1,
                w = 0,
                h = 0;

            span.each(function(){
                w += parseInt($(this).width());
                h += parseInt($(this).height());
            });

            if(this.direction == "x" && this.width > w){
                this.canMove = false;
                return;
            }
            if(this.direction == "y" && this.height > h){
                this.canMove = false;
                return;
            }




            main.append(span);
            body.append(main);

            main1 = main.clone();
            body.append(main1);

            this.div.append(body);
            this.obj1 = main;
            this.obj2 = main1;
            this.body = body;
        },
        setCss:function(){
            var span = this.obj1.find("span"),
                _height = 5,
                _width = 5;


            this.body.find("span").css({
                display:"block",
                float:(this.direction == "x")? "left" : "none"
            });

            span.each(function(){
                _width += parseInt($(this).outerWidth(true));
                _height += parseInt($(this).outerHeight(true));
            });

            this.allWidth = _width;
            this.allHeight = _height;

            var body_w = (this.direction == "x")? _width*2 : this.width,
                body_h = (this.direction == "x")? this.height : _height* 2,
                obj_w = (this.direction == "x")? _width : this.width,
                obj_h = (this.direction == "x")? this.height : _height;


            this.div.css({
                position:"relative",
                overflow:"hidden",
                width:this.width+"px",
                height:this.height+"px"
            });
            this.body.css({
                position:"absolute",
                left:0,
                top:0,
                width:body_w+"px",
                height:body_h+"px"
            });

            this.obj1.css({
                float:(this.direction == "x")? "left" : "none",
                width:obj_w+"px",
                height:obj_h+"px"
            });
            this.obj2.css({
                float:(this.direction == "x")? "left" : "none",
                width:obj_w+"px",
                height:obj_h+"px"
            });
        },
        run_x:function(){
            var time = this.allWidth/this.spd * 1000,
                _this = this;


            var fn = function(){
                _this.body.animate({
                    left:-_this.allWidth+"px"
                },time,"linear",function(){
                    _this.body.css({left:0});
                    fn();
                })
            };
            fn();
        },
        run_y:function(){
            var time = this.allHeight/this.spd * 1000,
                _this = this;

            var fn = function(){
                _this.body.animate({
                    top:-_this.allHeight+"px"
                },time,"linear",function(){
                    _this.body.css({top:0});
                    fn();
                })
            };
            fn();
        }
    };

    return marquee;
})();
TGOGO.marquee = function(obj){
    var direction = obj.data("direction"),
        spd = obj.data("spd");

    new this.marquee_fn({
        div:obj,
        direction:direction,
        spd:spd
    });

};



//*****************************************************
//商品详情内图片自适应
//*****************************************************
TGOGO.imgAutoResize_fn = function(obj){
    var imgs = obj.find("img");

    var setImg = function(img){
        var src = img.attr("src"),
            new_img = new Image();

        img.attr({ src: "" });

        new_img.onload = function () {
            var main_width = parseInt(obj.width());
            var width = new_img.width,
                height = new_img.height,
                new_size = main_width * height / width;

            if (width > main_width) {
                img.css({
                    width: main_width + "px",
                    height: new_size + "px"
                })
            } else {
                img.css({
                    width: width + "px",
                    height: height + "px"
                })
            }
            img.attr({
                src: src,
                my_width: width,
                my_height: height
            });
        };
        new_img.src = src;
    };

    imgs.each(function () {
        var this_img = $(this);
        setImg(this_img);
    });

    $(window).resize(function(){
        imgs.each(function(){
            var this_img = $(this),
                width = this_img.attr("my_width"),
                height = this_img.attr("my_height");

            if(width){
                var main_width = parseInt(obj.width()),
                    new_size = main_width * height / width;

                if (width > main_width) {
                    this_img.css({
                        width: main_width + "px",
                        height: new_size + "px"
                    })
                } else {
                    this_img.css({
                        width: width + "px",
                        height: height + "px"
                    })
                }
            }
        });
    })


};
TGOGO.imgAutoResize = function(obj){
    TGOGO.imgAutoResize_fn(obj);
};





//*****************************************************
//图片自适应div大小  一个div内一个图片的情况
//*****************************************************
TGOGO.imgFixedDiv_fn = function(obj){
    var imgs = obj.find("img");

    var setImg = function(img){
        var src = img.attr("src"),
            new_img = new Image();

        img.attr({ src: "" });

        new_img.onload = function () {
            var main_width = parseInt(obj.width()),
                main_height = parseInt(obj.height());

            var width = new_img.width,
                height = new_img.height,
                new_size = TGOGO.__getNewImageSize(width,height,main_width,main_height);

            img.css({
                width: new_size.width + "px",
                height: new_size.height + "px",
                position: "relative",
                left: (main_width-new_size.width)/2 + "px",
                top: (main_height-new_size.height)/2 + "px"
            }).attr({
                src: src,
                my_width: width,
                my_height: height
            });
        };
        new_img.src = src;
    };

    imgs.each(function () {
        var this_img = $(this);
        setImg(this_img);
    });

    $(window).resize(function(){
        imgs.each(function(){
            var this_img = $(this),
                width = this_img.attr("my_width"),
                height = this_img.attr("my_height");

            if(width){
                var main_width = parseInt(obj.width()),
                    main_height = parseInt(obj.height()),
                    new_size = TGOGO.__getNewImageSize(width,height,main_width,main_height);

                this_img.css({
                    width: new_size.width + "px",
                    height: new_size.height + "px",
                    position: "relative",
                    left: (main_width-new_size.width)/2 + "px",
                    top: (main_height-new_size.height)/2 + "px"
                })
            }
        });
    })


};
TGOGO.imgFixedDiv = function(obj){
    TGOGO.imgFixedDiv_fn(obj);
};





//*****************************************************
//图片上传按钮  后端程序需要集成进来
//*****************************************************
TGOGO.uploadImage_fn = (function(){
    var upload_file = function(opt){
        this.inputId = opt.id;
        this.formId = opt.formId;
        this.showImageWrapId = opt.showImageWrapId;
        this.types = opt.types;
        this.serverSrc = opt.serverSrc;
        this.maxNumber = opt.maxNumber;
        this.imgs = opt.imgs;
        this.imgWidth = opt.pictureWidth;
        this.imgHeight= opt.pictureHeight;
        this.pictureShowUrl = opt.pictureShowUrl;
        this.hideInput = opt.hideInput;

        this.className = null;
        this.upLoadNumber = 0;


        this.init();
    };
    upload_file.prototype = {
        init:function(){
            this.addEvent();
            this.showStartImage();
        },
        //获取自身类名,必须实例化为 window.XXX
        getClassName:function(){
            for(var a in window){
                if(window[a] === this){
                    this.className = a;
                    break;
                }
            }
        },
        //事件绑定
        addEvent: function () {
            var _this = this;
            $("#" + this.inputId).change(function (e) {
                _this.inputChange(this, e);
            });

        },
        //检查文件类型
        checkFileType: function () {
            var value = $("#" + this.inputId).val(),
                type = value.substr(value.lastIndexOf(".") + 1).toLocaleLowerCase(),
                types = "," + this.types + ",";

            return (types.indexOf("," + type + ",") > -1);
        },
        //获取文件后
        inputChange: function () {
            if ($("#" + this.inputId).val() == "") {
                return;
            }

            var pass = this.checkFileType();

            if (!pass) {
                alert("文件格式不对");
                this.reCreateInput();
                return;
            }

            if(this.upLoadNumber >= this.maxNumber){
                alert("只能上传"+this.maxNumber+"张图片!");
                this.reCreateInput();
                return;
            }

            this.createIframe();
        },
        //创建iframe
        createIframe: function () {
            var iframe = $("<iframe name='__bens_iframe_name__' id='__bens_iframe__' width='0' height='0' frameborder='0' ></iframe>"),
                form = $("#" + this.formId),
                t = new Date().getTime();

            this.getClassName();

            form.attr({
                target: "__bens_iframe_name__",
                action: this.serverSrc + "?class="+this.className+"&t=" + t,
                enctype: "multipart/form-data",
                method: "post"
            });
            $("body").append(iframe);

            //            $("#"+this.inputId).wrap(form);
            //            $(form).append("<input type='text' value='123' name='test1'>");

//            $.loadShow();
            if(TGOGO.settings && TGOGO.settings.loadShow){
                TGOGO.settings.loadShow();
            }
            form.submit();
        },
        //提交成功回调
        oldSuccess: function (rs) {
//            $.loadHide();
            if(TGOGO.settings && TGOGO.settings.loadHide){
                TGOGO.settings.loadHide();
            }
            if (rs.State != 1) {
                //失败
                alert(rs.Message);
                this.reCreateInput();
                return;
            }

            var src = rs.Data;

//            src = "http://localhost:8023"+src;




            this.reCreateInput();
            this.upLoadNumber++;
            $("#__bens_iframe__").remove();
            this.showImg(src);

        },
        //重新生成input
        reCreateInput: function () {
            var _this = this,
                input = $("#" + this.inputId),
                clone = input.clone();

            clone.insertBefore(input);
            input.unbind("change");
            input.remove();

            clone.change(function (e) {
                _this.inputChange(this, e);
            });
        },
        //显示图片
        showImg:function(src,callback){
            src = this.pictureShowUrl+src;

            var img = new Image(),
                _this = this;

            callback = callback || function(){};

            var div = $("<div></div>");
            div.css({
                width: this.imgWidth+"px",
                height: this.imgHeight+22+"px",
                float: "left",
                margin: "10px"
            }).addClass("__upload_temp__");
            var div1 = $("<div></div>"),
                div2 = $("<div>删 除</div>"),
                div3 = $("<div></div>");

            div1.css({
                width: "100%",
                height: this.imgHeight+"px"
            });
            div2.css({
                width: "100%",
                height: "22px",
                "text-align": "center",
                "line-height": "22px",
                background: "#ccc",
                cursor: "pointer"
            });
            div3.css({
                width: 0,
                height: "2px",
                background: "#f00"
            }).addClass("__upload_temp_pro__");


            div.append(div1).append(div3).append(div2);



            div2.click(function () {
                var temp_div = $(this).parent();
                temp_div.remove();
                _this.delOne();
            });

            $("#"+_this.showImageWrapId).append(div);
            callback();
            img.onload = function () {

                var width = img.width,
                    height = img.height,
                    new_size = TGOGO.__getNewImageSize(width, height, _this.imgWidth, _this.imgHeight);



                var temp_top = (_this.imgHeight - new_size.height) / 2,
                    temp_left = (_this.imgWidth - new_size.width) / 2;

                $(img).css({
                    margin: temp_top + "px " + temp_left + "px",
                    width:new_size.width+"px",
                    height:new_size.height+"px"
                });


            };
            img.src = src;
            div1.append(img);
            this.setHideInputVal();
        },
        //初始显示图片
        showStartImage:function(){
            var data = this.imgs,
                _this = this;

            var go = function(){
                if(data.length != 0){
                    var this_src = data.shift();
                    _this.upLoadNumber++;
                    _this.showImg(this_src,go);
                }
            };

            go();
        },
        //删除图片
        delOne: function () {
            this.upLoadNumber--;
            this.setHideInputVal();
        },
        delAll:function(){
            this.upLoadNumber = 0;
            $("#"+this.showImageWrapId).html("");
            this.setHideInputVal();

        },
        setHideInputVal:function(){
            var input = this.hideInput,
                imgs = $("#"+this.showImageWrapId).find("img"),
                vals = [];

            imgs.each(function(){
                var name = $(this).attr("src");
                name = name.substr(name.lastIndexOf("\/")+1);
                vals.push(name);
            });

            input.val(vals.join(","));

        }
    };

    return upload_file;

})();
TGOGO.uploadImage = function(obj){
    var serverUrl = obj.data("server_url"),
        show_picture_id = obj.data("show_picture_id"),
        write_list = obj.data("can_uplad_type"),
        max_number = obj.data("can_upload_number"),
        picture_width = obj.data("show_picture_width"),
        picture_height = obj.data("show_picture_height"),
        picture_show_url = obj.data("show_picture_url"),
        has_picture = obj.data("has_pictures"),
        hide_input_name = obj.data("hide_input_name") || "_togogo_upload_files_",
        id = DEVICE.counter(),
        form_id = "_temp_uploadImage_from_"+id,
        input_id = "_temp_uploadImage_input_"+id,
        form = $("<form id='"+form_id+"'></form>"),
        hide_input = $("<input type='hidden' name='"+hide_input_name+"'  value='"+has_picture+"'>"),
        input = $("<input hidefocus id='"+input_id+"' type='file' name='file' />");
    has_picture = (!has_picture || $.trim(has_picture) == "")? [] : has_picture.split(",");

    obj.css({
        overflow:"hidden",
        position:"relative"
    });
    input.css({
        position:"absolute",
        left:0,
        top:0,
        "outline":0,
        "font-size":"300px",
        width:"100%",
        height:parseInt(obj.height())+"px",
        opacity:0,
        cursor:"pointer",
        border:"none"
    });
    form.append(input).append(hide_input);
    obj.append(form);

    var _temp_name = "_temp_uploadImage_fn_"+id;
    obj.attr({fn_name:_temp_name});

    window[_temp_name] = new TGOGO.uploadImage_fn({
        id:input_id,      //input[type='file']的 id   @param:str
        formId:form_id,              //表单id                     @param:str
        types:write_list,       //上传文件类型                @param:str
        maxNumber:max_number,                //最大能上传好多张图片          @param:int
        //服务器地址                  @param:str
        serverSrc:serverUrl,
        showImageWrapId:show_picture_id,      //图片上传完后显示区域id        @param:str
        imgs:has_picture,                  //已存在的图片                 @param:array
        pictureWidth:picture_width,        //显示图片大小
        pictureHeight:picture_height,
        pictureShowUrl:picture_show_url,    //图片显示地址
        hideInput:hide_input                //隐藏文本框保存当前的图片地址
    });
};






//*****************************************************
//弹出居中层
//*****************************************************
TGOGO.showCenterDiv_fn = (function(){
    var wrap_bg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gkMDRAo1IkjzgAAAA1JREFUCNdj+P//fwMACXwDfrW+dCcAAAAASUVORK5CYII=";
    var showDiv = function(opt){
        this.wrap = null;
        this.zz = null;
        this.div = opt.div;
        this.closeRun = opt.closeRun;

        if(typeof(this.div) === "string"){
            this.div = $("#"+this.div).css({display:"block"});
        }else{
            this.div = this.div.css({display:"block"});
        }


        this.zIndex = opt.zIndex || 1000;
        this.init();
    };
    showDiv.prototype = {
        init:function(){
            this.createZZ();
            this.createWrap();

            this.wrap.append(this.div);
            this.addEvent();
            this.show();

        },
        createWrap:function(){
            var div = $("<div></div>");
            div.css(DEVICE.fixObjCss({
                padding: "10px",
                background: "url("+wrap_bg+")",
                "border-radius": "5px",
                "z-index":this.zIndex+1,
                position:"fixed",
                left:"50%",
                top:"50%"
            }));
            this.wrap = div;
        },
        createZZ:function(){
            var div = $("<div></div>");
            div.css({
                width:"100%",
                height:"100%",
                background:"#000",
                opacity:0,
                position:"fixed",
                left:0,
                top:0,
                "z-index":this.zIndex
            });
            this.zz = div;
        },
        addEvent:function(){
            var _this = this;
            this.zz.click(function(){
                 _this.destroy();
            });
            this.wrap.click(function(e){
                e.stopPropagation();
//                e.preventDefault();
            });
        },
        show:function(){
            $("body").append(this.zz).append(this.wrap);
            this.zz.animate({
                opacity:0.4
            },500);
            var width = parseInt(this.div.width())+20,
                height = parseInt(this.div.height())+20;
            this.wrap.css({
                "margin-top":-height/2+"px",
                "margin-left":-width/2+"px"
            })
        },
        destroy:function(){
            if(this.div){
                $("body").append(this.div.css({display:"none"}));
            }

            if(this.zz){
                this.zz.unbind("click");
                this.zz.remove();
            }
            if(this.wrap){
                this.wrap.unbind("click");
                this.wrap.remove();
            }



            this.zz = null;
            this.wrap = null;
            this.div = null;
            this.closeRun();
        }
    };
    return showDiv;
})();
TGOGO.showCenterDiv = function(obj){
    var event = obj.data("show_event"),
        id = obj.data("center_div_id"),
        z_index = obj.data("z_index"),
        after_close_run = obj.data("after_close_run"),
        before_show_run = obj.data("before_show_run"),
        _this = this,
        _id = DEVICE.counter(),
        fn_name = "_temp_showCenterDiv_fn_"+_id;

    obj.attr({"fn_name":fn_name});
    after_close_run = (after_close_run)? window[after_close_run] : function(){};
    before_show_run = (before_show_run)? window[before_show_run] : function(){};

    DEVICE.addEvent(obj.get(0),event,function(){
        before_show_run();
        window[fn_name] = new _this.showCenterDiv_fn({
            div:id,
            zIndex:z_index,
            closeRun:after_close_run
        });
    });

};



//*****************************************************
//时间选择控件
//*****************************************************
TGOGO.dataInput = function(obj){
    var min_year = obj.data("min_year"),
        max_year = obj.data("max_year"),
        now_year = 1900 + new Date().getYear();

    max_year = max_year || now_year;
    min_year = min_year - now_year + "Y";
    max_year = max_year - now_year + "Y";


    obj.datepicker({
        dateFormat: "yy-mm-dd",
        minDate: min_year,
        maxDate: max_year,
        changeMonth: true,
        changeYear: true,
        yearRange: 'c-100:c+100'
    });
};






//*****************************************************
//ajax提交
//只检查input  textarea select
//*****************************************************
TGOGO.__rule_list_fn = {
    username:/^[a-zA-Z0-9][a-zA-Z0-9_]*$/,
    nickname:/^.+$/,
    password:/^[a-zA-Z0-9]*$/,
    mobile:/^[1]\d*$/,
    email:/^[a-zA-Z0-9][a-zA-Z0-9-_\.]*@[a-zA-Z0-9_-]*\.[a-zA-Z0-9]*$/,
    number:/^[0-9]*$/
};
TGOGO.__checkForm_fn = function(obj,opt,opt1){
    var data = {},
        err = [],
        _this = this;

    for(var i= 0,l=opt.length;i<l;i++){
        opt[i].each(function(){
            var back = _this.__checkInput_fn($(this));
            if(!back){
                err.push({
                    obj:$(this),
                    msg:$(this).data("err_msg") || "输入的数据格式不正确！"
                })
            }else{
                var name = $(this).attr("name");
                data[name] = $.trim($(this).val());
            }
        });
    }

    //处理checkbox和radio
    //获取name
    var name = {};
    for(var z = 0, zl=opt1.length;z<zl;z++){
        opt1[z].each(function(){
            var this_name = $(this).attr("name");
            if(this_name && !name.hasOwnProperty(this_name)){
                name[this_name] = true;
            }
        })
    }
    //按名字
    for(var key in name){
        if(name.hasOwnProperty(key)){
            var this_obj = obj.find("input[name='"+key+"']"),
                this_data = [];
            this_obj.each(function(){
                if($(this).get(0).checked){
                    this_data.push($.trim($(this).val()));
                }
            });
            data[key] = this_data.join(",");
        }
    }



    return {
        err:err,
        data:data
    }

};
TGOGO.__checkInput_fn = function(obj){
    var rule = obj.data("rule") || null,
        val = $.trim(obj.val()),
        rule_text = ","+rule+",";

    if(!rule){return true;}

    rule = rule.split(",");

    //如果值为空
    if(val == ""){
        return (!(rule_text.indexOf(",must,") > -1));
    }

    //如果值不为空
    for(var i= 0,l=rule.length;i<l;i++){
        var this_rule = rule[i];
        if(this_rule == "must"){ continue;}

        //检查长度
        if(this_rule.substr(0,3) == "max"){
            var max = this_rule.split(":");
            max = (max.length == 2)? max[1] : 0;
            if(val.length > max){
                return false;
            }
        }
        if(this_rule.substr(0,3) == "min"){
            var min = this_rule.split(":");
            min = (min.length == 2)? min[1] : 0;
            if(val.length < min){
                return false;
            }
        }

        //检查正则
        this_rule = this.__rule_list_fn[this_rule];
        if(this_rule){
            if(!this_rule.test(val)){
                return false;
            }
        }
    }

    return true;
};
TGOGO.__submitForm_fn = function(opt){
    var src = opt.src,
        type = opt.ajax_type,
        timeout = opt.ajax_timeout,
        success = opt.success,
        error = opt.error,
        data = opt.data;

    TGOGO.loading.show("loading...");
    $.ajax({
        type:type,
        cache: false,
        url:src,
        data:data,
//        headers:header,
        contentType:"application/json",
        dataType:"json",
        timeout:timeout,
        success:function(rs){
            TGOGO.loading.hide();
            success(rs);
        },
        error:function(e){
            TGOGO.loading.hide();
            var state = e.status,
                msg = "";

            if(state == "500"){
                msg = "服务器繁忙,请稍后在试!";
            }else{
                msg = "无法连接服务器";
            }

            error(msg);
        }
    });




};
TGOGO.ajaxSubmit = function(obj){
    var ajax_src = obj.data("ajax_src") || "/",
        ajax_type = obj.data("ajax_type") || "post",
        ajax_timeout = obj.data("ajax_timeout") || TGOGO.settings.ajaxTimeOut,
        ajax_success_fn = obj.data("ajax_success_fn"),
        ajax_error_fn = obj.data("ajax_error_fn"),
        check_error_fn = obj.data("check_error_fn"),
        check_before_fn = obj.data("check_before_fn"),
        _this = this,
        submit = obj.find("input[type='submit']");


    var check_fn = function(){
        var text = obj.find("input[type='text']"),
            textarea = obj.find("textarea"),
            select = obj.find("select"),
            checkbox = obj.find("input[type='checkbox']"),
            radio = obj.find("input[type='radio']");


        if(window[check_before_fn]){
            var result = window[check_before_fn]();
            if(!result){
                return;
            }
        }

        var return_obj = _this.__checkForm_fn(obj,[text,textarea,select],[checkbox,radio]);

        if(return_obj.err.length == 0){
            //提交数据
            var data = return_obj.data;
            _this.__submitForm_fn({
                data:data,
                src:ajax_src,
                ajax_type:ajax_type,
                ajax_timeout:ajax_timeout,
                success:function(rs){
                    if(window[ajax_success_fn]){
                        window[ajax_success_fn](rs);
                    }
                },
                error:function(msg){
                    if(window[ajax_error_fn]){
                        window[ajax_error_fn](msg);
                    }
                }
            })
        }else{
            //检查出错
            var err = return_obj.err;
            if(window[check_error_fn]){
                window[check_error_fn](err);
            }
        }
    };


    if(submit.length !=0){
        submit.click(function(){
            check_fn();
        });
    }
};






//*****************************************************
//鼠标悬停显示右浮动层  处理顶部和底部自适应
//*****************************************************
TGOGO.__showFloatDiv = (function(){
    var showFloat = function(obj,div){
        this.obj = obj;
        this.div = div;

        this.obj_height = parseInt(this.obj.height());
        this.obj_width = parseInt(this.obj.width());
//        this.div_width = parseInt(this.div.width());
        this.div_height = parseInt(this.div.height());

        this.init();
    };
    showFloat.prototype = {
        init:function(){
            this.setDiv();
            this.eventBind();
        },
        setDiv:function(){
            this.div.css({
                position:"absolute"
            });
            this.obj.css({
                position:"relative"
            })
        },
        eventBind:function(){
            var _this = this;
            this.obj.hover(function(){
                _this.showDiv();
            },function(){
                _this.hideDiv();
            });
        },
        showDiv:function(){
            var y = this.getPosition();
            this.obj.append(this.div);
            this.div.css({
                top:y+"px",
                display:"block",
                left:this.obj_width+"px"
            })


        },
        hideDiv:function(){
            this.div.css({
                display:"none"
            })
        },
        getPosition:function(){
            var scroll_top = parseInt($(document).scrollTop()),
                obj_top = parseInt(this.obj.offset().top),
                win_height = parseInt($(window).height()),
                obj_bottom;
            //元素中心点对屏幕顶部距离
            obj_top = obj_top - scroll_top + this.obj_height/2;
            obj_bottom = win_height - obj_top;
            //居中显示
            if(obj_top >= this.div_height/2 && obj_bottom >= this.div_height/2){
                return -(this.div_height - this.obj_height)/2;
            }


            //距屏幕底部显示
            if(obj_top >= this.div_height/2 && obj_bottom <= this.div_height/2){
                return -(this.div_height - obj_bottom - this.obj_height/2);
            }


            //距屏幕顶部显示
            if(obj_top <= this.div_height/2 && obj_bottom >= this.div_height/2){
                return  -(obj_top - this.obj_height/2) ;
            }


            //div窗口高度高于window高度  距离顶部显示
            return obj_top - this.obj_height/2;
        }
    };

    return showFloat;
})();
TGOGO.showFloatDiv = function(obj){
    var div_id = obj.data("show_div_id");
    if(!div_id){return;}
    var show_div = $("#"+div_id);
    if(show_div.length != 1){
        return;
    }

    new TGOGO.__showFloatDiv(obj,show_div);
};















//*****************************************************
//获取图片要显示的大小
//*****************************************************
TGOGO.__getNewImageSize = function (imgwidth, imgheight, objwidth, objheight) {
    var newimgwidth, newimgheight;

    if (imgwidth > 0 && imgheight > 0) {
        if (imgwidth / imgheight >= objwidth / objheight) {
            if (imgwidth > objwidth) {
                newimgwidth = objwidth;
                newimgheight = imgheight * objwidth / imgwidth;
            } else {
                newimgwidth = imgwidth;
                newimgheight = imgheight;
            }
        } else {
            if (imgheight > objheight) {
                newimgheight = objheight;
                newimgwidth = imgwidth * objheight / imgheight;
            } else {
                newimgwidth = imgwidth;
                newimgheight = imgheight;
            }
        }
    }

    return {
        width: newimgwidth,
        height: newimgheight
    }
};



//*****************************************************
//loading
//*****************************************************
TGOGO.loading = {
    imgSrc:TGOGO.settings.resourceSrc + "loading.gif",  //图片地址
    showWidth:110,          //要显示loading区域的大小
    showHeight:110,
    imgWidth:400,           //图片实际尺寸
    imgHeight:300,
    imgScale:0.5,             //图片缩放比例
    imgX:145,              //图片定位坐标
    imgY:71,
    padding:20,             //中间div的padding
    background:"#DEE1E2",      //背景颜色
    color:"#000",           //文字颜色
    obj:null,
    zz:null,
    createZZ:function(){
        var obj = $("<div></div>");
        obj.css({
            width:"100%",
            height:"100%",
            display:"block",
            position:"fixed",
            left:0,
            top:0,
            "z-index":300000,
            background:"#000"
        });
        this.zz = obj;
    },
    createLoading:function(info){
        var main = this.zz.clone().css({background:"none",display:"block","z-index":300001});
        info = info || "loading...";

        var load = $("<div></div>"),
            img_div = $("<div></div>"),
            img = $("<img src='"+this.imgSrc+"' />"),
            text = $("<div>"+info+"</div>"),
            width = (this.showWidth * this.imgScale > 110)? this.showWidth * this.imgScale : 110,
            height = this.showHeight * this.imgScale + 40;
        load.css(DEVICE.fixObjCss({
            padding:this.padding + "px",
            width:width + "px",
            height:height + "px",
            position:"absolute",
            left:"50%",
            top:"50%",
            "margin-left":-(width/2 + this.padding) + "px",
            "margin-top":-(height/2 + this.padding) + "px",
            background:this.background,
            "border-radius":"5px"
        }));
        img_div.css({
            position:"relative",
            width:this.showWidth * this.imgScale + "px",
            height:this.showHeight * this.imgScale + "px",
            margin:"0 auto",
            overflow:"hidden"
        });
        img.css({
            position:"absolute",
            width:this.imgWidth * this.imgScale + "px",
            height:this.imgHeight * this.imgScale + "px",
            left:- this.imgX * this.imgScale + "px",
            top:- this.imgY * this.imgScale + "px"
        });
        text.css({
            width:"100%",
            height:"40px",
            "line-height":"40px",
            "text-align":"center",
            color:this.color
        });
        img_div.append(img);
        load.append(img_div).append(text);
        main.append(load);
        this.obj = main;
    },
    show:function(info){
        if(this.obj){return;}
        this.createZZ();
        this.createLoading(info);

        this.zz.css({opacity:0});
        this.zz.animate({
            opacity:0.5
        },500);
        $("body").append(this.zz).append(this.obj);

    },
    hide:function(){
        this.obj.remove();
        this.zz.remove();
        this.obj = null;
        this.zz = null;
    }
};








