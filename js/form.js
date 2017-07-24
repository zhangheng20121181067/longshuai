/**
 * Created by zh on 2017/6/5.
 */
$(function(){
    //input文本框事件
    var $blurValue=""; //失去焦点后
    clickinput( $("input#vip") ,"贵宾人数*");
    clickinput( $("input#firstName,input.firstName"),"姓名*" );
    clickinput( $("input#telephone,input.telephone"),"电话*" );
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


    //获取店铺
    var reqObj={};
    var storeStr="";
    $.ajax({
        type: "get",
        url: $baseUrl+"/index/interfaces/contact_shop_get", //$baseUrl+
        async:true,
        success: function (shopGet) {
            var str="";
            for(var i= 0,length=shopGet.data.length;i<length;i++){
                str+='<option value="'+shopGet.data[i].shop_id+'">'+shopGet.data[i].shop_name+'：'+shopGet.data[i].addresss+'</option>';
            }
            $("select[name='store']").append(str);

            //默认情况下 促使能够选择第一项
            $(".ui-select select").each(function(){
              $(this).val("");
            });
            // 选择select事件
            $(".ui-select select").change(function(){
                storeStr=$("select[name='store']").find("option:selected").text(); //获取店铺信息
                var selectText=$(this).find("option:selected").text(); //获取文本值
                var selectValue=$(this).find("option:selected").val(); //获取value值
                $(this).siblings().text(selectText);
                reqObj[$(this).attr('name')] = selectValue;

               // console.log($(this).find("option:selected").val());
            });
        }
    });
    //post预约数据

    $(".contacWay a").click(function(){
       // console.log(reqObj);
        var shop_id=parseInt(reqObj["store"]);  //店铺id
        var shop_name=storeStr.substring(0,storeStr.indexOf("：")); //店铺名
        var apple_date=$(".controlDate").val();     // 预约日期
        var apple_date_am=parseInt(reqObj["sx"]);   //  上午或下午
        var people_nums=parseInt($(".vip").val());  //  贵宾人数
        var is_member=parseInt(reqObj["member"]);  //   是否会员
        var linkman=$("#firstName").val();          //   姓名
        var linkman_phone=$("#telephone").val();   //   联系电话
       // console.log(shop_id, shop_name, apple_date, apple_date_am, people_nums,is_member, linkman, linkman_phone);
        //console.log(apple_date,  people_nums, linkman, linkman_phone);

        if(!shop_id){
           alert("请选择店铺");
            return false;
        }
        if(!apple_date_am){
            alert("请选择到店时间");
            return false;
        }
        if(!is_member){
            alert("亲，是否会员？");
            return false;
        }

        if(!people_nums){
            alert("请输入贵宾人数");
            return false;
        }
        if(apple_date=="到店日期*"){
            alert("请选择到店日期");
            return false;
        }
        if(linkman=="姓名*"){
            alert("请输入姓名");
            return false;
        }

        if(linkman_phone=="电话*"){
            alert("请输入电话号码");
            return false;
        }else{
            var reg =  /^1\d{10}$/;
            if (!reg.test(linkman_phone)) {
                alert("电话号码格式错误，请重新输入！");
                return false;
            }
        }

        $.ajax({
            type: "post",
            url: $baseUrl+"/index/interfaces/contact_apply_create",
            data:{
                "shop_id": shop_id,
                "shop_name": shop_name,
                "apple_date": apple_date,
                "apple_date_am": apple_date_am,
                "people_nums": people_nums,
                "is_member": is_member,
                "linkman": linkman,
                "linkman_phone": linkman_phone
            },
            success: function (contact) {
               //console.log(contact.message)
                alert(contact.message)
            }
        });
    });

    //日历插件
    $(".mh_date").manhuaDate({
        Event : "click",//可选
        Left : 0,//弹出时间停靠的左边位置
        Top : -16,//弹出时间停靠的顶部边位置
        fuhao : "-",//日期连接符默认为-
        isTime : false,//是否开启时间值默认为false
        beginY : 2007,//年份的开始默认为1949
        endY :2027//年份的结束默认为2049
    });
});