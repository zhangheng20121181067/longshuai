/**
 * Created by zh on 2017/7/20.
 */
$(function(){
    //鼠标划入划出时切换slider 并改变样式
    $('.footer .tab li').hover(function(){
        if($(this).find("a").hasClass("clickAct")){
            return;
        }
        $(this).find("a").addClass("mouseAct");
    },function(){
        $(this).find("a").removeClass("mouseAct");
    });

//给body高度赋值
    var $bodyHeight=$("html,body").outerHeight();
    var $mainHeight=$(".main").outerHeight();
    console.log("$bodyHeight"+$bodyHeight,"$mainHeight"+$mainHeight,$(document).scrollTop());
    if($bodyHeight<=1080){
        if($bodyHeight<$mainHeight){
            $("html,body").height($mainHeight+54+66);
        }
    }
   if($bodyHeight>1080){
        $("html,body").height("1910px");
    }
   //$(".main").height( $(".main").height()-54-66);
});