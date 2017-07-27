/**
 * Created by zh on 2017/6/1.
 */
$(function(){
    var $baseUrl="http://testwwwshuaispa.ufunet.cn";
   /* var curPage = 1;   //当前页码*/
    var total;         //总记录数
    var pageCut = 10;  //每页显示数
    var pageCount;     //总页数
    var keepListData;
    var isFlag;  //判断开关防止getPageBar重新触发（即防止重新给第一页附加样式）
    getList(1,pageCut,true);
    function getList(page,pageCut,flag){
        $.ajax({
            type: "get",
            url:$baseUrl+"/index/interfaces/news_get_list?page="+page+"&pagecut="+pageCut,
            success: function (keepNewsList) {
                keepListData=keepNewsList.data;
                total=keepListData.total;              //数据总条数
              /*  curPage = page;                        //当前页*/
                pageCount=Math.ceil(total/pageCut);    //页数
                isFlag=flag;
                //插入内容
                var listr="";
                for (var j = 0,lilength = keepListData.data.length; j < lilength; j++) {
                    listr+='<li><a class="fl" href="healthXxInfor.html?id='+keepListData.data[j].article_id+'">'+keepListData.data[j].title+'</a>' +
                        '<time class="fr">'+keepListData.data[j].show_date+'</time></li>';
                }
                $(".articleList ul").html(listr);
               /* $(".M-box3").css("marginTop",(10-keepListData.data.length+1)*50);   //   固定分页的位置*/
                if(isFlag){
                    getPageBar();
                }
            }
        });
    }

    //获取分页条
    function getPageBar() {
        //console.log("getPageBar触发了");
        $('.M-box3').pagination({
            //totalData:total,        //如果配置了数据总数和当前一页显示多少条数据，总页数会自动计算，这种情况下再配置总页数无效。（注：数据总数totalData和每页显示的条数showData必须同时配置，否则默认使用总页数pageCount。）
            pageCount: pageCount,
            //showData: pageCut,
            jump: true,
            coping: true,
            homePage: '首页',
            endPage: '末页',
            prevContent: '上页',
            nextContent: '下页',
            callback: function (api) {    //回调函数 只要点击分页条时即触发
                page = api.getCurrent();
                console.log(page,isFlag);
                getList(page, pageCut,false);
            }
        });
    }

    /*$('.M-box3').pagination({
        //totalData:total,        //如果配置了数据总数和当前一页显示多少条数据，总页数会自动计算，这种情况下再配置总页数无效。（注：数据总数totalData和每页显示的条数showData必须同时配置，否则默认使用总页数pageCount。）
        pageCount: 10,
        //showData: pageCut,
        jump: true,
        coping: true,
        homePage: '首页',
        endPage: '末页',
        prevContent: '上页',
        nextContent: '下页',
        callback: function (api) {    //回调函数 只要点击分页条时即触发
           /!* page = api.getCurrent();
            console.log(page,isFlag);
            getList(page, pageCut,false);*!/
        }
    });*/
});