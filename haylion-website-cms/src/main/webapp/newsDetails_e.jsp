<!DOCTYPE HTML>
<html>
<head>
<title>News Details</title>
<meta charset="utf-8">
  <link rel="stylesheet" href="css/index_e.css"/>
<style>
  .news-details-content  img{
	width: 480px;
}

</style>

</head>
<body>
<jsp:include page="/foreground/common/head_e.jsp" />
<div id="news">
  <div class="fullSlide">
		        <div class="bd">
		            <ul>
		                
		            </ul>
		        </div>
		        <div class="hd"><ul></ul></div>
     </div>
  
  <div id="contain">
    <div class="company">
      <div class="company-nav">
        <div class="about-top">
          <div class="about-line"></div>
          <div class="about-text"></div>
          <div class="about-line"></div>
        </div>
        <ul class="tabs">
          
        </ul>
      </div>
      <div class="company-content">
        <div id="content1" class="active">
          <div class="news-details">
            <div class="place">
             <div class="place-details"></div>
            <div class="place-intro"></div>  
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
<jsp:include page="/foreground/common/foot_e.jsp" />
<script src="js/jquery-1.11.3.js"></script> 
<script src="js/page.js"></script>
<script src="js/jquery.SuperSlide.2.1.2.js"></script>		
<script src="js/index.js"></script>
<script src="js/newsList_e.js"></script>
<script>

$(function(){
	  $.ajax({
     type:"post",
     url:pathName+"/module/getType.do",	
     data:{"id":16,"langid":2},  
     success:function(data){        	 
         var tabHtml = "";
         for(var i =0;i<data.data.length;i++){
        	 console.log(data.data[i]);	            	 
        	 var html="";
        	 var placeHtml="";
        	 var introHtml="";
        	 var detailsHtml="";
        	 html+='<span>'+data.data[i].modulename+'</span>';
        	 tabHtml+='<li><a href="#">'+data.data[i].typename+'</a></li>'; 	            	     		
        		 placeHtml+='<span>Your current location : </span>';
	            	 placeHtml+='<a href="#">'+data.data[i].modulename+'</a>';
	                 placeHtml+='<span class="place-line "></span>';	                 
	                introHtml+='<span style="color:#666;">'+data.data[0].typename+'</span>';
	                detailsHtml+='<span class="place-line "></span><span>News Details</span>';
      	  } 
	         $('.about-text').html(html);
	         $('.tabs').html(tabHtml);
	         $('.place-content').html(placeHtml);
	         $('.place-intro').html(introHtml);
	         $('.place-details').html(detailsHtml);
		       $('.tabs li a').eq(0).attr({
		    	   "href":"news_e.jsp?typeid=1&langid=2",
		    	   "class":"selecteds"	   
		       });		    
		      
     }
 }); 			
}) 		
</script>
</body>
</html>
