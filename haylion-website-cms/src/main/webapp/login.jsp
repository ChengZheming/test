<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>海梁科技官网管理系统后台登录页面</title>
<script src="${pageContext.request.contextPath}/static/bootstrap3/js/jquery-1.11.2.min.js"></script>
<STYLE>
*{ -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; }
body,html {
	font:14px "microsoft yahei", Arial, Helvetica, sans-serif;
    margin:0;
    padding:0;
    height:100%;
}
ul,li,p,h1,h2,h3,h4,h5,h6,dl,dt,dd {
    margin:0;
    padding:0;
    border:none;
    list-style:none;
}
.content {
    min-height: 100%;
    position: relative;
    padding:128px 0 160px 0;
}
.top_div{
    position:fixed;
  	top:0;
    left:0;
    bottom:0;
    right:0; 
    z-index:-1;
}
.top_div img{
    height:100%; 
    width:100%;
}

.top_title{
   margin:0 auto;
   font-size:44px;
   color:rab(11,79,169);
   width:792px;
   height:64px;
   lin-height:64px;
   font-family:STXingKai Regular;
}
.top_title h2{
 font-weight:normal;
 width:792px;
   height:64px;
}
.login-bottom{
    width:100%;
    height:48px;
    margin: 0 auto;
    position:absolute;
    bottom:0; 
    text-align: center;
    font-size:14px;
   	color:rgb(5,57,98);
    line-height:48px;
}

.login-box{
   box-sizing:border-box;
	width:600px;
	height:320px;
	margin:127px auto 0 auto ;
  	background:url(static/images/b_1.png) ;
    color:rgb(5,57,98);
    padding:48px 0;
}

.login-text{
  	margin:0 auto;
  	height:48px;
 	font-size:24px;
 	line-height:48px;
 	width:410px;
 	color:rgb(59,59,59);
}
#userName,#password{
    box-sizing:border-box;
	width:300px;
	height:38px;
	border-radius:10px;
	outline:none;
	font-size:16px;
	color:rgb(59,59,59);
	padding-left:5px;
	border: 1px solid rgb(255, 255, 255);
	vertical-align:middle; 
	margin-top:-5px;
}
.login-password{
	margin:38px  auto;
  	height:48px;
 	font-size:24px;
 	line-height:48px;
 	width:410px;
 	color:rgb(59,59,59);
/*  	background:#ddd; */
}

.login-bth{
   	margin:10px auto;
  	width:200px;
  	height:40px;
  	line-height:40px;
}
#loginBtn{
    width:200px;
  	height:42px;
    border-radius:10px;
  	line-height:32px;
  	border: 1px solid rgb(153, 223, 250);
  	font-size:22px;
   	outline:none;
    cursor:pointer;
    color:#fff;
    background:#2865e3;
    
}
.login-bottom{
    width:100%;
    height:148px;
    margin: 0 auto;
    position:absolute;
    bottom:0; 
    text-align: center;
    font-size:16px;
    line-height:148px;
}
</STYLE>
     
<SCRIPT type="text/javascript">
/* $(function(){
	//得到焦点
	$("#password").focus(function(){
		$("#left_hand").animate({
			left: "150",
			top: " -38"
		},{step: function(){
			if(parseInt($("#left_hand").css("left"))>140){
				$("#left_hand").attr("class","left_hand");
			}
		}}, 2000);
		$("#right_hand").animate({
			right: "-64",
			top: "-38px"
		},{step: function(){
			if(parseInt($("#right_hand").css("right"))> -70){
				$("#right_hand").attr("class","right_hand");
			}
		}}, 2000);
	});
	//失去焦点
	$("#password").blur(function(){
		$("#left_hand").attr("class","initial_left_hand");
		$("#left_hand").attr("style","left:100px;top:-12px;");
		$("#right_hand").attr("class","initial_right_hand");
		$("#right_hand").attr("style","right:-112px;top:-12px");
	});
}); */

function checkForm(){
	var userName=$("#userName").val();
	var password=$("#password").val();
	if(userName==null||userName==""){
		$("#error").html("用户名不能为空！");
		return false;
	}
	if(password==null||password==""){
		$("#error").html("密码不能为空！");
		return false;
	}
	return true;
}
</SCRIPT>
</head>
<body>
<div class="content">
<DIV class="top_div">
<img src="${pageContext.request.contextPath}/static/images/log.jpg">
</DIV>
<div class="top_title">
<h2>海梁科技官网后台管理系统</h2>
</div>
<form action="${pageContext.request.contextPath}/user/login.do" method="post" onsubmit="return checkForm()">
		<div class="login-box">
			<div class="login-text">
				<span>用户名：</span>
				<input id="userName" name="username" class="ipt" type="text" placeholder="请输入用户名" value="${user.username }"> 
		    </div>
			<div class="login-password">
				<span>密&nbsp;&nbsp;&nbsp;码：</span>      
				<input id="password" name="password" class="ipt"  type="password" placeholder="请输入密码" value="${user.password }">   
		  	</div>
			<div class="login-bth">			
				<span><font color="red" id="error">${errorInfo }</font></span>
		        <span style="text-alingn:center"> 
		              <input type="submit"  id="loginBtn"  value="登&nbsp;&nbsp;&nbsp;录"/> 
		         </span>         
		    </div>
	    </div>
</form>

<div class="login-bottom">
		<span>Copyright © 2018-2028 海梁科技 版权所有</span>
</div>
</div>
</body>
</html>