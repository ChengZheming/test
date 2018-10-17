<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title></title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="css/index.css" />
<style>
#pageContent li{
     margin-right:10px;
 }
#pageContent li:nth-child(3n){
    margin-right:0;
 }
</style>
</head>
<body>
    <jsp:include page="/foreground/common/head.jsp" />
	
	<div id="news">
	<!--轮播图-->
   <div class="fullSlide">
		        <div class="bd">
		            <ul>		                
		            </ul>
		        </div>
		        <div class="hd"><ul></ul></div>
     </div>	
  <div id="contain">
  	<!-- 左侧导航栏 -->
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
        <div class="products">
          <div class="place">
            <div class="place-intro"></div>
            <div class="place-vision"></div>
            <div class="place-events"></div>
            <div class="place-content">
             
            </div>
          </div>
          <div class="products-details">
          	<div id="newsContent">
	            <ul id="pageContent">
	                
	            </ul>
			</div>
			 <div style="clear:both;"></div>
			 <!-- 分页 -->
              <div class="newsPageCode">
                  
              </div>
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
</body>
</html>