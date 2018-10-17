<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title></title>
<meta charset="utf-8">
<link rel="stylesheet" href="css/index.css" />
<style>
</style>
</head>
<body>
	<jsp:include page="/foreground/common/head.jsp" />
	<div id="alphaba">
	<!--轮播图-->
    <div class="fullSlide">
		        <div class="bd">
		            <ul>
		                
		            </ul>
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
        <div class="company-content">
        	<!-- cbsf -->
            <div id="content1" class="active">
                <div class="cbsf">
                    <div class="place">
                    	<div class="place-intro"></div>
                        <div class="place-content">
                           
                        </div>
                    </div>                    
                    <div class="cbsf-details">
                        
                    </div>
                </div>
            </div>
            <!-- 示范基地 -->
            <div id="content2">
                <div class="base">
                    <div class="place">
                        <div class="place-events"></div>
                        <div class="place-content">
                          
                        </div>
                    </div>
                    <div class="base-details">
                    
                </div>
            </div>
        	</div>
        	<!-- 阿尔法巴 -->
            <div id="content3">
                <div class="alpha">
                    <div class="place">
                        <div class="place-vision"></div>
                        <div class="place-content">
                          
                        </div>
                    </div>
                    <div class="alpha-details">
                    
                </div>
            </div>
        </div>
            
    </div>
</div>
</div>
</div>
<jsp:include page="/foreground/common/foot.jsp" />		
	<script src="js/jquery-1.11.3.js"></script>
	<script src="js/jquery.SuperSlide.2.1.2.js"></script>			
	<script src="js/index.js"></script>
	<script src="js/alpha.js"></script>

</body>
</html>