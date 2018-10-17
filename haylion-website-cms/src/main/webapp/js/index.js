/**
 * Created by dell on 2018/1/8.
 */
var strPath = window.document.location.pathname;
pathName = "http://"+window.document.location.hostname+":"+window.document.location.port+strPath.substring(0,strPath.substr(1).indexOf('/')+1);	

//上上传服务器图片读取路径地址
var http="";
//var http="http://120.78.186.51:2333";
//var http="http://localhost:8081";
//导航栏当前页面高亮状态
$(document).ready(function(){
    $(".top-nav a").each(function(){
        $this = $(this);     
        if($this[0].href==String(window.location)){
            $this.addClass("hover");
        } 
    });
});
//左侧导航栏，点击实现选中状态，选项卡切换页面
function selecteds(){
    $('.tabs  a').click(function(e){
    	/*e.preventDefault(); */
    	//点击切换左侧标题显示相应的高亮状态
        $(this).parent().siblings().children().removeClass('selecteds');
        $(this).addClass('selecteds');
        //点击切换显示相应的页面
        $(".company-content div").removeClass("active");
        $('#' + $(this).attr('title')).addClass('active');
    })
}






