/**
 * Created by zh on 2017/7/20.
 */
$(function(){
    var swiper = new Swiper('.swiper-container', {
        // autoplay: 1000,
        loop : true,
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 'auto',
        coverflow: {
            rotate: 0,
            stretch: 20,
            depth: 120,
            modifier: 5,
            slideShadows : true
        },
        onSlideChangeEnd: function(){
            // var $index=$('.swiper-slide-active').attr('data-swiper-slide-index');

            var $actSlide=$('.swiper-slide-active');
            var $index=$actSlide.attr('data-slide-index');
            $(".change").find("span").html($actSlide.attr('data-title'));
          //  console.log($index);
        }
    });

    $('.change .prev').on('click',function(){
        swiper.slidePrev();
    });
    $('.change .next').on('click',function(){
        swiper.slideNext();
    });

    $('.swiper-button-prev').on("click",function(){
        $('.change .prev').trigger("click");
    });
    $('.swiper-button-next').on("click",function(){
        $('.change .next').trigger("click");
    });
});
