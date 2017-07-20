/**
 * Created by zh on 2017/7/20.
 */
$(function(){
    var arr=["首页","关于我们","项目介绍","养生资讯","联系我们"];
    var swiper = new Swiper('.swiper-container', {
        initialSlide : GetQueryString('actSlideIndex')? GetQueryString('actSlideIndex'):0,  //初始slider
        onSlideChangeEnd: function(swiper){
            var index = swiper.activeIndex;
            $('.footer .tab li a').removeClass('clickAct').eq(index).addClass('clickAct');

            console.log(index);
            //第一页或最后一页时禁止切换
            swiper.unlockSwipeToPrev();
            swiper.unlockSwipeToNext();
            if(swiper.isEnd){
                swiper.lockSwipeToNext();
            }
            else if(swiper.activeIndex==0){
                swiper.lockSwipeToPrev();
            }
        }
    });
    //点击时切换slider 并改变样式
    $('.footer .tab li').on('click',function(){
        var $this = $(this);
        var index = $this.index();
        swiper.slideTo(index);
        $('.footer .tab li a').removeClass('clickAct').eq(index).addClass('clickAct');

        if($(this).find("a").hasClass("mouseAct")){
            $(this).find("a").removeClass("mouseAct")
        }
    });
});