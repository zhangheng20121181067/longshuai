/**
 * Created by zh on 2017/7/20.
 */
$(function(){

    //将样式中line的top改为bottom  线条即可由下到上慢慢升起来
     $(".animate").each(function(index,element){
     $(this).find(".circle").delay(3000*index).show(1000).siblings(".line").delay(1000+3000*index).show(1000)
     .siblings("span").delay(2000+3000*index).show(1000);
     // $(this).find(".line").delay(1000+3000*index).show(1000);
     // $(this).find("span").delay(2000+3000*index).show(1000);
     });
});