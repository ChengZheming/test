<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>行业详情</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="css/index.css" />
<style>
.news-details-content  img{
	width: 480px;
}

</style>

</head>
<body>
	<jsp:include page="/foreground/common/head.jsp" />
	
<div id="news">
	<!-- 轮播图 -->
 	<div class="fullSlide">
		        <div class="bd">
		            <ul> </ul>
		        </div>
		        <div class="hd"><ul></ul></div>
     </div>
  <div id="contain">
    <div class="company">
    <!-- 左侧导航栏 -->
      <div class="company-nav">
        <div class="about-top">
          <div class="about-line"></div>
          <div class="about-text"></div>
          <div class="about-line"></div>
        </div>
        <ul class="tabs">
          
        </ul>
      </div>
      
       <!--  新闻详情内容 -->
      <div class="company-content">
        <div id="content1" class="active">
          <div class="news-details">
            <div class="place">
            <div class="place-details"></div>
            <div class="place-visions"></div>
              <div class="place-content">
                
              </div>
            </div>
            <div class="news-details-content">
              
            </div>
          </div>
        </div>          
      </div>
    </div>
  </div>
</div>
	
	<jsp:include page="/foreground/common/foot.jsp" />
	
<script src="js/jquery-1.11.3.js"></script> 
<script src="js/page.js"></script>
<script src="js/jquery.SuperSlide.2.1.2.js"></script>
<script src="js/index.js"></script>
<script src="js/newsList.js"></script>
<script>

//左侧导航栏
$(function(){
	  $.ajax({
     type:"post",
     url:pathName+"/module/getType.do",	
     data:{"id":5,"langid":1},  
     success:function(data){        	 
         var tabHtml = "";
         for(var i =0;i<data.data.length;i++){
        	 console.log(data.data[i]);	            	 
        	 var html="";
        	 var placeHtml="";
        	 var introHtml="";
        	 var visionHtml="";
        	 var eventsHtml="";
        	 var detailsHtml="";
        	 html+='<span>'+data.data[i].modulename+'</span>';
        	 tabHtml+='<li><a href="#">'+data.data[i].typename+'</a></li>'; 	            	     		
        		     placeHtml+='<span>您所在的位置：</span>';
	            	 placeHtml+='<a href="#">'+data.data[i].modulename+'</a>';
	                 placeHtml+='<span class="place-line "></span>';                 
	                introHtml+='<span>'+data.data[0].typename+'</span>';
	                visionHtml+='<span style="color:#666;">'+data.data[1].typename+'</span>';
	                eventsHtml+='<span>'+data.data[2].typename+'</span>';	
	                detailsHtml+='<span class="place-line "></span><span>行业详情</span>';
        	 console.log(data.data[i].typeid); 
      	  } 
	         $('.about-text').html(html);
	         $('.tabs').html(tabHtml);
	         $('.place-content').html(placeHtml);
	         $('.place-intro').html(introHtml);
	         $('.place-visions').html(visionHtml);
	         $('.place-events').html(eventsHtml);
	         $('.place-details').html(detailsHtml);
		       $('.tabs li a').eq(0).attr({
		    	   "href":"news.jsp?typeid=1&langid=1",		    	    
		       });
		       $('.tabs li a').eq(1).attr({
		        	  "href":"news.jsp?typeid=2&langid=1",	
		        	  "class":"selecteds"	 
		        });
		        $('.tabs li a').eq(2).attr({
		        	  "href":"news.jsp?typeid=3&langid=1",	    	   
		        });          
		      
     }
 }); 			
}) 		
</script>
</body>
</html>