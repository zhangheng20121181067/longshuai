/**
 * Created by zh on 2017/7/28.
 */

$(".backBtn").on("click",function(){
    location.href="storePlay.html";
});

var baseUrl="https://www.easy-mock.com/mock/597963fea1d30433d83f0489/store";
var $id=GetQueryString('id');
console.log($id);

//上一门店
$(".btn .prev").on("click",function(){
    $id--;
    if($id<=0){
        $id=1;
        return
    }
    ajaxData();
});
//下一门店
$(".btn .next").on("click",function(){
    $id++;
    if($id>=14){
        $id=13;
        return
    }
    ajaxData();
});


ajaxData();
//门店数据请求
function ajaxData(){
    $.ajax({
        type: "get",
        url:baseUrl+"/index/interfaces/storedetail_id="+$id,
        success: function (data) {
            //初始展示效果加了if判断
            if($id==1){
                $(".storeLocal").css("background-image","url(images/storeLocal.jpg)");  //门头照片
                var $li=$(".storeList").find("li");
                for(var i= 0,length=$li.length;i<length;i++){
                    $li.eq(i).css("background-image","url(images/storeIntro0"+(i+1)+".png)")
                }
                $(".text p").html("店家介绍店家介绍店家介绍店家介绍店家介绍店家介绍店家介绍店家介绍店家介绍店家介绍店家介绍店家介绍店家介绍店家介绍店家介绍店家介绍店家介绍店家介绍店家介绍店家介绍店家介绍店家介绍店家介绍店家介绍店家介绍店家介绍店家介绍店家介绍店家介绍店家介绍店家介绍店家介绍店家介绍店家介绍店家介绍店家介绍店家介绍店家介绍店家介绍店家介")
            }else{
                $(".storeLocal").css("background-image","url("+data.leftpic+")");  //门头照片
                $(".zhuti h4").html(data.storeName.chinese);
                $(".zhuti p").html(data.storeName.english);

                var $li=$(".storeList").find("li");
                for(var i= 0,length=$li.length;i<length;i++){
                    $li.eq(i).css("background-image","url("+data.rightpicList[i].img+")")
                }

                $(".text p").html(data.info)
            }
        }
    });
}
