<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head lang="en">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta charset="UTF-8">
<title>HAYLION</title>
<meta name="viewport"
	content="width=device-width,initial-scale=1,user-scalable=no" />
<link rel="stylesheet" href="css/index_e.css" />
<link rel="stylesheet" href="css/animate.css" />
<style>
 body,html{
     background:#fff;
   }
	 .more {
        width: 112px;
        height: 42px;
        float: right;
        position: relative;
        margin-top: 24px;
         background: url(../static/images/more1.png);
        cursor: pointer;
    }
    .more:hover {
       background: url(../static/images/more2.png);
    }	
    .more a{
    	display: inline-block;
    	width: 112px;
        height: 42px;
    }
    
    .partner .partner-ul  {
        width: 1180px;
         margin: 0px auto;
    }
  .partner .partner-ul  p img{
        width: 180px;
        height: 48px;
        margin-top: 32px;
        position: relative;
        margin-right: 20px;
        float:left;
    }
 .partner .partner-ul  p img:nth-child(6n){
   margin-right: 0;
 }
</style>
</head>
<body>
<jsp:include page="/foreground/common/head_e.jsp" />
<div id="main">
    
    <div class="fullSlide">
		        <div class="bd">
		            <ul>
		                
		            </ul>
		        </div>
		        <div class="hd"><ul></ul></div>
           </div>		
    
    <div class="news">
        <div class="news-left wow slideInLeft" data-wow-duration="1s">
            <h3></h3>
            <ul id="news-left-content">
                
            </ul>
            <div class="more" ><a href="${pageContext.request.contextPath}/news_e.jsp?typeid=1&langid=2"></a></div>
        </div>
        <div class="news-right wow slideInRight" data-wow-duration="1s">
            
        </div>
    </div>
    
    <div class="video">
        <div class="video-left wow slideInLeft" data-wow-duration="1s">
					
				</div>
        <div class=" video-right wow slideInRight" data-wow-duration="1s" >
            
        </div>
    </div>
</div>

<jsp:include page="/foreground/common/foot_e.jsp" />

<script src="js/jquery-1.11.3.js"></script>
<script>


</script>
<script src="js/jquery.SuperSlide.2.1.2.js"></script>		
<script src="js/index.js"></script>
<!-- <script src="js/animate.js"></script> -->
<script src="js/home_e.js"></script>
<script src="js/wow.min2.js"></script> 
		<script>
		if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
			new WOW().init();
		};
		</script>
</body>
</html>