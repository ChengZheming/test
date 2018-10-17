<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title></title>
<meta charset="utf-8">
<link rel="stylesheet" href="css/index_e.css" />
</head>
<body>
    <jsp:include page="/foreground/common/head_e.jsp" />
	<div id="its">
    <!--轮播图-->
    <!-- <div class="fullSlide">
		        <div class="bd">
		            <ul>
		                
		            </ul>
		        </div>
		        <div class="hd"><ul></ul></div>
     </div> -->
     
     <!-- 	智能交通首图 -->
    <div class="its_e-img"></div>
     
    <div id="contain">
        <div class="company">
        <div class="company-nav">
            <div class="about-top">
                <!-- <div class="about-line" style="width:31px;"></div> -->
                <div class="about-text" style="width:180px;text-align: center;font-size: 18px;margin: 0;"></div>
                <!-- <div class="about-line" style="width:31px;"></div> -->
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
                    
           		</div>
            </div>
            
           <div id="content2">
                <div class="its">
                    <div class="place">
                        <div class="place-intro2"></div>
                        <div class="place-content">                       
                        </div>                     
                    </div>
                             
           		</div>
            </div>
            
            <div id="content3">
                <div class="its">
                    <div class="place">
                        <div class="place-vision"></div>
                        <div class="place-content">                       
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
<script src="js/jquery.SuperSlide.2.1.2.js"></script>
<script src="js/index.js"></script>
<script src="js/its_e.js"></script>
</body>
</html>