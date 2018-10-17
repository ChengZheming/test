<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title></title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/index_e.css"/>
    <style> </style>
</head>
<body>

<jsp:include page="/foreground/common/head_e.jsp" />
<div id="recruitment">
    <div class="about-img">
    </div>
    <div id="contain">
        <div class="company">
            <div class="company-nav">
                <div class="about-top">
                    <div class="about-line" style="width: 30px;"></div>
                    <div class="about-text" style="width:120px;text-align: center;font-size: 18px;margin: 0;"></div>
                    <div class="about-line" style="width: 30px;"></div>
                </div>
                <ul class="tabs">
                    <li class="active"><a href="#content1" data-toggle="tab" class="selected"></a></li>
                </ul>
            </div>
            <div class="company-content">
                <div id="content1" class="active">
                    <div class="recruit">
                        <div class="place">
                        	<div class="place-intro"></div>
                            <div class="place-content">
                                
                            </div>
                        </div>
                        <h3></h3>
                        <div class="recruit-title">
                            <ul>
                                
                            </ul>
                        </div>
                        <div class="clear"></div>
                        <div class="accordion">
                          
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
<script src="js/recruitment_e.js"></script>
</body>
</html>
