/*
 * Filename :  tgogo
 * =====================================
 * Created with WebStorm.
 * User: bens
 * Date: 14-9-2
 * Time: 上午10:09
 * Email:5878794@qq.com
 * =====================================
 * Desc:  依赖　　jq.js    device.js
 */


//*****************************************************
//流程条
//*****************************************************
//说明：
//class = 　"__TGOGO__"　                     @必须写死
//data-type = "processBar"                    @必须写死
//@箭头图片3层  从下向上为  背景色、已完成、当前
//data-arrow_img="image/3_1.png,image/2_1.png,image/1.png"  @箭头图片（3层）
//data-text_color="#999,#fff,#fff"                          @箭头颜色（3层）
//data-arrow_text="1、测试,2、测试,3、测试,4、测试"             @箭头数量(以，分割)
//data-arrow_width="12"                                     @箭头单边宽高
//data-arrow_height="28"
//data-now_step="1"                                         @当前在第几步  0开始

//eg:
//<div class="__TGOGO__"
//    style="width: 80%; height: 30px; line-height: 30px; text-align: center;"
//    data-type="processBar"
//    data-arrow_img="image/3_1.png,image/2_1.png,image/1.png"
//    data-arrow_color="#ddd,#bbb,#333"
//    data-text_color="#999,#fff,#fff"
//    data-arrow_text="1、测试,2、测试,3、测试,4、测试"
//    data-arrow_width="12"
//    data-arrow_height="28"
//    data-now_step="1"
//>
//</div>





//*****************************************************
//评分星星
//*****************************************************
//说明：
//class = 　"__TGOGO__"　                     @必须写死
//data-type = "starScore"                    @必须写死
//data-img_src = "image/star.png"                 @星星图片（上面的）
//data-img_src_bg = "image/star_white.png"      　@星星图片（背景）
//data-text = "非常不满1,不满意3,一般5,满意7,非常满意9"    @星星后的文字说明,可为空
//data-text_color = "#ff5f01"                         @文字颜色,默认黑色
//data-star_length = "5"                            @显示几个星星
//data-default_val = "0"                            @初始显示的分数
//data-star_width = "28"                            @星星图片的长宽
//data-star_height = "28"
//data-use_half_star = "no"                         @是否显示半颗星星　yes/no
//data-hide_input_id = "adfegggg"                   @星星的分值存放的input的id（半个星存在的时候半个星＝１，5个星星＝１０）

//eg:
//<div class="__TGOGO__"
//    style="width:300px; height: 30px; position: relative; margin-left: 40px;"
//    data-type = "starScore"
//    data-img_src = "image/star.png"
//    data-img_src_bg = "image/star_white.png"
//    data-text = "非常不满1,不满意3,一般5,满意7,非常满意9"
//    data-text_color = "#ff5f01"
//    data-star_length = "5"
//    data-star_width = "28"
//    data-star_height = "28"
//    data-use_half_star = "no"
//    data-hide_input_id = "adfegggg"
//>
//</div>







//*****************************************************
//商品图片局部放大
//*****************************************************
//说明：
//class = 　"__TGOGO__"　                     @必须写死
//data-type = "imgEnlarged"                    @必须写死
//fn_name = ""                  @自动生成实例化的名称


//更换图片
//var fn_name = $("#id").attr("fn_name");
//window[fn_name].changeImg(src);


//eg:
//<div class="__TGOGO__"
//    style="width: 300px;height: 300px; margin-left: 100px;"
//    data-type="imgEnlarged"
//>
//    <img src="image/loading.gif" />
//</div>






//*****************************************************
//分页控件
//*****************************************************
//说明：
//class = 　"__TGOGO__"　                     @必须写死
//data-type = "pagination"                    @必须写死
//data-max_page = "20"                        @最大页数
//data-now_page = "1"                         @当前页数
//data-color = ""                             @字体颜色
//data-hover_color = ""                       @鼠标悬浮颜色
//data-background = ""                        @背景颜色
//data-hover_background = ""                  @鼠标悬浮背景颜色
//data-page_url = "/bens/test.html"           @分页跳转的地址
//data-url_params = "type_1,type_2,type_3,type_4,type_5"   @分页跳转的参数名（同下面的input的id相同，val取input的值）
//data-page_key = "page"                      @地址中分页数的key


//eg:
//<div class="__TGOGO__"
//    id = "adf2233"
//    style="text-align: center;"
//    data-type="pagination"
//    data-max_page = "20"
//    data-now_page = "1"
//    data-color = ""
//    data-hover_color = ""
//    data-background = ""
//    data-hover_background = ""
//    data-page_url = "/bens/test.html"
//    data-url_params = "type_1,type_2,type_3,type_4,type_5"
//    data-page_key = "page"
//>
//    <input type="hidden" id="type_1" value="" />
//    <input type="hidden" id="type_2" value="" />
//    <input type="hidden" id="type_3" value="" />
//    <input type="hidden" id="type_4" value="" />
//    <input type="hidden" id="type_5" value="" />
//</div>






//*****************************************************
//点击显示隐藏div
//*****************************************************
//说明：
//class = 　"__TGOGO__"　                     @必须写死
//data-type = "countDown"                    @必须写死
//data-id="a_v_c"                            @要控制的div的id
//data-show_class="show_hied_1"              @div显示时该元素附加的class，同时移除隐藏时的class
//data-hide_class="show_hied_2"              @div隐藏时该元素附加的class，同时移除显示时的class


//eg:
//<div class="__TGOGO__"
//    data-type="showHideDiv"
//    data-id="a_v_c"
//    data-start_state="hide"
//    data-show_class="show_hied_1"
//    data-hide_class="show_hied_2"
//>
//显示隐藏div
//</div>
//<div id="a_v_c">阿萨法的算法sdk就发了狂受打击法拉克设计的阿斯顿了房间啊lsd解放路口</div>






//*****************************************************
//时间倒计时
//*****************************************************
//说明：
//class = 　"__TGOGO__"　                     @必须写死
//data-type = "countDown"                    @必须写死
//data-server_time="1417585770161"           @服务器当前时间时间戳
//data-start_time=" 1417585870161"           @开始的时间时间戳
//data-start_fn = "ffdeadf"                  @开始时执行函数名  window对象下


//子元素 小时、分、秒、毫秒显示区域需要带   data-show 的指定属性
//data-show="hour"    小时
//data-show="minute"    分
//data-show="second"    秒
//data-show="millisecond"  毫秒（可无该项）

//eg:
//<div class="__TGOGO__"
//    data-type="countDown"
//    data-server_time="1417585770161"
//    data-start_time=" 1417585870161"
//    data-start_fn = "ffdeadf"
//>
//    <span data-show="hour">1</span>
//    <span data-show="minute">1</span>
//    <span data-show="second">2</span>
//    <span data-show="millisecond">3</span>
//</div>





//*****************************************************
//带icon的下拉菜单，  取值还是取select的值
//*****************************************************
//说明：
//class = 　"__TGOGO__"　                     @必须写死
//data-type = "iconSelect"                   @必须写死

//option元素带data-iconurl属性，指到图片地址。


//eg：
//<select class="__TGOGO__"
//id = "iconselect"
//data-type="iconSelect"
//style="height: 30px;"
//>
//<option data-iconurl="" value="1">1123123123</option>
//<option selected data-iconurl="http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-5/256/themes-icon.png" value="2">2</option>
//<option data-iconurl="http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-5/256/themes-icon.png" value="3">3</option>
//<option data-iconurl="http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-5/256/themes-icon.png" value="4">4</option>
//</select>






//*****************************************************
//复制按钮
//
//需要挂载
//<script src="js/plus/copy_text/ZeroClipboard.js"></script>
//*****************************************************
//说明：
//class = 　"__TGOGO__"　                     @必须写死
//data-type = "copyButton"                   @必须写死
//data-swf_path = "js/plus/copy_text/"       @swf地址相对于html（绝对或相对）
//data-bind_input_id = "copy_text_input"     @获取要复制文字的input或textarea的id
//data-copy_success_fn = "copy_success"      @copy成功执行

//eg：
//<input type="text" id="copy_text_input" value="ddaacc" />
//<div class="__TGOGO__"
//data-type="copyButton"
//data-swf_path = "js/plus/copy_text/"
//data-bind_input_id = "copy_text_input"
//data-copy_success_fn = "copy_success"
//>copy</div>






//*****************************************************
//input输入框 带加减号控制
//*****************************************************
//说明：
//class:　__TGOGO__　                     @必须写死
//data-type: numberControl                @必须写死
//data-max_number = "10"                @能输入的最大值
//data-min_number = "-3"                @能输入的最小值
//data-change_fn = "change_fn"          @input输入框值变化时触发的函数，并返回jq的input对象(该函数必须在window对象下)
//data-add_class = ""                   @加减号附带的样式

//eg：
//<input
//class="__TGOGO__"
//data-type="numberControl"
//data-max_number = "10"
//data-min_number = "-3"
//data-change_fn = "change_fn"
//type="text"
//value="1"
//name="text"
///>




//*****************************************************
//触发其它元素的绑定
//*****************************************************
//说明：
//class:　__TGOGO__　              @必须写死
//data-type: trigger                @必须写死
//data-trigger_id:""                ＠要触发的元素上的事件的id
//data-trigger_type:""              @该元素的触发事件方式
//
//eg:
//<div id="open_div"
//class="__TGOGO__"
//data-type="trigger"
//data-trigger_id = "aaddeeffww"
//data-trigger_type = "click"
//>open div</div>




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
//data-close_btn_class = ""                 @带该class的dom元素点击都会执行关闭
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
//data-close_btn_class = ""
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
//    <input type="text" data-rule="username,must,max:10,min:1" data-error_info="请输入6位用户名" name="aa" /></br>
//<select name="bb" data-rule="must" data-error_info = "请选择">
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
//data-direction = "top"                      @弹出层显示方向：　默认right


//*****************************************************
//tab切换
//*****************************************************
//说明：
//class:　__TGOGO__　                        　@必须写死
//data-type: "tabChange"                     @必须写死
//data-add_event_class="tab"                  @触发点击的dom元素的class
//data-select_class="tab_select"               ＠dom元素选中后添加的class
//data-selected="0"                            @初始选中第几个　0开始
//data-event_name="hover"                       @触发tab切换方式  默认click
//data-get_id_attr = "show_id"                  ＠点中元素要显示的div的id获取属性

//eg:
//
//<div  class="__TGOGO__"
//data-type="tabChange"
//data-add_event_class="tab"
//data-select_class="tab_select"
//data-selected="0"
//data-get_id_attr = "show_id"
//>
//<span class="tab" data-show_id="div1">tab1</span>
//<span class="tab" data-show_id="div2">tab2</span>
//</div>
//
//<div id="div1">a</div>
//<div id="div2">b</div>


//*****************************************************
//级联菜单   关联的ｊｓ  area.js　　　　检查部分需要使用自动提交的插件　　否则自己写检查程序
// 生成的select会放在div里面
//*****************************************************
//说明：
//class:　__TGOGO__　                        　          @必须写死
//data-type: "cascadeSelect"                            @必须写死
//data-source="areaData"                                @级联菜单数据对象存放的名字　window对象下
//data-select_name = "jl1,jl2,jl3"                      @级联菜单的name　（多个用,分割）
//data-select_value = "4524503,4524504,4524510"         @级联菜单的value  （多个用,分割）
//data-empty_val = "请选择省份,请选择城市,请选择地区"      　@级联菜单的默认值　　（多个用,分割）
//data-must_select = "true"                             @是否必填. 只检查最后一个select
//data-error_info = "请选择完整的地域信息"                 @未选择的提示信息(必须带ａｊａｘ自动提交使用)


//eg:
//<div
//class = "__TGOGO__"
//data-type = "cascadeSelect"
//data-source="areaData"
//data-select_name = "jl1,jl2,jl3"
//data-select_value = "4524503,4524504,4524510"
//data-empty_val = "请选择省份,请选择城市,请选择地区"
//data-must_select = "true"
//data-error_info = "请选择完整的地域信息"
//>
//
//</div>


//*****************************************************
//验证码倒计时
//*****************************************************
//说明：
//class:　__TGOGO__　                        　          @必须写死
//data-type: "countdownButton"                            @必须写死
//data-click_run_fn = "aaa"                             @点击执行的函数名，window对象下
//data-input_id = "ddd"                                 @要录入的input的id,检查表单用
//data-show_text = "剩余x秒"                             @点击后倒计时的显示文字，x为动态数字（写死）
//data-hover_class = "aa_hover"                         @按钮hover的样式
//data-can_not_click_class = "aa_not"                   @按钮不可点击时的样式
//data-countdown_time = "10"                            @倒计时时间 秒
//data-fn_name = ""                                     @实例化后的名字 window[].ajaxSuccess();

//eg:
//<div style="width: 100px; height: 30px;"
//id = "test_bu"
//class="__TGOGO__"
//data-type="countdownButton"
//data-click_run_fn = "aaa"
//data-input_id = "ddd"
//data-show_text = "剩余x秒"
//data-hover_class = "aa_hover"
//data-can_not_click_class = "aa_not"
//data-countdown_time = "10"
//>获取验证码</div>
//<input type="text" data-rule="must,username" data-error_info="格式不对" id="ddd" />





//*****************************************************
//产品图横向滚动 (循环显示)   滚动的子元素不要有margin,没有计算那个宽度
//*****************************************************
//说明：
//class:　__TGOGO__　                        　          @必须写死
//data-type: "productScroll"                            @必须写死
//data-left_button_id = "left"                          @左侧按钮id
//data-right_button_id = "right"                        @右侧按钮id
//data-show_area_id = "main"                            @显示区域容器id
//data-scroll_spd = "1000"                              @滚动速度，毫秒
//data-children_tag = "a"                               @子元素标签（注意唯一性）

//eg:
//<div style="width: 500px; height: 300px; position: relative" class="bbccdd __TGOGO__"
//data-type="productScroll"
//data-left_button_id = "left"
//data-right_button_id = "right"
//data-show_area_id = "main"
//data-scroll_spd = "1000"
//data-children_tag = "a"
//>
//<div id="left" style="position: absolute; left: 0; top: 0; width: 30px; height: 30px; background: #f00;"></div>
//<div id="right" style="position: absolute; right: 0; top: 0; width: 30px; height: 30px; background: #f00;"></div>
//<div id="main" style="width: 400px; height: 300px; margin: 0 50px; background: #ccc;">
//<a><img src="" alt="1" /></a>
//<a><img src="" alt="2" /></a>
//<a><img src="" alt="3" /></a>
//<a><img src="" alt="4" /></a>
//</div>
//</div>


























$(document).ready(function () {
    TGOGO.run($("body"));
});


var TGOGO = {};
TGOGO.settings = {
    //要加载的图片地址前缀  想对于html地址
    resourceSrc: "image/",
    ajaxTimeOut: 60000,
    //调用的外部显示loading函数
    loadShow: function () {
        TGOGO.loading.show();
    },
    //调用的外部关闭loading函数
    loadHide: function () {
        TGOGO.loading.hide();
    },
    alert: function (msg) {
        alert(msg)
    }
};


//监听的class
TGOGO.className = "__TGOGO__";
TGOGO.run = function (obj) {
    var _this = this;
    obj.find("." + _this.className).each(function () {
        var this_obj = $(this),
            type = this_obj.data("type");

        if (!this.__isRun__) {
            this.__isRun__ = true;
            if (type && _this.hasOwnProperty(type)) {
                _this[type](this_obj);
            }
        }
    });
};





//*****************************************************
//触发其它元素的绑定
//*****************************************************
TGOGO.trigger = function(obj){
    var id = obj.data("trigger_id"),
        type = obj.data("trigger_type");

    obj[type](function(){
        $("#"+id).trigger("click");
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

        this.winWidth = parseInt(this.win.width());
        this.winHeight = parseInt(this.win.height());

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
                $(this).css(DEVICE.fixObjCss({
                    "background-size":"100% 100%"
                }))
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


            if(this.direction == "x"){
                this.body.css({
                    width: width + "px",
                    height: "100%"
                });
                this.body.find("a").css({
                    width: this.winWidth + "px",
                    height: "100%"
                })
            }else{
                this.body.css({
                    width: "100%",
                    height: height + "px"
                });
                this.body.find("a").css({
                    width: "100%",
                    height: this.winHeight + "px"
                })
            }




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
            if (this.touchStartTime == 0) {
                return;
            }

            var t_left = this.leftPx + pointsx;
            this.body.css({
                left: t_left + "px"
            });
        },
        endEvent: function () {
            if (this.touchStartTime == 0) {
                this.scrollBack();
                return;
            }
            if (this.touchPoints.length < 2) {
                this.scrollBack();
                return;
            }

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
TGOGO.bannerScroll = function (obj) {
    var body = $("<div></div>");
    //body.addClass("auto_size");
    obj.append(body);
    body.append(obj.find("a"));


    var direction = obj.data("direction") || "x",
        changeTime = obj.data("changeTime") || 5000,
        animateTime = obj.data("animateTime") || 1000;

    new this.banner_scroll_fn({
        win: obj,
        body: body,
        direction: direction,
        time: changeTime,
        animateTime: animateTime
    });
};


//*****************************************************
//富文本编辑器
//*****************************************************
TGOGO.editDiv = function (obj) {
    var name = obj.attr("name"),
        fn_name = obj.data("fn_name"),
        val = obj.data("val") || "",
        width = parseInt(obj.width()),
        level = obj.data("level"),
        height = parseInt(obj.height());

    var myLevel = {
        "2": [ 'source', '|', 'undo', 'redo', '|', 'preview', 'cut', 'copy', 'paste',
            'plainpaste', 'wordpaste', '|', 'justifyleft', 'justifycenter', 'justifyright',
            'justifyfull', 'insertorderedlist', 'insertunorderedlist', 'indent', 'outdent', 'subscript',
            'superscript', 'clearhtml', 'quickformat', 'selectall', '|', 'fullscreen', '/',
            'formatblock', 'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold',
            'italic', 'underline', 'strikethrough', 'lineheight', 'removeformat', '|', 'image', 'table', 'hr', 'emoticons', 'baidumap', 'pagebreak',
            'anchor', 'link', 'unlink'],
        "1": [ 'undo', 'redo', '|', 'justifyleft', 'justifycenter', 'justifyright',
            'justifyfull', 'clearhtml', 'quickformat', '|',
            'emoticons', 'fontsize', 'forecolor', 'hilitecolor', 'bold',
            'italic', 'underline', 'strikethrough', 'lineheight', 'removeformat', '|', 'hr',
            'link', 'unlink']
    };
    level = myLevel[level] || myLevel[2];


    name = name || "__temp__divedit_" + DEVICE.counter();
    obj.attr({name: name});

    fn_name = fn_name || "__temp__divedit_fn_" + DEVICE.counter();

    KindEditor.ready(function (K) {
        window[fn_name] = K.create('textarea[name="' + name + '"]', {
            minHeight: height + "px",
            minWidth: width + "px",
            items: level
        });
        window[fn_name].html(val.toString());
    });
};


//*****************************************************
//滚动加载
//*****************************************************
TGOGO.scroll_load_fn = (function () {
    var device = DEVICE;
    var scroll_load = function (data) {
        this.ajaxFn = data.ajaxFn || function () {
        };
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
                if (_this.mainDiv.css("display") != "none") {
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
            this.ajaxFn = function () {
            };
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
TGOGO.scrollLoad = function (obj) {
    var button_length = obj.data("button_length") || 100,
        bind_data_fn = obj.data("bind_fn"),
        scroll_id = 0,
        scroll_key = obj.data("scroll_for_key"),
        search_data = obj.data("search_data"),
        ajax_url = obj.data("ajax_url"),
        _search_data = {},
        __obj;

    search_data = search_data.split(",");
    for (var i = 0, l = search_data.length; i < l; i++) {
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
                type: type,
                cache: false,
                url: ajax_url,
                data: data,
                contentType: "application/json",
                dataType: "json",
                timeout: 600000,
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                },
                success: function (rs) {
                    var state = rs.State;
                    if (state == 1) {
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
                    } else {
                        //失败
                        var msg = rs.Message;
                        __obj.ajaxError();
                    }
                },
                error: function (e) {
                    var state = e.status,
                        msg = "";

                    if (state == "404" || state == "500") {
                        msg = "服务器繁忙,请稍后在试!";
                    } else {
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
TGOGO.marquee_fn = (function () {
    var marquee = function (opt) {
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
        init: function () {
            this.addDom();

            if (!this.canMove) {
                return;
            }

            this.setCss();

            if (this.direction == "x") {
                this.run_x();
            } else {
                this.run_y();
            }


        },
        addDom: function () {
            var main = $("<div></div>"),
                body = $("<div></div>"),
                span = this.div.find("span"),
                main1,
                w = 0,
                h = 0;

            span.each(function () {
                w += parseInt($(this).width());
                h += parseInt($(this).height());
            });

            if (this.direction == "x" && this.width > w) {
                this.canMove = false;
                return;
            }
            if (this.direction == "y" && this.height > h) {
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
        setCss: function () {
            var span = this.obj1.find("span"),
                _height = 5,
                _width = 5;


            this.body.find("span").css({
                display: "block",
                float: (this.direction == "x") ? "left" : "none"
            });

            span.each(function () {
                _width += parseInt($(this).outerWidth(true));
                _height += parseInt($(this).outerHeight(true));
            });

            this.allWidth = _width;
            this.allHeight = _height;

            var body_w = (this.direction == "x") ? _width * 2 : this.width,
                body_h = (this.direction == "x") ? this.height : _height * 2,
                obj_w = (this.direction == "x") ? _width : this.width,
                obj_h = (this.direction == "x") ? this.height : _height;


            this.div.css({
                position: "relative",
                overflow: "hidden",
                width: this.width + "px",
                height: this.height + "px"
            });
            this.body.css({
                position: "absolute",
                left: 0,
                top: 0,
                width: body_w + "px",
                height: body_h + "px"
            });

            this.obj1.css({
                float: (this.direction == "x") ? "left" : "none",
                width: obj_w + "px",
                height: obj_h + "px"
            });
            this.obj2.css({
                float: (this.direction == "x") ? "left" : "none",
                width: obj_w + "px",
                height: obj_h + "px"
            });
        },
        run_x: function () {
            var time = this.allWidth / this.spd * 1000,
                _this = this;


            var fn = function () {
                _this.body.animate({
                    left: -_this.allWidth + "px"
                }, time, "linear", function () {
                    _this.body.css({left: 0});
                    fn();
                })
            };
            fn();
        },
        run_y: function () {
            var time = this.allHeight / this.spd * 1000,
                _this = this;

            var fn = function () {
                _this.body.animate({
                    top: -_this.allHeight + "px"
                }, time, "linear", function () {
                    _this.body.css({top: 0});
                    fn();
                })
            };
            fn();
        }
    };

    return marquee;
})();
TGOGO.marquee = function (obj) {
    var direction = obj.data("direction"),
        spd = obj.data("spd");

    new this.marquee_fn({
        div: obj,
        direction: direction,
        spd: spd
    });

};


//*****************************************************
//商品详情内图片自适应
//*****************************************************
TGOGO.imgAutoResize_fn = function (obj) {
    var imgs = obj.find("img");

    var setImg = function (img) {
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

    $(window).resize(function () {
        imgs.each(function () {
            var this_img = $(this),
                width = this_img.attr("my_width"),
                height = this_img.attr("my_height");

            if (width) {
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
TGOGO.imgAutoResize = function (obj) {
    TGOGO.imgAutoResize_fn(obj);
};


//*****************************************************
//图片自适应div大小  一个div内一个图片的情况
//*****************************************************
TGOGO.imgFixedDiv_fn = function (obj) {
    var imgs = obj.find("img");

    var setImg = function (img) {
        var src = img.attr("src"),
            new_img = new Image();

        img.attr({ src: "" });

        new_img.onload = function () {
            var main_width = parseInt(obj.width()),
                main_height = parseInt(obj.height());

            var width = new_img.width,
                height = new_img.height,
                new_size = TGOGO.__getNewImageSize(width, height, main_width, main_height);

            img.css({
                width: new_size.width + "px",
                height: new_size.height + "px",
                position: "relative",
                left: (main_width - new_size.width) / 2 + "px",
                top: (main_height - new_size.height) / 2 + "px"
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

    $(window).resize(function () {
        imgs.each(function () {
            var this_img = $(this),
                width = this_img.attr("my_width"),
                height = this_img.attr("my_height");

            if (width) {
                var main_width = parseInt(obj.width()),
                    main_height = parseInt(obj.height()),
                    new_size = TGOGO.__getNewImageSize(width, height, main_width, main_height);

                this_img.css({
                    width: new_size.width + "px",
                    height: new_size.height + "px",
                    position: "relative",
                    left: (main_width - new_size.width) / 2 + "px",
                    top: (main_height - new_size.height) / 2 + "px"
                })
            }
        });
    })


};
TGOGO.imgFixedDiv = function (obj) {
    TGOGO.imgFixedDiv_fn(obj);
};


//*****************************************************
//图片上传按钮  后端程序需要集成进来
//*****************************************************
TGOGO.uploadImage_fn = (function () {
    var upload_file = function (opt) {
        this.inputId = opt.id;
        this.formId = opt.formId;
        this.showImageWrapId = opt.showImageWrapId;
        this.types = opt.types;
        this.serverSrc = opt.serverSrc;
        this.maxNumber = opt.maxNumber;
        this.imgs = opt.imgs;
        this.imgWidth = opt.pictureWidth;
        this.imgHeight = opt.pictureHeight;
        this.pictureShowUrl = opt.pictureShowUrl;
        this.hideInput = opt.hideInput;

        this.className = null;
        this.upLoadNumber = 0;


        this.init();
    };
    upload_file.prototype = {
        init: function () {
            this.addEvent();
            this.showStartImage();
        },
        //获取自身类名,必须实例化为 window.XXX
        getClassName: function () {
            for (var a in window) {
                if (window[a] === this) {
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

            if (this.upLoadNumber >= this.maxNumber) {
                alert("只能上传" + this.maxNumber + "张图片!");
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
                action: this.serverSrc + "?class=" + this.className + "&t=" + t,
                enctype: "multipart/form-data",
                method: "post"
            });
            $("body").append(iframe);

            //            $("#"+this.inputId).wrap(form);
            //            $(form).append("<input type='text' value='123' name='test1'>");

//            $.loadShow();
            if (TGOGO.settings && TGOGO.settings.loadShow) {
                TGOGO.settings.loadShow();
            }
            form.submit();
        },
        //提交成功回调
        oldSuccess: function (rs) {
//            $.loadHide();
            if (TGOGO.settings && TGOGO.settings.loadHide) {
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
        showImg: function (src, callback) {
            src = this.pictureShowUrl + src;

            var img = new Image(),
                _this = this;

            callback = callback || function () {
            };

            var div = $("<div></div>");
            div.css({
                width: this.imgWidth + "px",
                height: this.imgHeight + 22 + "px",
                float: "left",
                margin: "10px"
            }).addClass("__upload_temp__");
            var div1 = $("<div></div>"),
                div2 = $("<div>删 除</div>"),
                div3 = $("<div></div>");

            div1.css({
                width: "100%",
                height: this.imgHeight + "px"
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

            $("#" + _this.showImageWrapId).append(div);
            callback();
            img.onload = function () {

                var width = img.width,
                    height = img.height,
                    new_size = TGOGO.__getNewImageSize(width, height, _this.imgWidth, _this.imgHeight);


                var temp_top = (_this.imgHeight - new_size.height) / 2,
                    temp_left = (_this.imgWidth - new_size.width) / 2;

                $(img).css({
                    margin: temp_top + "px " + temp_left + "px",
                    width: new_size.width + "px",
                    height: new_size.height + "px"
                });


            };
            img.src = src;
            div1.append(img);
            this.setHideInputVal();
        },
        //初始显示图片
        showStartImage: function () {
            var data = this.imgs,
                _this = this;

            var go = function () {
                if (data.length != 0) {
                    var this_src = data.shift();
                    _this.upLoadNumber++;
                    _this.showImg(this_src, go);
                }
            };

            go();
        },
        //删除图片
        delOne: function () {
            this.upLoadNumber--;
            this.setHideInputVal();
        },
        delAll: function () {
            this.upLoadNumber = 0;
            $("#" + this.showImageWrapId).html("");
            this.setHideInputVal();

        },
        setHideInputVal: function () {
            var input = this.hideInput,
                imgs = $("#" + this.showImageWrapId).find("img"),
                vals = [];

            imgs.each(function () {
                var name = $(this).attr("src");
                name = name.substr(name.lastIndexOf("\/") + 1);
                vals.push(name);
            });

            input.val(vals.join(","));

        }
    };

    return upload_file;

})();
TGOGO.uploadImage = function (obj) {
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
        form_id = "_temp_uploadImage_from_" + id,
        input_id = "_temp_uploadImage_input_" + id,
        form = $("<form id='" + form_id + "'></form>"),
        hide_input = $("<input type='hidden' name='" + hide_input_name + "'  value='" + has_picture + "'>"),
        input = $("<input hidefocus id='" + input_id + "' type='file' name='file' />");
    has_picture = (!has_picture || $.trim(has_picture) == "") ? [] : has_picture.split(",");

    obj.css({
        overflow: "hidden",
        position: "relative"
    });
    input.css({
        position: "absolute",
        left: 0,
        top: 0,
        "outline": 0,
        "font-size": "300px",
        width: "100%",
        height: parseInt(obj.height()) + "px",
        opacity: 0,
        cursor: "pointer",
        border: "none"
    });
    form.append(input).append(hide_input);
    obj.append(form);

    var _temp_name = "_temp_uploadImage_fn_" + id;
    obj.attr({fn_name: _temp_name});

    window[_temp_name] = new TGOGO.uploadImage_fn({
        id: input_id,      //input[type='file']的 id   @param:str
        formId: form_id,              //表单id                     @param:str
        types: write_list,       //上传文件类型                @param:str
        maxNumber: max_number,                //最大能上传好多张图片          @param:int
        //服务器地址                  @param:str
        serverSrc: serverUrl,
        showImageWrapId: show_picture_id,      //图片上传完后显示区域id        @param:str
        imgs: has_picture,                  //已存在的图片                 @param:array
        pictureWidth: picture_width,        //显示图片大小
        pictureHeight: picture_height,
        pictureShowUrl: picture_show_url,    //图片显示地址
        hideInput: hide_input                //隐藏文本框保存当前的图片地址
    });
};


//*****************************************************
//弹出居中层
//*****************************************************
TGOGO.showCenterDiv_fn = (function () {
    //var wrap_bg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gkMDRAo1IkjzgAAAA1JREFUCNdj+P//fwMACXwDfrW+dCcAAAAASUVORK5CYII=";
    var wrap_bg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRDMTUzQTYzNjk2QjExRTRBMTJBRjU1NjlCNkVBMDVGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjRDMTUzQTY0Njk2QjExRTRBMTJBRjU1NjlCNkVBMDVGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NEMxNTNBNjE2OTZCMTFFNEExMkFGNTU2OUI2RUEwNUYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NEMxNTNBNjI2OTZCMTFFNEExMkFGNTU2OUI2RUEwNUYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6tD5QsAAAAD0lEQVR42mJiYGCQAggwAAApAB1BPs+SAAAAAElFTkSuQmCC";
    var showDiv = function (opt) {
        this.wrap = null;
        this.zz = null;
        this.div = opt.div;
        this.closeRun = opt.closeRun;
        this.closeBtnClass = opt.closeBtnClass;

        if (typeof(this.div) === "string") {
            this.div = $("#" + this.div).css({display: "block"});
        } else {
            this.div = this.div.css({display: "block"});
        }


        this.zIndex = opt.zIndex || 1000;
        this.init();
    };
    showDiv.prototype = {
        init: function () {
            this.createZZ();
            this.createWrap();

            this.wrap.append(this.div);
            this.addEvent();
            this.show();

        },
        createWrap: function () {
            var div = $("<div></div>");
            div.css(DEVICE.fixObjCss({
                padding: "10px",
                background: "url(" + wrap_bg + ")",
                "border-radius": "5px",
                "z-index": this.zIndex + 1,
                position: "fixed",
                left: "50%",
                top: "50%"
            }));
            this.wrap = div;
        },
        createZZ: function () {
            var div = $("<div></div>");
            div.css({
                width: "100%",
                height: "100%",
                background: "#000",
                opacity: 0,
                position: "fixed",
                left: 0,
                top: 0,
                "z-index": this.zIndex
            });
            this.zz = div;
        },
        addEvent: function () {
            var _this = this;
            this.zz.click(function () {
                _this.destroy();
            });
            this.wrap.click(function (e) {
                e.stopPropagation();
//                e.preventDefault();
            });

            if(!this.closeBtnClass){return;}
            this.div.find("."+this.closeBtnClass).click(function(){
                _this.destroy();
            })
        },
        show: function () {
            $("body").append(this.zz).append(this.wrap);
            TGOGO.run(this.div);
            this.zz.animate({
                opacity: 0.2
            }, 500);
            var width = parseInt(this.div.width()) + 20,
                height = parseInt(this.div.height()) + 20;
            this.wrap.css({
                "margin-top": -height / 2 + "px",
                "margin-left": -width / 2 + "px"
            })
        },
        destroy: function () {
            if (this.div) {
                $("body").append(this.div.css({display: "none"}));
            }

            if (this.zz) {
                this.zz.unbind("click");
                this.zz.remove();
            }
            if (this.wrap) {
                this.wrap.unbind("click");
                this.wrap.remove();
            }

            if(this.closeBtnClass){
                this.div.find("."+this.closeBtnClass).unbind("click");
            }

            this.zz = null;
            this.wrap = null;
            this.div = null;
            this.closeRun();
        }
    };
    return showDiv;
})();
TGOGO.showCenterDiv = function (obj) {
    var event = obj.data("show_event"),
        id = obj.data("center_div_id"),
        z_index = obj.data("z_index"),
        after_close_run = obj.data("after_close_run"),
        before_show_run = obj.data("before_show_run"),
        close_btn_class = obj.data("close_btn_class") || "",
        _this = this,
        _id = DEVICE.counter(),
        fn_name = "_temp_showCenterDiv_fn_" + _id;

    obj.attr({"fn_name": fn_name});
    after_close_run = (after_close_run) ? window[after_close_run] : function () {
    };
    before_show_run = (before_show_run) ? window[before_show_run] : function () {
    };

    DEVICE.addEvent(obj.get(0), event, function () {
        before_show_run(obj);
        window[fn_name] = new _this.showCenterDiv_fn({
            div: id,
            zIndex: z_index,
            closeRun: after_close_run,
            closeBtnClass:close_btn_class
        });
    });

};


//*****************************************************
//时间选择控件
//*****************************************************
TGOGO.dataInput = function (obj) {
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
    username: /^[a-zA-Z0-9][a-zA-Z0-9_]*$/,
    nickname: /^.+$/,
    password: /^[a-zA-Z0-9]*$/,
    mobile: /^[1]\d*$/,
    email: /^[a-zA-Z0-9][a-zA-Z0-9-_\.]*@[a-zA-Z0-9_-]*\.[a-zA-Z0-9]*$/,
    number: /^[0-9]*$/
};
TGOGO.__checkForm_fn = function (obj, opt, opt1) {
    var data = {},
        err = [],
        _this = this;

    for (var i = 0, l = opt.length; i < l; i++) {
        opt[i].each(function () {
            var back = _this.__checkInput_fn($(this));
            if (!back) {
                err.push({
                    obj: $(this),
                    msg: $(this).data("error_info") || "输入的数据格式不正确！"
                })
            } else {
                var name = $(this).attr("name");
                data[name] = $.trim($(this).val());
            }
        });
    }

    //处理checkbox和radio
    //获取name
    var name = {};
    for (var z = 0, zl = opt1.length; z < zl; z++) {
        opt1[z].each(function () {
            var this_name = $(this).attr("name");
            if (this_name && !name.hasOwnProperty(this_name)) {
                name[this_name] = true;
            }
        })
    }


    //按名字
    for (var key in name) {
        if (name.hasOwnProperty(key)) {
            var this_obj = obj.find("input[name='" + key + "']"),
                this_data = [];
            this_obj.each(function () {
                if ($(this).get(0).checked) {
                    this_data.push($.trim($(this).val()));
                }
            });
            data[key] = this_data.join(",");
        }
    }


    return {
        err: err,
        data: data
    }

};
TGOGO.__checkInput_fn = function (obj) {
    var rule = obj.data("rule") || null,
        val = $.trim(obj.val()),
        rule_text = "," + rule + ",";

    if (!rule) {
        return true;
    }

    rule = rule.split(",");

    //如果值为空
    if (val == "") {
        return (!(rule_text.indexOf(",must,") > -1));
    }

    //如果值不为空
    for (var i = 0, l = rule.length; i < l; i++) {
        var this_rule = rule[i];
        if (this_rule == "must") {
            continue;
        }

        //检查长度
        if (this_rule.substr(0, 3) == "max") {
            var max = this_rule.split(":");
            max = (max.length == 2) ? max[1] : 0;
            if (val.length > max) {
                return false;
            }
        }
        if (this_rule.substr(0, 3) == "min") {
            var min = this_rule.split(":");
            min = (min.length == 2) ? min[1] : 0;
            if (val.length < min) {
                return false;
            }
        }

        //检查正则
        this_rule = this.__rule_list_fn[this_rule];
        if (this_rule) {
            if (!this_rule.test(val)) {
                return false;
            }
        }
    }

    return true;
};
TGOGO.__submitForm_fn = function (opt) {
    var src = opt.src,
        type = opt.ajax_type,
        timeout = opt.ajax_timeout,
        success = opt.success,
        error = opt.error,
        data = opt.data;

    TGOGO.loading.show("loading...");
    $.ajax({
        type: type,
        cache: false,
        url: src,
        data: data,
//        headers:header,
        contentType: "application/json",
        dataType: "json",
        timeout: timeout,
        success: function (rs) {
            TGOGO.loading.hide();
            success(rs);
        },
        error: function (e) {
            TGOGO.loading.hide();
            var state = e.status,
                msg = "";

            if (state == "500") {
                msg = "服务器繁忙,请稍后在试!";
            } else {
                msg = "无法连接服务器";
            }

            error(msg);
        }
    });


};
TGOGO.ajaxSubmit = function (obj) {
    var ajax_src = obj.data("ajax_src") || "/",
        ajax_type = obj.data("ajax_type") || "post",
        ajax_timeout = obj.data("ajax_timeout") || TGOGO.settings.ajaxTimeOut,
        ajax_success_fn = obj.data("ajax_success_fn"),
        ajax_error_fn = obj.data("ajax_error_fn"),
        check_error_fn = obj.data("check_error_fn"),
        check_before_fn = obj.data("check_before_fn"),
        _this = this,
        submit = obj.find("input[type='submit']");


    var check_fn = function () {
        var text = obj.find("input[type='text']"),
            textarea = obj.find("textarea"),
            select = obj.find("select"),
            checkbox = obj.find("input[type='checkbox']"),
            radio = obj.find("input[type='radio']");


        if (window[check_before_fn]) {
            var result = window[check_before_fn]();
            if (!result) {
                return;
            }
        }

        var return_obj = _this.__checkForm_fn(obj, [text, textarea, select], [checkbox, radio]);

        if (return_obj.err.length == 0) {
            //提交数据
            var data = return_obj.data;
            _this.__submitForm_fn({
                data: data,
                src: ajax_src,
                ajax_type: ajax_type,
                ajax_timeout: ajax_timeout,
                success: function (rs) {
                    if (window[ajax_success_fn]) {
                        window[ajax_success_fn](rs);
                    }
                },
                error: function (msg) {
                    if (window[ajax_error_fn]) {
                        window[ajax_error_fn](msg);
                    }
                }
            })
        } else {
            //检查出错
            var err = return_obj.err;
            if (window[check_error_fn]) {
                window[check_error_fn](err);
            }
        }
    };


    if (submit.length != 0) {
        submit.click(function () {
            check_fn();
        });
    }
};


//*****************************************************
//鼠标悬停显示右浮动层  处理顶部和底部自适应
//*****************************************************
TGOGO.__showFloatDiv = (function () {
    var showFloat = function (obj, div, direction) {
        this.obj = obj;
        this.div = div;
        this.direction = direction;

        this.obj_height = parseInt(this.obj.height());
        this.obj_width = parseInt(this.obj.width());
        this.div_width = parseInt(this.div.width());
        this.div_height = parseInt(this.div.height());

        this.init();
    };
    showFloat.prototype = {
        init: function () {
            this.setDiv();
            this.eventBind();
        },
        setDiv: function () {
            this.div.css({
                position: "absolute"
            });
            this.obj.css({
                position: "relative"
            })
        },
        eventBind: function () {
            var _this = this;
            this.obj.hover(function () {
                _this.showDiv();
            }, function () {
                _this.hideDiv();
            });
        },
        showDiv: function () {
            var y = this.getPositionY(),
                x = this.getPositionX();


            this.obj.append(this.div);
            this.div.css({
                top: y + "px",
                display: "block",
                left: x + "px"
            })


        },
        hideDiv: function () {
            this.div.css({
                display: "none"
            })
        },
        getPositionY: function () {
            var scroll_top = parseInt($(document).scrollTop()),
                scroll_left = parseInt($(document).scrollLeft()),
                obj_top = parseInt(this.obj.offset().top),
                obj_left = parseInt(this.obj.offset().left),
                win_height = parseInt($(window).height()),
                win_width = parseInt($(window).width()),
                obj_bottom, obj_right;

            //元素中心点对屏幕顶部距离
            obj_top = obj_top - scroll_top + this.obj_height / 2;
            obj_bottom = win_height - obj_top;
            obj_left = obj_left - scroll_left + this.obj_width / 2;
            obj_right = win_width - obj_left;


            if (this.direction == "right" || this.direction == "left") {
                //居中显示
                if (obj_top >= this.div_height / 2 && obj_bottom >= this.div_height / 2) {
                    return -(this.div_height - this.obj_height) / 2;
                }


                //距屏幕底部显示
                if (obj_top >= this.div_height / 2 && obj_bottom <= this.div_height / 2) {
                    return -(this.div_height - obj_bottom - this.obj_height / 2);
                }


                //距屏幕顶部显示
                if (obj_top <= this.div_height / 2 && obj_bottom >= this.div_height / 2) {
                    return  -(obj_top - this.obj_height / 2);
                }


                //div窗口高度高于window高度  距离顶部显示
                return obj_top - this.obj_height / 2;
            }

            if (this.direction == "top") {
                return -this.div_height;
            }

            if (this.direction == "bottom") {
                return this.obj_height;
            }


        },
        getPositionX: function () {
            if (this.direction == "right") {
                return this.obj_width;
            }

            if (this.direction == "left") {
                return -this.div_width;
            }

            //左右　返回0
            return 0;

        }


    };

    return showFloat;
})();
TGOGO.showFloatDiv = function (obj) {
    var div_id = obj.data("show_div_id"),
        direction = obj.data("direction") || "right";

    if (!div_id) {
        return;
    }
    var show_div = $("#" + div_id);
    if (show_div.length != 1) {
        return;
    }

    new TGOGO.__showFloatDiv(obj, show_div, direction);
};


//*****************************************************
//tab切换显示
//*****************************************************
TGOGO.tabChange = function (obj) {
    var divs = obj.data("add_event_class"),
        select_class = obj.data("select_class"),
        start_select = obj.data("selected") || 0,
        event_name = obj.data("event_name") || "click",
        get_div_id_from = obj.data("get_id_attr");
    divs = obj.find("." + divs);
    divs.css({
        cursor: "pointer"
    });

    if (divs.length == 0) {
        return;
    }


    var show = function (div) {
        var id = div.data(get_div_id_from);
        $("#" + id).css({
            display: "block"
        });
        div.addClass(select_class);
    };

    var hide = function (div) {
        var id = div.data(get_div_id_from);
        $("#" + id).css({
            display: "none"
        });
        div.removeClass(select_class);
    };

    var go = function (div) {
        divs.each(function () {
            hide($(this));
        });
        show(div);
    };

    divs[event_name](function () {
        go($(this));
    });


    var start_div = divs.eq(start_select);

    go(start_div);

};


//*****************************************************
//级联菜单   关联的ｊｓ  area.js　　　　检查部分需要使用自动提交的插件　　否则自己写检查程序
//*****************************************************
TGOGO.__cascadeSelectFn = (function () {
    var _select = function (rs) {
        this.data = rs.data;
        this.name = rs.name;
        this.value = rs.value;
        this.ts = rs.ts;
        this.body = rs.obj;
        this.must = rs.must;        //需要使用ajax提交插件
        this.errInfo = rs.err;

        this.selects = [];
        this.init();
    };

    _select.prototype = {
        init: function () {
            this.createElement();
            this.clearOption();
            this.createOption();
            this.addEvent();
        },
        createElement: function () {
            for (var i = 0, l = this.name.length; i < l; i++) {
                var this_name = this.name[i],
                    this_select = $("<select name='" + this_name + "'></select>");

                //最后一个select 添加检查
                if (i == this.name.length - 1) {
                    this_select.data({rule: "must"});
                    if (this.errInfo != "") {
                        this_select.data({err_msg: this.errInfo});
                    }
                }

                this.selects.push(this_select);
                this.body.append(this_select);
            }
        },
        clearOption: function () {
            for (var i = 0, l = this.selects.length; i < l; i++) {
                this.selects[i].html("");
            }
        },
        createOption: function () {
            var data = this.data,
                now_data = [];

            for (var i = 0, l = this.selects.length; i < l; i++) {
                var this_select = this.selects[i],
                    this_val = this.value[i] || "",
                    this_ts = this.ts[i] || "请选择",
                    this_html = [];

                this_html.push("<option value=''>" + this_ts + "</option>");
                for (var z = 0, zl = data.length; z < zl; z++) {
                    var this_id = data[z].id,
                        this_name = data[z].areaName;

                    if (this_id == this_val) {
                        this_html.push("<option value='" + this_id + "' selected>" + this_name + "</option>");
                        now_data = data[z].children;
                    } else {
                        this_html.push("<option value='" + this_id + "'>" + this_name + "</option>");
                    }
                }

                this_select.html(this_html.join(""));

                data = now_data;
            }
        },
        addEvent: function () {
            var _this = this;

            for (var i = 0, l = this.selects.length - 1; i < l; i++) {
                this.selects[i].attr({my_no: i});
                this.selects[i].change(function () {
                    var my_no = $(this).attr("my_no");
                    _this.value[my_no] = $(this).val();
                    _this.clearOption();
                    _this.createOption();
                });
            }
        }
    };

    return _select;
})();
TGOGO.cascadeSelect = function (obj) {
    var data = obj.data("source") || "",
        select_name = obj.data("select_name") || "",
        select_value = obj.data("select_value") || "",
        empty_val = obj.data("empty_val") || "",
        rule = (obj.data("must_select") == "true"),
        err = obj.data("error_info") || "";


    if (data == "" || select_name == "") {
        return;
    }


    select_name = select_name.split(",");
    select_value = select_value.split(",");
    empty_val = empty_val.split(",");


    if (!window[data]) {
        return;
    }
    data = window[data];

    new this.__cascadeSelectFn({
        data: data,
        name: select_name,
        value: select_value,
        ts: empty_val,
        obj: obj,
        must: rule,
        err: err
    })


};


//*****************************************************
//验证码倒计时
//*****************************************************
TGOGO.__countdownButtonFn = (function () {
    var countdownButton = function (opt) {
        this.obj = opt.obj;
        this.runFn = opt.runFn || function () {
        };
        this.countdownTime = opt.countdownTime || 10;
        this.getValueId = opt.getValueId;
        this.hoverClass = opt.hoverClass;
        this.canNotClickClass = opt.canNotClickClass;
        this.showText = "剩余x秒";


        this.input = $("#" + this.getValueId);
        if (this.input.length == 0) {
            return;
        }


        this.text = this.obj.text();
        this.canClick = true;
        this.interval = null;
        this.now_t = this.countdownTime;


        if (this.obj.length == 0) {
            return;
        }

        this.init();

    };
    countdownButton.prototype = {
        init: function () {
            this.addEvent();
        },
        addEvent: function () {
            var _this = this;
            this.obj.click(function () {
                //检查输入框
                var pass = TGOGO.__checkInput_fn(_this.input);
                if (!pass) {
                    var text = _this.input.data("error_info");
                    TGOGO.settings.alert(text);
                    return;
                }

                //是否在倒计时
                if (!_this.canClick) {
                    return;
                }


                //ajax请求
                _this.runFn();

            });
            this.obj.hover(function () {
                $(this).addClass(_this.hoverClass);
            }, function () {
                $(this).removeClass(_this.hoverClass);
            });
        },

        showCountdown: function () {
            var _this = this;
            this.interval = setInterval(function () {
                if (_this.now_t == 0) {
                    clearInterval(_this.interval);
                    _this.canClick = true;
                    _this.obj.removeClass(_this.canNotClickClass);
                    _this.obj.text(_this.text);
                    _this.now_t = _this.countdownTime;
                } else {
                    _this.now_t--;
                    var text = _this.showText.replace("x", _this.now_t);
                    _this.obj.text(text);
                }
            }, 1000);
        },
        ajaxSuccess: function () {
            this.obj.addClass(this.canNotClickClass);
            this.canClick = false;
            this.showCountdown();
        }
    };

    return countdownButton;

})();
TGOGO.countdownButton = function (obj) {
    var ajaxFn = obj.data("click_run_fn"),
        inputId = obj.data("input_id"),
        show_text = obj.data("show_text"),
        hover_class = obj.data("hover_class"),
        can_not_click_class = obj.data("can_not_click_class"),
        countdown_time = obj.data("countdown_time"),
        fn_name = "__countdownButton__" + DEVICE.counter();

    obj.data({fn_name: fn_name});
    ajaxFn = window[ajaxFn];

    window[fn_name] = new TGOGO.__countdownButtonFn({
        obj: obj,
        runFn: ajaxFn,
        countdownTime: countdown_time,
        getValueId: inputId,
        show_text: show_text,
        hoverClass: hover_class,
        canNotClickClass: can_not_click_class
    });

};






//*****************************************************
//产品图横向滚动 (循环显示)
//*****************************************************
TGOGO.__productScroll = (function(){
    var productScroll = function(opt){
        this.leftBtn = opt.left_button;     //左边按钮
        this.rightBtn = opt.right_button;   //右边按钮
        this.main = opt.main;               //主容器
        this.spd = opt.spd;                 //滚动一个商品的时间
        this.childrenTag = opt.children;       //子元素tag
        this.body = null;                   //子元素包裹层

        this.main_width = parseInt(this.main.width());      //包裹容器的宽度
        this.main_height = parseInt(this.main.height());
        this.childrens = this.main.find(this.childrenTag);

        this.children_number = this.childrens.length;  //子元素数量

        //没有子产品  返回
        if(this.children_number == 0){
            return;
        }
        this.children_width = this.childrens.eq(0).outerWidth();  //子元素的宽度,没有计算margin值
        this.childrens_width = this.children_number * this.children_width;      //所有子元素的宽度

        //判断是否放满容器，没放满结束
        if(this.main_width > this.childrens_width){
            return;
        }

        this.isMove = false;
        this.init();
    };
    productScroll.prototype = {
        init:function(){
            this.setDiv();
            this.bindEvent();
        },
        setDiv:function(){
            this.main.css({
                width:this.main_width + "px",
                height:this.main_height + "px",
                overflow:"hidden",
                position:"relative"
            });

            var body = $("<div></div>");
            body.css({
                width:this.childrens_width + this.children_width + "px",
                height:this.main_height + "px",
                position:"absolute",
                left:0,
                top:0
            });

            body.append(this.childrens);
            this.main.append(body);

            this.body = body;
        },
        bindEvent:function(){
            var _this = this;
            this.leftBtn.click(function(){
                _this.leftMove();
            });
            this.rightBtn.click(function(){
                _this.rightMove();
            });
        },
        leftMove:function(){
            if(this.isMove){return;}
            this.isMove = true;

            var first_children = this.main.find(this.childrenTag).eq(0),
                clone = first_children.clone(),
                _this = this;

            this.body.append(clone);
            this.body.animate({
                left:- _this.children_width + "px"
            },this.spd,function(){
                first_children.remove();
                _this.body.css({left:0});
                _this.isMove = false;
            })
        },
        rightMove:function(){
            if(this.isMove){return;}
            this.isMove = true;

            var first_children = this.main.find(this.childrenTag).eq(0),
                end_children = this.main.find(this.childrenTag).eq(this.children_number-1),
                clone = end_children.clone(),
                _this = this;

            clone.insertBefore(first_children);
            this.body.css({
                left:-_this.children_width + "px"
            });

            this.body.animate({
                left:0
            },this.spd,function(){
                end_children.remove();
                _this.isMove = false;
            })
        }
    };

    return productScroll;
})();
TGOGO.productScroll = function(obj){
    var left_button_id = obj.data("left_button_id"),
        right_button_id = obj.data("right_button_id"),
        main_id = obj.data("show_area_id"),
        scroll_spd = obj.data("scroll_spd"),
        children = obj.data("children_tag"),
        left_button = $("#"+left_button_id),
        right_button = $("#"+right_button_id),
        main = $("#"+main_id);

    if(main.length == 0 ){return;}


    new TGOGO.__productScroll({
        left_button:left_button,
        right_button:right_button,
        main:main,
        spd:scroll_spd,
        children:children
    })
};






//*****************************************************
//数量输入框   带+，-控制
//*****************************************************
TGOGO.__numberControl = (function(){
    var numberControl = function(opt){
        this.max = opt.max;
        this.min = opt.min;
        this.input = opt.input;
        this.addClass = opt.add_class;
        this.changeFn = opt.changeFn || function(){};

        this.add = null;
        this.lower = null;

        this.init();
    };
    numberControl.prototype = {
        init:function(){
            this.addButton();
            this.addEvent();
        },
        addButton:function(){
            var add = $("<div>+</div>"),
                lower = $("<div>-</div>"),
                css = {
                    display:"inline-block",
                    width:"15px",
                    height:"15px",
                    "line-height":"15px",
                    color:"#333",
                    border:"1px solid #888",
                    "font-size":"12px",
                    "text-align":"center",
                    "font-weight":"blod",
                    cursor:"pointer",
                    "-webkit-user-select":"none",
                    "-moz-user-select":"none",
                    "-ms-user-select":"none",
                    "user-select":"none"
                };


            add.css(css).addClass(this.addClass);
            lower.css(css).addClass(this.addClass);
            add.insertAfter(this.input);
            lower.insertBefore(this.input);

            this.add = add;
            this.lower = lower;
        },
        addEvent:function(){
            var _this = this;
            this.add.click(function(){
                var val = $.trim(_this.input.val());
                val++;
                if(val > _this.max){
                    val = _this.max;
                }
                _this.input.val(val);
                _this.changeFn(_this.input);
            });
            this.lower.click(function(){
                var val = $.trim(_this.input.val());
                val--;
                if(val < _this.min){
                    val = _this.min;
                }
                _this.input.val(val);
                _this.changeFn(_this.input);
            });

            this.add.hover(function(){
                $(this).css({
                    color:"red",
                    border:"1px solid red"
                })
            },function(){
                $(this).css({
                    color:"#333",
                    border:"1px solid #888"
                })
            });
            this.lower.hover(function(){
                $(this).css({
                    color:"red",
                    border:"1px solid red"
                })
            },function(){
                $(this).css({
                    color:"#333",
                    border:"1px solid #888"
                })
            });


            DEVICE.addEvent(this.input.get(0),"input",function(){
                var val = $.trim(_this.input.val());
                if(val == "-" || val == ""){
                    _this.changeFn(_this.input);
                    return;
                }

                val = parseInt(val);
                if(val > _this.max){
                    val = _this.max;
                }
                if(val < _this.min){
                    val = _this.min;
                }
                _this.input.val(val);
                _this.changeFn(_this.input);
            });
        },
        refresh:function(){
            var val = $.trim(this.input.val());
            val = (val>this.max)? this.max : val;
            val = (val<this.min)? this.min : val;

            this.input.val(val);
        }
    };
    return numberControl;
})();
TGOGO.numberControl = function(obj){
    var max = obj.data("max_number"),
        min = obj.data("min_number"),
        changeFn = obj.data("change_fn"),
        add_class = obj.data("add_class"),
        fn_name = "__numberControl__"+DEVICE.counter();

    changeFn = window[changeFn] || function(){};
    obj.attr({fn_name:fn_name});

    window[fn_name] = new TGOGO.__numberControl({
        add_class:add_class,
        input:obj,
        max:max,
        min:min,
        changeFn:changeFn
    });


};






//*****************************************************
//复制按钮
//
//需要挂载
//<script src="js/plus/copy_text/ZeroClipboard.js"></script>
//*****************************************************
TGOGO.copyButton = function(obj){
    var swf_path = obj.data("swf_path") || "",
        input_id = obj.data("bind_input_id") || "",
        success = obj.data("copy_success_fn"),
        input,
        fn_name = DEVICE.counter();

    fn_name = "__temp__copyButton__" + fn_name;

    obj.attr({fn_name:fn_name});

    success = (window[success])?  window[success] : function(){};
    input = $("#"+input_id);

    if(input.length == 0){return;}


    //swf相对于html的位置
    ZeroClipboard.setMoviePath( swf_path + 'ZeroClipboard.swf' );
    //创建新的Zero Clipboard对象
    window[fn_name] = new ZeroClipboard.Client();
    // will be set later on mouseDown   //清空剪贴板
    window[fn_name].setText('');
    //设置鼠标移到复制框时的形状
    window[fn_name].setHandCursor( true );
    //启用css
    window[fn_name].setCSSEffects( false );
    //复制完成后的监听事件
    window[fn_name].addEventListener( 'complete', function(client, text) {
        success(text);
        // 复制一次后，hide()使复制按钮失效，防止重复计算使用次数
        //clip.hide();
    } );
    window[fn_name].addEventListener( 'mouseDown', function(client) {
        var tagname = obj.get(0).tagName;
        if(tagname == "input" || tagname == "textarea"){
            window[fn_name].setText( input.val() );
        }else{
            window[fn_name].setText( input.text() );
        }
    } );
    //id或dom
    window[fn_name].glue( obj.get(0) );
};








//*****************************************************
//带icon的下拉菜单
//*****************************************************
TGOGO.__iconSelect = (function(){
    var iconselect = function(opt){
        this.dom = opt.obj;

        this.width = parseInt(this.dom.width()) + 61;
        this.height = parseInt(this.dom.height()) - 2;
        this.rowNumber = 6;


        this.select = null;     //select dom
        this.lists = null;      //lists dom
        this.selected = null;   //显示的dom

        this.init();
    };
    iconselect.prototype = {
        init:function(){

            this.dom.css({display:"none"});

            this.createDom();

            this.createMain();

            this.createListDom();
            this.createList();

            this.createEvent();
        },
        //创建容器
        createDom:function(){
            var div = $("<div></div>");
            div.css({
                width:this.width + "px",
                height:this.height + "px",
                border:"1px solid #e5e5e5",
                position:"relative"
            });

            div.insertAfter(this.dom);
            this.select = div;


        },
        //创建主显示
        createMain:function(){
            var dom = this.createRowClone();
            this.select.append(dom);
            this.selected = dom;
        },
        //创建列表的容器
        createListDom:function(){
            var div = $("<div></div>");
            div.css({
                width:this.width + "px",
                "max-height":(this.height + 2) * this.rowNumber + "px",
                position:"absolute", left:"-1px", top: this.height  + "px",
                border:"1px solid #e5e5e5","z-index":"100000",
                background:"#fff",
                "overflow-y":"auto","overflow-x":"hidden",
                display:"none"
            });

            this.lists = div;
            this.select.append(div);
        },
        //创建行clone母版
        createRowClone:function(){
            var icon = $("<img src='' />"),
                text = $("<div></div>"),
                arrow = $("<span></span>"),
                div = $("<p></p>");

            icon.css({
                width:"20px",height:"20px",display:"block",float:"left",padding:"0 10px 0 5px",
                position:"relative",top:"3px", visibility: "hidden"
            });
            text.css({
                height:"28px","line-height":"28px",float:"left",color:"#666"
            });
            arrow.css({
                width:0,height:0,"border-top":"4px solid #666", float:"right", display:"block",
                "border-left":"4px solid transparent","border-right":"4px solid transparent",
                position:"relative", top:"11px","margin":"0 10px","font-size":0,
                "font-adjust":"none"
            });
            div.css({
                cursor:"pointer",width:"100%",height:"28px"
            });

            div.append(icon).append(text).append(arrow);
            return div;
        },
        createList:function(){
            var option = this.dom.find("option"),
                _this = this,
                selectDom = null,
                id = 0;

            option.each(function(){
                var icon = $(this).data("iconurl"),
                    text = $(this).text(),
                    dom = _this.createRowClone(),
                    isSelected = ($(this).attr("selected") == "selected");

                id++;

                $(this).attr({__id:id});
                dom.attr({__id:id});
                dom.find("span").remove();
                dom.find("div").text(text);
                if(icon){
                    dom.find("img").attr({src:icon}).css({
                        visibility: "visible"
                    });
                }

                //还未赋值的话默认取第一个
                if(!selectDom){
                    selectDom = $(this);
                }
                //如果是选中的就替换
                if(isSelected){
                    selectDom = $(this);
                }

                _this.lists.append(dom);
            });

            if(selectDom){
                var icon = selectDom.data("iconurl"),
                    text = selectDom.text();
                this.createSelected(icon,text);
            }
        },
        createSelected:function(icon,text){
            //赋值icon
            if(icon){
                this.selected.find("img").attr({src:icon}).css({
                    visibility: "visible"
                });
            }else{
                this.selected.find("img").css({visibility:"hidden"});
            }

            //赋值文本
            if(text){
                this.selected.find("div").text(text);
            }else{
                this.selected.find("div").text("");
            }
        },

        createEvent:function(){
            var _this = this,
                isShow = false;

            //select点击显示或关闭
            this.selected.click(function(e){
                e.stopPropagation();
                e.preventDefault();

                if(isShow){
                    isShow = false;
                    _this.lists.css({display:"none"});
                }else{
                    isShow = true;
                    _this.lists.css({display:"block"});
                }
            });

            //点菜单列表关闭并赋值  hover变色
            this.lists.find("p").click(function(e){
                e.stopPropagation();
                e.preventDefault();

                //ui赋值
                var icon = $(this).find("img").attr("src"),
                    text = $(this).text();
                _this.createSelected(icon,text);
                //select控件改变值
                var __id = $(this).attr("__id");
                _this.selectChange(__id);
                //关闭
                _this.lists.css({display:"none"});
                isShow = false;
            }).hover(function(){
                $(this).css({background:"#f5f5f5"});
            },function(){
                $(this).css({background:"#fff"});
            });


            //点其它地方关闭
            $("body").click(function(){
                if(!isShow){return;}
                _this.lists.css({display:"none"});
                isShow = false;
            })
        },
        //改变select的值
        selectChange:function(id){
            var lists = this.dom.find("option");
            lists.each(function(){
                var __id = $(this).attr("__id");
                if(__id == id){
                    $(this).attr({selected:"selected"});
                }else{
                    $(this).removeAttr("selected");
                }
            })
        }
    };
    return iconselect;
})();
TGOGO.iconSelect = function(obj){
    new TGOGO.__iconSelect({
        obj:obj
    })



};








//*****************************************************
//时间倒计时
//*****************************************************
TGOGO.__countDown = (function(){
    var countDown = function(opt){
        this.server_time = opt.server_time;
        this.start_time = opt.start_time;
        this.start_fn = opt.start_fn;

        this.body = opt.body;
        this.hourObj = opt.hour_obj;
        this.minuteObj = opt.minute_obj;
        this.secondObj = opt.second_obj;
        this.millisecondObj = opt.millisecond_obj;

        this.time = 1000;
        this.diffTime = this.server_time - new Date().getTime();
        this.fn = null;

        //要显示毫秒
        if(this.millisecondObj.length == 1){
            this.time = 100;
        }

        this.init();

    };
    countDown.prototype = {
        init:function(){
            this.run();
        },
        checkTime:function(now_time){
            var state = (now_time < this.start_time);

            if(!state){
                this.end();
                clearInterval(this.fn);
            }

            return state;
        },
        run:function(){
            var _this = this;

            this.fn = setInterval(function(){
                var now_time =  new Date().getTime() + _this.diffTime;
                if(!_this.checkTime(now_time)){return;}

                _this.setDom(_this.start_time - now_time);

            },this.time);
        },
        setDom:function(timestame){
            var h = parseInt(timestame / 3600000);
            timestame -= h*3600000;
            var m = parseInt(timestame / 60000);
            timestame -= m*60000;
            var s = parseInt(timestame / 1000);
            timestame -= s*1000;
            var hm = parseInt(timestame/100);

            this.hourObj.text(h);
            this.minuteObj.text(m);
            this.secondObj.text(s);
            if(this.millisecondObj.length == 1){
                this.millisecondObj.text(hm);
            }

        },
        end:function(){
            this.hourObj.text(0);
            this.minuteObj.text(0);
            this.secondObj.text(0);
            if(this.millisecondObj.length == 1){
                this.millisecondObj.text(0);
            }

            this.start_fn();
        }
    };
    return countDown;
})();
TGOGO.countDown = function(obj){
    var server_time = obj.data("server_time") || new Date().getTime(),
        start_time = obj.data("start_time"),
        start_fn = obj.data("start_fn") || "",
        hour_obj = obj.find("[data-show='hour']"),
        minute_obj = obj.find("[data-show='minute']"),
        second_obj = obj.find("[data-show='second']"),
        millisecond_obj = obj.find("[data-show='millisecond']");

    if(hour_obj.length != 1 || minute_obj.length != 1 || second_obj.length !=1){
        return;
    }

    start_fn = (start_fn && window[start_fn])? window[start_fn] : function(){};



    new TGOGO.__countDown({
        body:obj,
        server_time:server_time,
        start_time:start_time,
        start_fn:start_fn,
        hour_obj:hour_obj,
        minute_obj:minute_obj,
        second_obj:second_obj,
        millisecond_obj:millisecond_obj
    });

};






//*****************************************************
//点击显示隐藏div
//*****************************************************
TGOGO.showHideDiv = function(obj){
    var div_id = obj.data("id"),
        state = obj.data("start_state"),
        show_class = obj.data("show_class"),
        hide_class = obj.data("hide_class"),
        div = $("#"+div_id);

    if(div.length != 1){return}

    obj.css({cursor:"pointer"});

    if(state == "show"){
        div.css({display:"block"});
        obj.attr({is_show:"true"}).addClass(show_class).removeClass(hide_class);
    }else{
        div.css({display:"none"});
        obj.attr({is_show:"false"}).addClass(hide_class).removeClass(show_class);
    }


    obj.click(function(){
        if($(this).attr("is_show") == "true"){
            div.css({display:"none"});
            $(this).attr({is_show:"false"}).addClass(hide_class).removeClass(show_class);
        }else{
            div.css({display:"block"});
            $(this).attr({is_show:"true"}).addClass(show_class).removeClass(hide_class);
        }
    });
};






//*****************************************************
//分页控件
//*****************************************************
TGOGO.__pagination_fn = (function(){
    var pagination = function(opt){
        this.body = opt.body;
        this.maxPage = opt.max_page || 1;
        this.nowPage = opt.now_page || 1;
        this.color = opt.color || "#666";
        this.hoverColor = opt.hover_color || "#cf1e2c";
        this.background = opt.background || "#fff";
        this.hoverBackground = opt.hover_background || "#fff";
        this.urlParams = opt.url_params || [];
        this.pageKey = opt.page_key || "page";
        this.pageUrl = opt.page_url || "";

        this.init();

    };
    pagination.prototype = {
        init:function(){
            this.addDom();

        },
        //增加dom元素
        addDom:function(){
            this.createBtn("pre");
            this.createNumberDom();
            this.createBtn("next");
        },
        //增加普通页码
        createNumberDom:function(){
            //总页数小于等于8
            if(this.maxPage<=8){
                for(var i=1,l=this.maxPage;i<=l;i++){
                    this.createBtn(i);
                }
                return;
            }

            //总页数大于8
            if(this.nowPage >=5 && this.nowPage<=this.maxPage-4){
                this.createBtn(1);
                this.createPoint();
                for(var z=this.nowPage-2;z<this.nowPage+3;z++){
                    this.createBtn(z);
                }
                this.createPoint();
                this.createBtn(this.maxPage);
            }else if(this.nowPage <=5){
                for(var j=1;j<6;j++){
                    this.createBtn(j);
                }
                this.createPoint();
                this.createBtn(this.maxPage);
            }else{
                this.createBtn(1);
                this.createPoint();
                for(var t=this.maxPage-4;t<=this.maxPage;t++){
                    this.createBtn(t);
                }
            }


        },
        //创建点点
        createPoint:function(){
            var div = $("<div>...</div>");
            div.css({
                width:"30px",
                height:"20px",
                "line-height":"20px",
                display:"inline-block",
                "text-align":"center",
                position:"relative",
                top:"-5px"
            });
            this.body.append(div);
        },
        //创建上一页，下一页 等
        createBtn:function(page){
            if(this.nowPage ==  1  && page == "pre"){
                return;
            }
            if(this.nowPage == this.maxPage && page == "next"){
                return;
            }

            var text = page,
                width = "30",
                padding = 0;
            if(page == "pre"){
                text = "上一页";
                width = "60";
                padding = "0 0 0 10px";
            }
            if(page == "next"){
                text = "下一页";
                width = "60";
                padding = "0 10px 0 0";
            }
            var div = $("<a>"+text+"</a>");

            div.css({
                display:"inline-block",
                "text-align":"center",
                padding:padding,
                width:width+"px",
                border:"1px solid "+ this.color,
                color:this.color,
                position:"relative",
                cursor:"pointer",
                height:"30px",
                "line-height":"30px",
                margin:"0 5px"
            });


            //生成箭头
            var arrow = $("<div></div>");
            if(page == "pre"){
                arrow.css({
                    "border-right":"8px solid "+this.color,
                    "border-top":"6px solid transparent",
                    "border-bottom":"6px solid transparent",
                    position:"absolute",
                    left:"3px",
                    top:"9px"
                });
                div.append(arrow);
            }
            if(page == "next"){
                arrow.css({
                    "border-left":"8px solid "+this.color,
                    "border-top":"6px solid transparent",
                    "border-bottom":"6px solid transparent",
                    position:"absolute",
                    right:"3px",
                    top:"9px"
                });
                div.append(arrow);
            }



            this.bindEvent(page,div);
            this.body.append(div);
        },
        //绑定事件
        bindEvent:function(type,obj){
            var _this = this;


            //如果是当前页
            if(_this.nowPage == obj.text()){
                obj.css({
                    cursor:"auto",
                    border:"1px solid "+this.hoverColor,
                    color:this.hoverColor,
                    background:this.hoverBackground
                });
                return;
            }


            //绑定
            obj.click(function(){
                if(type == "pre"){
                    _this.goTo(_this.nowPage - 1);
                    return;
                }
                if(type == "next"){
                    _this.goTo(_this.nowPage + 1);
                    return;
                }

                _this.goTo(obj.text());


            }).hover(function(){
                _this.changeColor($(this),type,"on");
            },function(){
                _this.changeColor($(this),type,"out");
            });


        },
        changeColor:function(obj,type,state){
            var _this = this,
                color = (state == "on")? _this.hoverColor : _this.color,
                bg = (state == "on")? _this.hoverBackground : _this.background;

            if(type == "pre"){
                obj.find("div").css({
                    "border-right":"8px solid "+ color,
                    "border-top":"6px solid transparent",
                    "border-bottom":"6px solid transparent"
                })
            }

            if(type == "next"){
                obj.find("div").css({
                    "border-left":"8px solid "+ color,
                    "border-top":"6px solid transparent",
                    "border-bottom":"6px solid transparent"
                })
            }

            obj.css({
                border:"1px solid "+ color,
                color:color,
                background:bg
            });


        },
        //页面跳转
        goTo:function(page){
            var param = this.urlParams,
                val = "",
                url = (this.pageUrl.indexOf("?") > -1)? this.pageUrl+"&" : this.pageUrl + "?";


            for(var i=0,l=param.length;i<l;i++){
                var id = param[i],
                    this_val = $("#"+id).val();
                val += id + "=" + this_val + "&"
            }

            window.location.href = url + val +this.pageKey+"="+page;
        }
    };
    return pagination;
})();
TGOGO.pagination = function(obj){
    var max_page = obj.data("max_page") || 1,
        now_page = obj.data("now_page") || 1,
        color = obj.data("color") || "#666",
        hover_color = obj.data("hover_color") || "#cf1e2c",
        background = obj.data("background")  || "#fff",
        hover_background = obj.data("hover_background") || "#fff",
        url_params = obj.data("url_params") || "",
        page_key = obj.data("page_key") || "page",
        page_url = obj.data("page_url") || "";

    url_params = url_params.split(",");


    new TGOGO.__pagination_fn({
        body:obj,
        max_page:max_page,
        now_page:now_page,
        color:color,
        hover_color:hover_color,
        background:background,
        hover_background:hover_background,
        url_params:url_params,
        page_key:page_key,
        page_url:page_url
    });
};









//*****************************************************
//获取图片要显示的大小
//*****************************************************
TGOGO.__getNewImageSize = function (imgwidth, imgheight, objwidth, objheight) {
    var newimgwidth,newimgheight;

    if(!imgwidth || !imgheight){
        return {
            width:objwidth,
            height:objheight
        }
    }


    if(imgwidth>0 && imgheight>0){
        if(imgwidth/imgheight>=objwidth/objheight){
            if(imgwidth>objwidth){
                newimgwidth = objwidth;
                newimgheight = imgheight*objwidth/imgwidth;
            }else{
                newimgwidth = imgwidth;
                newimgheight = imgheight;
            }
        }else{
            if(imgheight>objheight){
                newimgheight = objheight;
                newimgwidth = imgwidth*objheight/imgheight;
            }else{
                newimgwidth = imgwidth;
                newimgheight = imgheight;
            }
        }
    }else{
        newimgwidth = objwidth;
        newimgheight = objheight;
    }


    return {
        width:newimgwidth,
        height:newimgheight
    }
};


//*****************************************************
//loading
//*****************************************************
TGOGO.loading = {
    imgSrc: TGOGO.settings.resourceSrc + "loading.gif",  //图片地址
    showWidth: 110,          //要显示loading区域的大小
    showHeight: 110,
    imgWidth: 400,           //图片实际尺寸
    imgHeight: 300,
    imgScale: 0.5,             //图片缩放比例
    imgX: 145,              //图片定位坐标
    imgY: 71,
    padding: 20,             //中间div的padding
    background: "#DEE1E2",      //背景颜色
    color: "#000",           //文字颜色
    obj: null,
    zz: null,
    createZZ: function () {
        var obj = $("<div></div>");
        obj.css({
            width: "100%",
            height: "100%",
            display: "block",
            position: "fixed",
            left: 0,
            top: 0,
            "z-index": 300000,
            background: "#000"
        });
        this.zz = obj;
    },
    createLoading: function (info) {
        var main = this.zz.clone().css({background: "none", display: "block", "z-index": 300001});
        info = info || "loading...";

        var load = $("<div></div>"),
            img_div = $("<div></div>"),
            img = $("<img src='" + this.imgSrc + "' />"),
            text = $("<div>" + info + "</div>"),
            width = (this.showWidth * this.imgScale > 110) ? this.showWidth * this.imgScale : 110,
            height = this.showHeight * this.imgScale + 40;
        load.css(DEVICE.fixObjCss({
            padding: this.padding + "px",
            width: width + "px",
            height: height + "px",
            position: "absolute",
            left: "50%",
            top: "50%",
            "margin-left": -(width / 2 + this.padding) + "px",
            "margin-top": -(height / 2 + this.padding) + "px",
            background: this.background,
            "border-radius": "5px"
        }));
        img_div.css({
            position: "relative",
            width: this.showWidth * this.imgScale + "px",
            height: this.showHeight * this.imgScale + "px",
            margin: "0 auto",
            overflow: "hidden"
        });
        img.css({
            position: "absolute",
            width: this.imgWidth * this.imgScale + "px",
            height: this.imgHeight * this.imgScale + "px",
            left: -this.imgX * this.imgScale + "px",
            top: -this.imgY * this.imgScale + "px"
        });
        text.css({
            width: "100%",
            height: "40px",
            "line-height": "40px",
            "text-align": "center",
            color: this.color
        });
        img_div.append(img);
        load.append(img_div).append(text);
        main.append(load);
        this.obj = main;
    },
    show: function (info) {
        if (this.obj) {
            return;
        }
        this.createZZ();
        this.createLoading(info);

        this.zz.css({opacity: 0});
        this.zz.animate({
            opacity: 0.5
        }, 500);
        $("body").append(this.zz).append(this.obj);

    },
    hide: function () {
        this.obj.remove();
        this.zz.remove();
        this.obj = null;
        this.zz = null;
    }
};






//*****************************************************
//商品图片局部放大
//*****************************************************
TGOGO.imgEnlarged_fn = (function(){
    var base64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFFMTgxMUZGODVFNTExRTRBMUU2RjUyRUQ5QUNCRjg1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFFMTgxMjAwODVFNTExRTRBMUU2RjUyRUQ5QUNCRjg1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUUxODExRkQ4NUU1MTFFNEExRTZGNTJFRDlBQ0JGODUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUUxODExRkU4NUU1MTFFNEExRTZGNTJFRDlBQ0JGODUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6krjdcAAAAD0lEQVR42mJiYGBoAAgwAACPAIPkdzb8AAAAAElFTkSuQmCC";
    var imgEnlarged = function(opt){
        this.body = opt.obj;

        this.div = null;
        this.img = this.body.find("img");
        this.bodyWidth = parseInt(this.body.width());
        this.bodyHeight = parseInt(this.body.height());



        this.isLoaded = false;
        this.imgWidth = null;
        this.imgHeight = null;
        this.scale = 1;
        this.zz = null;
        this.eventDiv = null;
        this.zzWidth = null;
        this.zzHeight = null;
        this.zzMaxLeft = null;
        this.zzMaxTop = null;
        this.bigImg = null;

        this.mouseIn = false;

        this.init();
    };
    imgEnlarged.prototype = {
        init:function(){
            this.createDiv();
            this.createZZ();
            this.createEventDiv();
            this.addEvent();

            var src = this.img.attr("src");
            this.changeImg(src);
        },
        createDiv:function(){
            this.body.css({position:"relative"});

            var width = this.bodyWidth,
                height = this.bodyHeight,
                div = $("<div></div>");

            div.css({
                width:width+"px",
                height:height+"px",
                background:"#fff",
                position:"absolute",
                left:width+"px",
                top:0,
                "z-index":"11",
                display:"none",
                "overflow":"hidden"
            });


            this.div = div;
            this.body.append(div);
        },
        addEvent:function(){
            var _this = this;
            this.eventDiv.mouseover(function(e){
                if(!_this.isLoaded){return;}
                if(_this.mouseIn){return;}
                _this.mouseIn = true;
                _this.setZZ();
                _this.showBigImg();

            });


            this.eventDiv.mousemove(function(e){
                if(!_this.isLoaded){return;}
                if(!_this.mouseIn){return;}
                var x = e.offsetX - _this.zzWidth/2,
                    y = e.offsetY - _this.zzHeight/2;

                x = (x<0)? 0 : x;
                x = (x>_this.zzMaxLeft)? _this.zzMaxLeft : x;
                y = (y<0)? 0 : y;
                y = (y>_this.zzMaxTop)? _this.zzMaxTop : y;


                _this.moveZZ(x,y);
                _this.moveImg(x,y);
            });


            this.eventDiv.mouseout(function(){
                if(!_this.isLoaded){return;}
                _this.mouseIn = false;
                _this.zz.css({display:"none"});
                _this.div.css({display:"none"});
                _this.div.html("");
            });


        },

        changeImg:function(src){
            this.src = src;
            var img = new Image(),
                _this = this;

            img.onload = function(){
                _this.autoScale(this);
            };
            img.src = src;
        },
        autoScale:function(img){
            var width = img.width,
                height = img.height,
                newSize = TGOGO.__getNewImageSize(width,height,this.bodyWidth,this.bodyHeight);

            this.imgWidth = width;
            this.imgHeight = height;
            this.scale = newSize.width / width;
            this.zzWidth = this.bodyWidth * this.scale;
            this.zzHeight = this.bodyHeight * this.scale;
            this.zzMaxLeft = this.bodyWidth - this.zzWidth;
            this.zzMaxTop = this.bodyHeight - this.zzHeight;
            this.imgTop = (this.bodyHeight - newSize.height)/2;
            this.imgLeft = (this.bodyWidth - newSize.width)/2;

            this.img.css({
                width:newSize.width + "px",
                height:newSize.height + "px",
                position:"absolute",
                left:this.imgLeft +"px",
                top:this.imgTop + "px",
                "z-index":"14"
            });
            this.img.attr({src:this.src});

            this.isLoaded = true;
        },
        createEventDiv:function(){
            var div = $("<div></div>");
            div.css({
                position:"absolute",
                left:0,top:0,right:0,bottom:0,
                "z-index":20,
                cursor:"move",
                background:"#fff",
                opacity:"0"
            });
            this.body.append(div);
            this.eventDiv = div;
        },
        createZZ:function(){
            var div = $("<div></div>");
            div.css({
                position:"absolute",
                left:0,
                top:0,
                width:0,
                height:0,
                border:"1px solid #555",
                background:"url("+base64+")",
                "z-index":"16",
                display:"none"
            });
            this.zz = div;
            this.body.append(div);
        },
        setZZ:function(){
            this.zz.css({
                width:this.zzWidth-2 + "px",
                height:this.zzHeight -2 +"px",
                display:"block"
            });
        },
        moveZZ:function(x,y){
            this.zz.css({
                left:x+"px",
                top:y+"px"
            })
        },
        showBigImg:function(){
            var img = new Image();
            img.src = this.src;
            this.div.append(img);
            $(img).css({
                position:"absolute",
                left:0,
                top:0,
                width:this.imgWidth +"px",
                height:this.imgHeight + "px"
            });
            this.bigImg = $(img);
            this.div.css({display:"block"});
        },
        moveImg:function(x,y){
            x = (this.imgLeft - x)/this.scale;
            y = (this.imgTop - y)/this.scale;
            this.bigImg.css({
                left:x+"px",
                top:y+"px"
            })

        }

    };
    return imgEnlarged;
})();
TGOGO.imgEnlarged = function(obj){
    var fn_name = "imgEnlarged_fn" + DEVICE.counter();
    obj.attr({fn_name:fn_name});

    window[fn_name] = new TGOGO.imgEnlarged_fn({
        obj:obj
    })
};







//*****************************************************
//评分星星
//*****************************************************
TGOGO.starScore_fn = (function(){
    var startScore = function(opt){
        this.body = opt.body;
        this.img = opt.img;
        this.bg = opt.bg;
        this.text = opt.text;
        this.color = opt.color;
        this.star_number = opt.star_number || 5;
        this.star_width = opt.star_width;
        this.star_height = opt.star_height;
        this.use_half_star = opt.use_half_star || false;
        this.default_val = opt.default_val || 0;
        this.inputId = opt.input_id || "";

        this.stars = null;
        this.starMain = null;
        this.score = 0;
        this.input = null;
        this.textObj = null;

        this.init();
    };
    startScore.prototype = {
        init:function(){
            this.score = this.default_val;

            this.createDom();
            this.addEvent();

            this.input.val(this.score);
        },
        createDom:function(){
            var star_main = $("<div class='__temp__start__score__'></div>"),
                start_width = (this.use_half_star)? this.star_width/2 : this.star_width,
                text = this.text[this.score - 1] || "",
                star_text = $("<span>"+text+"</span>");

            star_main.css({
                float:"left",
                width:this.star_number * this.star_width + "px",
                height:this.star_height + "px",
                overflow:"hidden",
                position:"relative",
                padding:"0 0 0 10px"
            });
            star_text.css({
                float:"left",
                color: this.color,
                display:"block",
                height:this.star_height + "px",
                "line-height":this.star_height + "px",
                padding:"0 0 0 10px"
            });


            var div = $("<div></div>");
            div.css({
                width:start_width*this.score+"px",
                height:this.star_height+"px",
                background:"url("+this.img+")",
                position:"absolute",
                left:"10px",
                top:0,
                "z-index":"10"
            });
            var bg = div.clone();
            bg.css({background:"url("+this.bg+")","z-index":"9",width:"100%"});

            star_main.append(bg).append(div);

            this.body.append(star_main).append(star_text);
            this.starMain = star_main;
            this.stars = div;
            this.textObj = star_text;


            var input = $("<input type='hidden' id='"+this.inputId+"' />");
            this.input = input;
            this.body.append(input);

        },
        addEvent:function(){
            var _this = this,
                start_width = (_this.use_half_star)? _this.star_width/2 : _this.star_width;

            this.starMain.mousemove(function(e){
                var x = (e.target.className == "__temp__start__score__") ? e.offsetX - 10 : e.offsetX,
                    n =  (x <= 0)? 0 : parseInt(x/start_width)+1,
                    width = start_width * n;
                _this.stars.css({width:width});
            });
            this.starMain.mouseout(function(){
                _this.stars.css({width:_this.score*start_width});
            });
            this.starMain.click(function(e){
                var x = (e.target.className == "__temp__start__score__") ? e.offsetX - 10 : e.offsetX,
                    n =  (x <= 0)? 0 : parseInt(x/start_width)+1,
                    text = _this.text[n-1] || "";
                _this.score = n;
                _this.input.val(n);
                _this.textObj.text(text);
            });
        }

    };
    return startScore;
})();
TGOGO.starScore = function(obj){
    var img = obj.data("img_src"),
        bg = obj.data("img_src_bg"),
        text = obj.data("text") || "",
        color = obj.data("text_color") || "#000",
        number = obj.data("star_length"),
        width = obj.data("star_width"),
        height = obj.data("star_height"),
        input_id = obj.data("hide_input_id"),
        default_val = obj.data("default_val") || 0,
        use_half_star = (obj.data("use_half_star") == "yes");

    text = text.split(",");


    new TGOGO.starScore_fn({
        body:obj,
        img:img,
        bg:bg,
        text:text,
        color:color,
        default_val:default_val,
        star_number:number,
        star_width:width,
        star_height:height,
        use_half_star:use_half_star,
        input_id:input_id
    });
};






//*****************************************************
//流程条
//*****************************************************
TGOGO.__processBar_fn = (function(){
    var processBar = function(opt){
        this.imgs = opt.img || [];          //3层
        this.bgColors = opt.bg_color || [];      //3层
        this.textColors = opt.text_color || []; //3层

        this.texts = opt.text || [];
        this.step = opt.step || 0;
        this.body = opt.body;
        this.arrowWidth = opt.arrow_width;
        this.arrowHeight = opt.arrow_height;
        this.arrowMdf = 3;



        this.n = this.texts.length;
        this.bodyWidth = parseInt(this.body.width());
        this.bodyHeight = parseInt(this.body.height());
        this.listWidth = (this.bodyWidth - (this.arrowWidth-this.arrowMdf)*2*(this.n-1))/this.n;
        this.doms = [];

        console.log(this.listWidth)

        this.init();
    };
    processBar.prototype = {
        init:function(){
            this.createDiv();
            this.createText();
            this.changeColor();
        },
        createDiv:function(){
            for(var i=0;i<this.n;i++){
                if(i==0){
                    this.createDom("start");
                    continue;
                }
                if(i==this.n-1){
                    this.createDom("end");
                    continue;
                }
                this.createDom();
            }
        },
        createDom:function(type){
            var div = $("<div><span></span></div>"),
                div_left = $("<div></div>"),
                div_right = $("<div></div>"),
                margin_left = (type == "start")? 0 : this.arrowWidth-this.arrowMdf+"px",
                margin_right = (type == "end")? 0 : this.arrowWidth-this.arrowMdf + "px";

            div.css({
                width:this.listWidth+"px",
                height:this.arrowHeight+"px",
                "margin-left":margin_left,
                "margin-right":margin_right,
                "background":this.bgColors[0],
                "text-align":"center",
                "line-height":this.arrowHeight+"px",
                float:"left",
                position:"relative"
            });
            div_left.css({
                position:"absolute",
                width:this.arrowWidth+"px",
                height:this.arrowHeight+"px",
                left:-this.arrowWidth+"px",
                top:0,
                "background-image":"url("+this.imgs[0]+")",
                overflow:"hidden"
            });
            div_right.css({
                position:"absolute",
                width:this.arrowWidth+"px",
                height:this.arrowHeight+"px",
                right:-this.arrowWidth+"px",
                top:0,
                "background-image":"url("+this.imgs[0]+")",
                "background-position":this.arrowWidth+"px 0",
                overflow:"hidden"
            });

            if(type=="start"){
                div.append(div_right);
            }else if(type == "end"){
                div.append(div_left);
            }else{
                div.append(div_left).append(div_right);
            }

            this.doms.push(div);
            this.body.append(div);
        },
        createText:function(){
            for(var i=0,l=this.doms.length;i<l;i++){
                this.doms[i].find("span").text(this.texts[i]);
            }
        },
        changeColor:function(){
            for(var i=0,l=this.doms.length;i<l;i++){
                var n = 0;
                if(i<this.step){
                    //第2层的颜色
                    n = 1;
                }else if(i == this.step){
                    //第3层的颜色
                    n = 2;
                }else{
                    //第1层的颜色
                    n = 0;
                }
                this.doms[i].find("div").css({
                    "background-image":"url("+this.imgs[n]+")"
                });
                this.doms[i].css({
                    background:this.bgColors[n]
                });
                this.doms[i].find("span").css({
                    color:this.textColors[n]
                })
            }
        }
    };
    return processBar;
})();
TGOGO.processBar = function(obj){
    var arrow_img = obj.data("arrow_img"),
        arrow_color = obj.data("arrow_color"),
        text_color = obj.data("text_color"),

        arrow_text = obj.data("arrow_text"),
        arrow_width = obj.data("arrow_width"),
        arrow_height = obj.data("arrow_height"),
        step = obj.data("now_step");


    new TGOGO.__processBar_fn({
        body:obj,
        img:arrow_img.split(","),
        bg_color:arrow_color.split(","),
        text_color:text_color.split(","),
        text:arrow_text.split(","),
        step:step,
        arrow_width:arrow_width,
        arrow_height:arrow_height
    });

};
