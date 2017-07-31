/**
 * Created by zh on 2017/7/28.
 */
//首页视频
   /* var $body=$("body");
    $("video").width($body.width()).height($body.height());
  $(window).resize(function(){
    $("video").width($body.width()).height($body.height());
  });*/

var fullFlag=true;
var aud = document.getElementById("myVideo");
document.addEventListener("dblclick",function(){
    if(fullFlag){
        aud.webkitRequestFullScreen();
        fullFlag=false;
    }else{
        document.webkitCancelFullScreen();
        fullFlag=true;
    }
});
/*document.addEventListener("click",function(){
    if(aud.paused){
        aud.play();
    }
});*/
/*
aud.onended = function() {
    playFlag=false;   //播放完毕时 标记置为false，则单击播放开始
};
*/

/*$(".sliderOne .container").hide();
aud.onended = function() {
    $(".sliderOne .container").show(1000);
};*/

/*
 document.body.addEventListener('dblclick',function(){
 if(flag){
 requestFullScreen();
 flag=false;
 }else{
 document.webkitCancelFullScreen();
 flag=true;
 };
 //进入全屏
 function requestFullScreen() {
 var de = document.documentElement;
 if (de.requestFullscreen) {
 de.requestFullscreen();
 } else if (de.mozRequestFullScreen) {
 de.mozRequestFullScreen();
 } else if (de.webkitRequestFullScreen) {
 de.webkitRequestFullScreen();
 }
 }
 //退出全屏
 function exitFullscreen() {
 var de = document;
 if (de.exitFullscreen) {
 de.exitFullscreen();
 } else if (de.mozCancelFullScreen) {
 de.mozCancelFullScreen();
 } else if (de.webkitCancelFullScreen) {
 de.webkitCancelFullScreen();
 }
 }*/
