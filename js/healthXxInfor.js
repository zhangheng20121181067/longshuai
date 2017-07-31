/**
 * Created by zh on 2017/6/13.
 */
$(function(){
    var $baseUrl="http://testwwwshuaispa.ufunet.cn";
    var $id=window.location.href.split('?')[1].split('=')[1];
    inforData();
    function inforData(){
        $.ajax({
            type: "get",
            url:$baseUrl+"/index/interfaces/news_get_detail?id="+$id,
            success: function (keepTxt) {
                if(keepTxt.data){
                    var $biaoti=$(".title h4");
                    var $content=$(".text .neiRong");
                    $biaoti.text(keepTxt.data.title);
                    $content.html(keepTxt.data.contents);

                    //为了显示初始详情页
                    if($id==50){
                        $biaoti.text("品质服务决定销售结果");
                        $content.html("<p>龙帅（国际）美容发展有限公司是一家集S公司是一家集投资管理、直营连锁、男士美容、男士S公司是一家集投资管理、直营连锁、男士美容、男士S公司是一家集投资管理、直营连锁、男士美容、男士S公司是一家集投资管理、直营连锁、男士美容、男士S公司是一家集投资管理、直营连锁、男士美容、男士S公司是一家集投资管理、直营连锁、男士美容、男士S公是一家集投资管理、直营连是一家集投资管理、直营连司公司是一家集投资管理、直营连是一家集投资管理、直营连是一家集投资管理、直营连锁、男士美容、男士S锁、男士美容、男士S公司是一家集投资管理、直营连锁、男士美容、男士SPA、男士养生、龙帅（国际）美容发展有限公司是一家集投资管理、直营连锁、男士美容、男士SPA、男士养生、龙帅（国际）美容发展有限公司是一家集投资管理、直营连锁、男士美容、男士SPA、男士养生、龙帅（国际）美容发展有限公司是一家集投资管理、直营连锁、男士美容、男士SPA、男士养生、龙帅（国际）美容发展有限公司是一家集投资管理、直营连锁、男士美容、男士SPA、男士养生、龙帅（国际）美容发展有限公司是一家集投资管理、直营连锁、男士美容、男士SPA、男士养生、龙帅（国际）美容发展有限公司是一家集投资管理、直营连锁、男士美容、男士SPA、男士养生、龙美容发展有限公司是一家集投资管理、直营连锁、男士美容、男士SPA、男士养生、美容发展有限公司是一家集投资有限公司是一家集投资有限公司是一家集投资有限公司是一家集投资有限公司是一家集投资有限公司是一家集投资有限公司是一家集投资有限公司是一家集投资有限公司是一家集投资有限公司是一家集投资有限公司是一家集投资有限公司是一家集投资有限公司是一家集投资有限公司是一家集投资有限公司是一家集投资有限公司是一家集投资有限公司是一家集投资有限公司是一家集投资有限公司是一家集投资有限公司是一家集投资管理、直营连锁、男士美容、男士SPA、男士养生、产品研发等多元化发展为一体的连锁企业。</p>");
                    }

                    //图片加载失败时 替换图片
                    $('img').on("error",function() {
                        $(this).attr("src",errorImgUrl);
                    });
                }
            }
        });
    }

    //上一页
    $(".textCenter .prev").click(function(){
        $id--;
        inforData();
    });
    //下一页
    $(".textCenter .next").click(function(){
        $id++;
        inforData();
    });
    //上下页样式改变
    $(".textCenter").find("span").click(function(){
        $(this).addClass("bg").siblings().removeClass("bg")
    })
});