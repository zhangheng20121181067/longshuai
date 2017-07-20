/**
 * Created by zh on 2017/7/20.
 */
$(function(){
    var storeStr;
    var reqObj={};
//默认情况下 促使能够选择第一项
    $(".ui-select select").each(function(){
        $(this).val("");
    });
    console.log("+++++++++"+$(".store select").val(),"----"+$(".store select option").eq(0).text())
// 选择select事件
    $(".ui-select select").change(function(){
        storeStr=$("select[name='store']").find("option:selected").text(); //获取店铺信息
        var selectText=$(this).find("option:selected").text(); //获取文本值
        // var selectValue=$(this).find("option:selected").val(); //获取value值
        $(this).siblings().text(selectText);
        // reqObj[$(this).attr('name')] = selectValue;
    });
});