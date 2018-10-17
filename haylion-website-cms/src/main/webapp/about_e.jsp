<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title></title>
<meta charset="utf-8">
<link rel="stylesheet" href="css/index_e.css" />
<link rel="stylesheet" href="css/style.css" />
<link rel="stylesheet" href="css/zoomify.min.css" />
<style>
.speech-details p img{
    margin-right: 25px;
}
.speech-details p img:nth-child(3n){ 
   margin-right:0;
}
.hisimg p img{
    margin:0 10px 10px 0;
}
.hisimg p img:nth-child(4n){ 
   margin-right:0;
}
#timeline {
    width: 920px;
    height: 430px;
    overflow: hidden;
    margin: 10px auto;
    position: relative;
}
#issues {
		width: 920px;
		height: 320px;
		overflow: hidden;
}	
#issues li {
		width: 920px;
		height: 320px;
		list-style: none;
		float: left;
		font-size: 16px;
		word-wrap: break-word;
}
 #issues li.selected {
    width:920px;
    min-height:320px;
    position: relative;
    overflow-y:scroll;
    overflow-x:hidden;
} 

</style>
</head>
<body>
<jsp:include page="/foreground/common/head_e.jsp" />

<div id="about-us">
    <div class="about-img">
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
                <div class="speech">
                    <div class="place">
                        <div class="place-intro"></div>
                        <div class="place-content">
                           
                        </div>
                    </div>
                    <div class="company-profile">
                    
                    </div>                                
                </div>
            </div>
            <div id="content2">
                <div class="bg">
                     <div class="bg-img">
                   		
                   </div> 
                    <div class="company-vision">
                        <div class="place">
                            <div class="place-vision"></div>
                            <div class="place-content">
                                
                            </div>
                        </div>

                        <div class="blocks">
                           
                        </div>
                    </div>                      
                    </div>
            </div>
            <div id="content3">
                <div class="company-history">
                    <div class="place">
                        <div class="place-events"></div>
                        <div class="place-content">
                            
                        </div>
                    </div>
                   <div class="history">
                        <div class="history-top">
                            
                        </div>                                       
                        <div id="timeline">
                           <div class="hisitemwrap">
							<ul id="issues">
								
							</ul>
						 	</div>			 		
							<ul id="dates">
								
							</ul>						
							<div class="hisline"></div>
							
		              </div>
                    </div>
                    <div class="hisimg">
                        <div class="hisimg-content">
                        
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="content4"  >
                <div class="chairman">
                    <div class="place">
                        <div class="place-chair"></div>
                        <div class="place-content">                       
                         
                        </div>                     
                    </div>
                    <div class="Leadership">
                    
                    </div>
                </div>
            </div>
            <div id="content5"  >
                <div class="staff">
                    <div class="place">
                        <div class="place-staff"></div>
                        <div class="place-content">                       
                         
                        </div>                     
                    </div>
                    <div class="staff-img">
                    		<div class="container">
	                    		<ul class="staff-ul">
	                    		</ul>
	                    		 <div style="clear:both;"></div>
				                <div class="newsPageCode" style="margin-top:0;">
				                  
				              </div>
			              </div>
                    </div>
                </div>
            </div>
             <div id="content6"  >
                <div class="partner">
                    <div class="place">
                        <div class="place-partner"></div>
                        <div class="place-content">                       
                         
                        </div>                     
                    </div>
                    <div class="partner-img">
                       <ul></ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</div>

<jsp:include page="/foreground/common/foot_e.jsp" />

<script src="js/jquery-1.11.3.js"></script>
<script src="js/index.js"></script>
<script src="js/jquery.timelinr-0.9.6.js"></script>
<script src="js/zoomify.min.js"></script>
<script src="js/about_e.js"></script>
</body>
</html>
