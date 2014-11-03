/*
 * Filename : 
 * =====================================
 * Created with WebStorm.
 * User: bens
 * Date: 14-8-28
 * Time: 下午2:44
 * Email:5878794@qq.com
 * =====================================
 * Desc:
 */


var DEVICE = {};




//*****************************************************
//获取浏览器或设备名称  以及版本号
//*****************************************************
//输出结果:
//---------------------------------------------------------
//DEVICE.isIpad             @param:bloom    是否是：ipad
//DEVICE.isIphone           @param:bloom    是否是：ipbone
//DEVICE.isAndroid          @param:bloom    是否是：android
//DEVICE.isIe               @param:bloom    是否是：ie
//DEVICE.isFirefox          @param:bloom    是否是：firefox
//DEVICE.isChrome           @param:bloom    是否是：chrome
//DEVICE.isOpera            @param:bloom    是否是：opera
//DEVICE.isSafari           @param:bloom    是否是：safari

//DEVICE.ver                @param:number   浏览器版本或  ipad/iphone/android系统版本
//---------------------------------------------------------
(function(){
    var Sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var s;
    (s = ua.match(/ipad; cpu os ([\d_]+)/)) ? Sys.ipad = s[1].replace(/_/g,".") :
    (s = ua.match(/iphone os ([\d_]+)/)) ? Sys.iphone = s[1].replace(/_/g,".") :
    (s = ua.match(/android[ \/]([\d.]+)/)) ? Sys.android = s[1] :
    (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? Sys.ie = s[1] :
    (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
    (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
    (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
    (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
    (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : Sys._ = 0;


    DEVICE.isIpad = (Sys.hasOwnProperty("ipad"));
    DEVICE.isIphone = (Sys.hasOwnProperty("iphone"));
    DEVICE.isAndroid = (Sys.hasOwnProperty("android"));
    DEVICE.isIe = (Sys.hasOwnProperty("ie"));
    DEVICE.isFirefox = (Sys.hasOwnProperty("firefox"));
    DEVICE.isChrome = (Sys.hasOwnProperty("chrome"));
    DEVICE.isOpera = (Sys.hasOwnProperty("opera"));
    DEVICE.isSafari = (Sys.hasOwnProperty("safari"));


    DEVICE.ver = 0;
    var ver;
    for(var key in Sys){
        if(Sys.hasOwnProperty(key)){
            ver = Sys[key];
        }
    }
    ver = ver.split(".");
    var _ver = [];
    for(var i= 0,l=ver.length;i<l;i++){
        if(i>=2){
            break;
        }
        _ver.push(ver[i]);
    }
    _ver = _ver.join(".");
    DEVICE.ver = _ver;
})();







//*****************************************************
//处理浏览器css前缀问题 以及其它一些属性
//*****************************************************
//输出结果：
//属性：------------------------------------------------
//DEVICE.has3d              @param:bloom    是否支持3d
//DEVICE.hasTouch           @param:bloom    是否是触摸屏
//DEVICE.hasTransform       @param:bloom    是否支持变形
//DEVICE.language           @param:str      语言版本  zh-cn

//事件：------------------------------------------------
//DEVICE.RESIZE_EV          @param:str      窗口变化
//DEVICE.START_EV           @param:str      点击
//DEVICE.MOVE_EV            @param:str      移动
//DEVICE.END_EV             @param:str      释放
//DEVICE.CANCEL_EV          @param:str      点击结束
//DEVICE.TRNEND_EV          @param:str      变形结束 ｅｇ:webkitTransitionEnd

//函数：------------------------------------------------
//DEVICE.nextFrame          fn              执行动画函数　１秒６０帧
//DEVICE.cancelFrame        fn              停止动画
//DEVICE.counter            fn              计数器 返回页面全局唯一ｉｄ数字，从１开始。
//DEVICE.fixObjCss          fn              ｊｑ调用，免ｃｓｓ前缀（部分）
//DEVICE.fixCss             fn              免ｃｓｓ前缀（部分）
//-----------------------------------------------------
(function(){
    var dummyStyle = document.createElement("div").style,
        vendor = (function () {
            if(window.navigator.msPointerEnabled){return "";}
            if("MozTransform" in dummyStyle){return "";}
            var vendors = 'webkitT,MozT,msT,OT,t'.split(','),
                t,
                i = 0,
                l = vendors.length;

            for ( ; i < l; i++ ) {
                t = vendors[i] + 'ransform';
                if ( t in dummyStyle ) {
                    return vendors[i].substr(0, vendors[i].length - 1);
                }
            }

            return false;
        })(),
        prefixStyle = function(style){
            if ( !vendor ) return style;

            style = style.charAt(0).toUpperCase() + style.substr(1);
            return vendor + style;
        },
        has3d = prefixStyle('perspective') in dummyStyle,


        windowTouch = (window.navigator.msMaxTouchPoints && window.navigator.msMaxTouchPoints > 0)? true : false,
        webkitTouch = 'ontouchstart' in window,
        hasTouch = (webkitTouch || windowTouch),
        hasTransform = vendor !== false,

        _transform = prefixStyle('transform'),
        _transitionProperty = prefixStyle('transitionProperty'),
        _transitionDuration = prefixStyle('transitionDuration'),
        _transformOrigin = prefixStyle('transformOrigin'),
        _transitionTimingFunction = prefixStyle('transitionTimingFunction'),
        _transitionDelay = prefixStyle('transitionDelay'),


        RESIZE_EV = 'onorientationchange' in window ? 'orientationchange' : 'resize',
        START_EV = webkitTouch ? 'touchstart' : windowTouch? 'MSPointerDown' : 'mousedown',
        MOVE_EV = webkitTouch ? 'touchmove' : windowTouch? 'MSPointerMove' : 'mousemove',
        END_EV = webkitTouch ? 'touchend' : windowTouch? 'MSPointerUp' : 'mouseup',
        CANCEL_EV = webkitTouch ? 'touchcancel' : windowTouch? 'MSPointerUp' : 'mouseup',
        TRNEND_EV = (function () {
            if ( vendor === false ) return "transitionend";

            var transitionEnd = {
                ''			: 'transitionend',
                'webkit'	: 'webkitTransitionEnd',
                'Moz'		: 'transitionend',
                'O'			: 'otransitionend',
                'ms'		: 'MSTransitionEnd'
            };

            return transitionEnd[vendor];
        })(),
        nextFrame = (function() {
            return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function(callback) { return setTimeout(callback, 1); };
        })(),
        cancelFrame = (function () {
            return window.cancelRequestAnimationFrame ||
                window.webkitCancelAnimationFrame ||
                window.webkitCancelRequestAnimationFrame ||
                window.mozCancelRequestAnimationFrame ||
                window.oCancelRequestAnimationFrame ||
                window.msCancelRequestAnimationFrame ||
                clearTimeout;
        })(),
        counter = (function(){
            var a = 0;
            return function(){
                a += 1;
                return a;
            }
        })(),
        language = (navigator.browserLanguage || navigator.language).toLowerCase(),



        t_v = (function(){
            var _vendors = 'webkitT,MozT,msT,OT'.split(','),
                t,
                i = 0,
                l = _vendors.length;

            for ( ; i < l; i++ ) {
                t = _vendors[i] + 'ransform';
                if ( t in dummyStyle ) {
                    return ("-"+_vendors[i].substr(0, _vendors[i].length - 1)+"-");
                }
            }
            return "";
        })(),
        getCssName = function(style){
            return (style in dummyStyle)? style :
                (t_v+style in dummyStyle)? t_v+style : style;
        },
    //判断盒子模型的版本 2009版 2011版  2013版
        boxVendors = "",
        boxType = (function(){
            if("flexBasis" in dummyStyle){return 2013;}
            if(t_v+"flex-basis" in dummyStyle){boxVendors = t_v; return 2013;}

            if("flexPack" in dummyStyle){return 2011;}
            if(t_v+"flex-pack" in dummyStyle){boxVendors = t_v; return 2011;}

            if("boxPack" in dummyStyle){return 2009;}
            if(t_v+"box-pack" in dummyStyle){boxVendors = t_v; return 2009;}
        })(),

    //（值）定义盒子模型 display:flex
        box =  (boxType == 2013)? boxVendors + "flex" :
            (boxType == 2011)? boxVendors + "flexbox" :
                (boxType == 2009)? boxVendors + "box" : "flex",
    //与盒子内布局方向相同，  start  end 。。。
        align_items = (boxType == 2013)? boxVendors + "align-items" :
            (boxType == 2011)? boxVendors + "flex-pack" :
                (boxType == 2009)? boxVendors + "box-pack" : "align-items",
    //与盒子内布局方向相反，  start  end 。。。
        justify_content = (boxType == 2013)? boxVendors + "justify-content" :
            (boxType == 2011)? boxVendors + "flex-align" :
                (boxType == 2009)? boxVendors + "box-align" : "justify-content",

    //盒子子元素所占比例
        flex = (boxType == 2013)? boxVendors + "flex" :
            (boxType == 2011)? boxVendors + "flex" :
                (boxType == 2009)? boxVendors + "box-flex" : "flex",

    //盒子方向
        flex_direction = (boxType == 2013)? boxVendors + "flex-direction" :
            (boxType == 2011)? boxVendors + "flex-direction" :
                (boxType == 2009)? boxVendors + "box-orient" : "flex-direction",

    //（值）横向排列
        flex_direction_row = (boxType == 2013)?  "row" :
            (boxType == 2011)?  "row" :
                (boxType == 2009)?  "horizontal" : "row",

    //（值）纵向排列
        flex_direction_column = (boxType == 2013)?  "column" :
            (boxType == 2011)?  "column" :
                (boxType == 2009)?  "vertical" : "column",




        box_shadow = getCssName("box-shadow"),
        backgroundSize = getCssName("background-size"),
        transform = getCssName("transform"),
        border_radius = getCssName("border-radius"),
        box_sizing = getCssName("box-sizing"),
        background_clip = getCssName("background-clip"),
        border_bottom_left_radius = getCssName("border-bottom-left-radius"),
        border_bottom_right_radius = getCssName("border-bottom-right-radius"),
        border_top_left_radius = getCssName("border-top-left-radius"),
        border_top_right_radius = getCssName("border-top-right-radius"),
        backface_visibility = getCssName("backface-visibility"),
        transition = getCssName("transition"),
        transition_property = getCssName("transition-property"),
        transition_duration = getCssName("transition-duration"),
        transition_timing_function = getCssName("transition-timing-function");


    var css = {
            "box":box,
            "justify-content":justify_content,
            "align-items":align_items,
            "background-size":backgroundSize,
            "background-clip":background_clip,
            "flex":flex,
            "flex-direction":flex_direction,
            "row":flex_direction_row,
            "column":flex_direction_column,
            "transform":transform,
            "border-radius":border_radius,
            "border-bottom-left-radius":border_bottom_left_radius,
            "border-bottom-right-radius":border_bottom_right_radius,
            "border-top-left-radius":border_top_left_radius,
            "border-top-right-radius":border_top_right_radius,
            "box-sizing":box_sizing,
            "box-shadow":box_shadow,
            "backface-visibility":backface_visibility,
            "transition":transition,
            "transition-property":transition_property,
            "transition-duration":transition_duration,
            "transition-timing-function":transition_timing_function
        },
        gz = (function(){
            var reg,a=[];
            for(var key in css){
                if(css.hasOwnProperty(key)){
                    if(key == "box" || key == "transition" || key == "flex"){
                        a.push("([^-]"+key+"[^-])");
                    }else if(key == "row" || key == "column"){
                        a.push(key);
                    }else{
                        a.push("([^-]"+key+")");
                    }
                }
            }
            reg = a.join("|");
            return new RegExp(reg,"ig");
        })(),
        css_prefix = function(data){
            var text = JSON.stringify(data),
                newtext = cssfile_prefix(text);

            return JSON.parse(newtext);
        },
        cssfile_prefix = function(data){
            return  data.replace(gz,function(a){
                var str = a.substr(1, a.length-2);
                if(str == "box" || str == "transition" || str=="flex"){
                    var newstr = css[str];
                    return a.substr(0,1)+newstr+ a.substr(a.length-1);
                }else if(a == "row" || a == "column"){
                    return css[a];
                }else{
                    return a.substr(0,1)+css[a.substr(1)];
                }
            });
        },
        fix_css = function(css){
            css = css.replace(/;/ig," ; ");
            return cssfile_prefix(css);
        };

    dummyStyle = null;



    DEVICE.has3d = has3d;         //是否支持3d
    DEVICE.hasTouch = hasTouch;  //是否是触摸屏
    DEVICE.hasTransform = hasTransform;  //是否支持变形


    DEVICE._transform = transform;        //自动添加前缀
    DEVICE._transitionProperty = _transitionProperty;
    DEVICE._transitionDuration = _transitionDuration;
    DEVICE._transformOrigin =_transformOrigin;
    DEVICE._transitionTimingFunction = _transitionTimingFunction;
    DEVICE._transitionDelay = _transitionDelay;



    DEVICE.RESIZE_EV = RESIZE_EV;    //窗口变化
    DEVICE.START_EV = START_EV;  //点击
    DEVICE.MOVE_EV = MOVE_EV;   //移动
    DEVICE.END_EV = END_EV;     //释放
    DEVICE.CANCEL_EV = CANCEL_EV;      //结束
    DEVICE.TRNEND_EV = TRNEND_EV;       //变形结束 webkitTransitionEnd


    DEVICE.nextFrame = nextFrame;
    DEVICE.cancelFrame = cancelFrame;

    DEVICE.language = language;   //语言版本  zh-cn
    DEVICE.counter = counter;        //计数器  fn

    DEVICE.fixObjCss = css_prefix;
    DEVICE.fixCss = fix_css;


    DEVICE.css = css;
    DEVICE.boxType = boxType;
    DEVICE.boxVendors = boxVendors;
})();




//*****************************************************
//事件监听
//DEVICE.addEvent(obj,event,fn);            添加事件
//DEVICE.removeEvent(obj,event,fn);         取消事件
//*****************************************************
DEVICE.addEvent = function (target, type, func) {
    if (target.addEventListener) {
        target.addEventListener(type, func, false);
    } else if (target.attachEvent) {
        target.attachEvent("on" + type, func);
    } else {
        target["on" + type] = func;
    }
};
DEVICE.removeEvent = function (target, type, func) {
    if (target.removeEventListener) {
        target.removeEventListener(type, func, false);
    } else if (target.detachEvent) {
        target.detachEvent("on" + type, func);
    } else {
        delete target["on" + type];
    }
};

























//*****************************************************
//ie6还是７的　　　JSON.stringify 和 JSON.parse
//JSON的序列化和反序列化
//*****************************************************
if (!this.JSON) {
    this.JSON = {};
}
(function () {

    function f(n) {
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf()) ?
                this.getUTCFullYear() + '-' +
                f(this.getUTCMonth() + 1) + '-' +
                f(this.getUTCDate()) + 'T' +
                f(this.getUTCHours()) + ':' +
                f(this.getUTCMinutes()) + ':' +
                f(this.getUTCSeconds()) + 'Z' : null;
        };

        String.prototype.toJSON =
            Number.prototype.toJSON =
                Boolean.prototype.toJSON = function (key) {
                    return this.valueOf();
                };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"': '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {


        escapable.lastIndex = 0;
        return escapable.test(string) ?
            '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string' ? c :
                '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' :
            '"' + string + '"';
    }


    function str(key, holder) {


        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

        // If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
            typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

        // If we were called with a replacer function, then call the replacer to
        // obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

        // What happens next depends on the value's type.

        switch (typeof value) {
            case 'string':
                return quote(value);

            case 'number':

                // JSON numbers must be finite. Encode non-finite numbers as null.

                return isFinite(value) ? String(value) : 'null';

            case 'boolean':
            case 'null':

                // If the value is a boolean or null, convert it to a string. Note:
                // typeof null does not produce 'null'. The case is included here in
                // the remote chance that this gets fixed someday.

                return String(value);

            // If the type is 'object', we might be dealing with an object or an array or
            // null.

            case 'object':

                // Due to a specification blunder in ECMAScript, typeof null is 'object',
                // so watch out for that case.

                if (!value) {
                    return 'null';
                }

                // Make an array to hold the partial results of stringifying this object value.

                gap += indent;
                partial = [];

                // Is the value an array?

                if (Object.prototype.toString.apply(value) === '[object Array]') {

                    // The value is an array. Stringify every element. Use null as a placeholder
                    // for non-JSON values.

                    length = value.length;
                    for (i = 0; i < length; i += 1) {
                        partial[i] = str(i, value) || 'null';
                    }

                    // Join all of the elements together, separated with commas, and wrap them in
                    // brackets.

                    v = partial.length === 0 ? '[]' :
                        gap ? '[\n' + gap +
                            partial.join(',\n' + gap) + '\n' +
                            mind + ']' :
                            '[' + partial.join(',') + ']';
                    gap = mind;
                    return v;
                }

                // If the replacer is an array, use it to select the members to be stringified.

                if (rep && typeof rep === 'object') {
                    length = rep.length;
                    for (i = 0; i < length; i += 1) {
                        k = rep[i];
                        if (typeof k === 'string') {
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ': ' : ':') + v);
                            }
                        }
                    }
                } else {

                    // Otherwise, iterate through all of the keys in the object.

                    for (k in value) {
                        if (Object.hasOwnProperty.call(value, k)) {
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ': ' : ':') + v);
                            }
                        }
                    }
                }

                // Join all of the member texts together, separated with commas,
                // and wrap them in braces.

                v = partial.length === 0 ? '{}' :
                    gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' +
                        mind + '}' : '{' + partial.join(',') + '}';
                gap = mind;
                return v;
        }
    }

    // If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

            // The stringify method takes a value and an optional replacer, and an optional
            // space parameter, and returns a JSON text. The replacer can be a function
            // that can replace values, or an array of strings that will select the keys.
            // A default replacer method can be provided. Use of the space parameter can
            // produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

            // If the space parameter is a number, make an indent string containing that
            // many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

                // If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

            // If there is a replacer, it must be a function or an array.
            // Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

            // Make a fake root object containing our value under the key of ''.
            // Return the result of stringifying the value.

            return str('', { '': value });
        };
    }


    // If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

            // The parse method takes a text and an optional reviver function, and returns
            // a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

                // The walk method is used to recursively walk the resulting structure so
                // that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


            // Parsing happens in four stages. In the first stage, we replace certain
            // Unicode characters with escape sequences. JavaScript handles many characters
            // incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

            // In the second stage, we run the text against regular expressions that look
            // for non-JSON patterns. We are especially concerned with '()' and 'new'
            // because they can cause invocation, and '=' because it can cause mutation.
            // But just to be safe, we want to reject all unexpected forms.

            // We split the second stage into 4 regexp operations in order to work around
            // crippling inefficiencies in IE's and Safari's regexp engines. First we
            // replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
            // replace all simple value tokens with ']' characters. Third, we delete all
            // open brackets that follow a colon or comma or that begin the text. Finally,
            // we look to see that the remaining characters are only whitespace or ']' or
            // ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/.
                test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').
                    replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
                    replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

                // In the third stage we use the eval function to compile the text into a
                // JavaScript structure. The '{' operator is subject to a syntactic ambiguity
                // in JavaScript: it can begin a block or an object literal. We wrap the text
                // in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

                // In the optional fourth stage, we recursively walk the new structure, passing
                // each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function' ?
                    walk({ '': j }, '') : j;
            }

            // If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());
