/**
 * Created by zh on 2017/7/20.
 */
$(function(){
    //input文本框事件
    var $blurValue=""; //失去焦点后
    clickinput( $("input.name"),"姓名" );
    clickinput( $("input.phone"),"电话" );
    function clickinput(elm,original){
        elm.focus(function(){
            if($(this).val()==original) {
                $(this).val("");
            }
        }).blur(function(){
            if($(this).val()==""){
                $(this).val(original)
            }
            $blurValue=$(this).val();
        });
    }
    //背景色改变
    $(".form .select .sel-title-box").addClass("bg");
    $(".form .addBg").click(function(){
        $(this).addClass("bg").siblings(".addBg").removeClass("bg");
        $(".form .select").find(".sel-title-box").css("backgroundColor","rgba(58,62,86,.3)")
    });
    $(".form .select").click(function(){
        $(this).find(".sel-title-box").css("backgroundColor","rgba(58,62,86,1)");
        $(".form .addBg").removeClass("bg")
    });


    // 单独对一个下拉框进行初始化
    $(".select02").M_select({
        "ico":"2",
        "radius":"24px",
        "Title":"店家"
    });

   var $selectTitle=$(".form .select .sel-title-box .sel-title");
    console.log($selectTitle.text(),$selectTitle.attr("value"));
    $(".form .select .sel-float-div").click(function(){
        console.log($selectTitle.text()+"-----"+$selectTitle.attr("value"))
    });


 /*
 var storeStr;
   // var reqObj={};
//默认情况下 促使能够选择第一项
    $(".ui-select select").each(function(){
        $(this).val("");
    });
// 选择select事件
    $(".ui-select select").change(function(){
        storeStr=$("select[name='store']").find("option:selected").text(); //获取店铺信息
        var selectText=$(this).find("option:selected").text(); //获取文本值
        // var selectValue=$(this).find("option:selected").val(); //获取value值
        $(this).siblings().text(selectText);
        // reqObj[$(this).attr('name')] = selectValue;
    });
    */
});