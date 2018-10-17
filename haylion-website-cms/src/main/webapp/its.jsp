<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title></title>
<meta charset="utf-8">
<link rel="stylesheet" href="css/index.css" />
</head>
<body>
    <jsp:include page="/foreground/common/head.jsp" />
	<div id="its">
    <!--轮播图-->
    <!-- <div class="fullSlide">
		        <div class="bd">
		            <ul>
		                
		            </ul>
		        </div>
		        <div class="hd"><ul></ul></div>
     </div> -->
     
     <!-- 	智慧出行首图 -->
    <div class="its-img"></div>
     
    <div id="contain">
        <div class="company">
        <div class="company-nav">
            <div class="about-top">
                <div class="about-line" style="width:31px;"></div>
                <div class="about-text" style="width:106px;"></div>
                <div class="about-line" style="width:31px;"></div>
            </div>
            <ul class="tabs">
            </ul>
        </div>
        <div class="company-content">
            <div id="content1" class="active">
                <div class="its">
                    <div class="place">
                        <div class="place-intro"></div>
                        <div class="place-content">                       
                        </div>                     
                    </div>
                    <div class="maas">
                      <div class="box">
			            <!--  maas介绍 -->
			            <div class="module">
			           		<div class="maas_intro">
			           		
			           		</div>
			            </div>
			            
			            <!--  近期项目计划 -->
			            <div class="module">
			           		<div class="maas_plan">
			           		
			           		</div>
			            </div>
			            
			            <!--  智慧出行 -->
			            <div class="module">
			           		<div class="maas_phone_word1">
			           		
			           		</div>
			            </div>
			            
			            <!--  麦诗出行 -->
			            <div class="module">
			           		<div class="maas_phone_word2">
			           		
			           		</div>
			            </div>
			        </div>
			    </div>  
           		</div>
            </div>
            
           <div id="content2">
                <div class="its">
                    <div class="place">
                        <div class="place-intro2"></div>
                        <div class="place-content">                       
                        </div>                     
                    </div>
                    <div class="bus_cloud_platform">
                    	<div class="cloud_storage"></div>
                    	<div class="cloud_model"></div>
                    	<div class="cloud_data"></div>
                    	<div class="graphic_details"></div>
                    </div>  
           		</div>
            </div>
            
            <div id="content3">
                <div class="its">
                    <div class="place">
                        <div class="place-intro3"></div>
                        <div class="place-content">                       
                        </div>                     
                    </div>
                    <div class="net_customized_bus">
                    <div class="NCBlist1"></div>
                    <div class="NCBlist2"></div>
                    <div class="clear"></div>
                    <div class="NCBlist3"></div>
                    <div class="NCBlist4"></div>
                    <div class="clear"></div>
                    <div class="NCBlist5"></div>
                	</div>          
           		</div>
            </div>
            
            <div id="content4">
                <div class="its">
                    <div class="place">
                        <div class="place-vision"></div>
                        <div class="place-content">                       
                        </div>                     
                    </div>
                    <div class="manage-platform">
           			<div class="MPlist0"></div>
           			 <div class="clear"></div>
           			<div class="MPlist1"></div>
           			 <div class="clear"></div>
           			<div class="MPlist2"></div>
           			 <div class="clear"></div>
           			<div class="MPlist3"></div>
           			 <div class="clear"></div>
           			<div class="MPlist4"></div>
           			 <div class="clear"></div>
           		</div>
           		<div style="height: 40px;"></div>           
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
<script src="js/its.js"></script>
</body>
</html>