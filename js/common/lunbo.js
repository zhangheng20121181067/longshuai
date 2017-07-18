/**
 * Created by zh on 2017/7/14.
 */
//采用正则表达式获取地址栏参数：
function GetQueryString(name) {
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)
        return unescape(r[2]);
    return null;
}
var path = GetQueryString('index');//获取url的path值


var $main=$(".main");
var $wrap=$(".main").find(".wrap");
var $slider=$(".main").find(".slider");
var _index;




var screenWidth=$(document.body).outerWidth(true);
$main.width(screenWidth);
$slider.width(screenWidth);
$wrap.width(screenWidth*$slider.length);

if(path) {
    console.log(path);
    // sSs(path, $('#' + path).offset().top - 63);
    $wrap.animate({"left": -$slider.width() * path},1000);
}

$(window).resize(function(){
    screenWidth=$(document.body).outerWidth(true);
    $main.width(screenWidth);
    $slider.width(screenWidth);
    $wrap.width(screenWidth*$slider.length);

    $wrap.css({"left":-_index*screenWidth});
});

$(".footer li").find("a").click(function (e) {
    var index = $(this).attr("data-index");
    if(!$wrap.is(":animated")){
        $wrap.animate({"left": -$slider.width() * index},1000,function(){
            _index=index;
        });
       $(this).addClass("clickAct").parent().siblings().find("a").removeClass("clickAct");
    }
    if($(this).hasClass("mouseAct")){
        $(this).removeClass("mouseAct")
    }
   // e.preventDefault();
}).hover(function(){
    if($(this).hasClass("clickAct")){
        return;
    }
    $(this).addClass("mouseAct");
},function(){
    $(this).removeClass("mouseAct");
});
