//首页新闻列表和图片
$(function(){
	  $.ajax({
           type:"post",
           url:pathName+"/news/getList.do",	
           data:{"start":0,"limit":4,"typeid":1,"langid":1},  
           success:function(data){
               var str = "";
               var  strImg="";
              for(var i =0;i<data.newlist.length;i++){		
           	   var Monday=data.newlist[i].year+'-'+data.newlist[i].month
                   str +='<li class="li">';
                   str+='<div class="news-date"><p>'+data.newlist[i].day+'</p><p>'+Monday+'</p></div>';		
                   str+='<div class="news-detail"><a class="news-a" href="newsDetails.jsp?newsId='+data.newlist[i].id+'&langid=1">'+data.newlist[i].title +'</a></div>';
                   str+='</li>';
                   
                   strImg+='<img src="'+http+data.newlist[i].imagePath+'" />'
               }
            $('#news-left-content').html(str);
            $('.news-right').html(strImg);
           }
       }); 	
})  
		
	//首页新闻标题
	$(function(){
	  $.ajax({
         type:"post",
         url:pathName+"/module/getType.do",	
         data:{"id":6,"langid":1},  
         success:function(data){        	 	       
             for(var i =0;i<data.data.length;i++){     	 
            	 var html="";	            	
            	 html+='<span>'+data.data[i].modulename+'</span>';	            	
          	  } 
           $('.news-left h3').html(html);
         }
     }); 			
}) 				
	
	//视频播放和暂停，鼠标移入移出，显示播放暂停图标
  function playVideo(){
    var container = document.querySelector('.video-left');
    var ctrl = document.querySelector(".ctrl");
    var ctrlImg = document.querySelector(".ctrl img");
    var video = document.querySelector("#video");
 /*    var video= document.querySelector(".video-index video") */
    //鼠标移入时
    /*container.onmouseenter = function(){
        ctrl.style.display='block';
    };*/
    //鼠标移出时
    container.onmouseleave = function(){
        ctrl.style.display='none';
    };
    //点击自定义按钮时
    ctrl.onclick = function(){
        if(video.paused) {
        	video.play();
            ctrlImg.src="../static/images/pause.png";
        }else {
        	video.pause();
            ctrlImg.src="../static/images/play.png";
        }
    };
    /*var ad = document.querySelector(".cover-img img");
    //视频播放时
    video.onplay = function(){
        ad.style.display="none";
        ctrl.style.display='none';
    };
    //视频暂停时
    video.onpause = function(){
        ad.style.display="none";
    }*/
}

//首页视频和视频封面
 $(function(){
	  $.ajax({
           type:"post",
           url:pathName+"/news/getList.do",	
           data:{"start":0,"limit":1,"typeid":16,"langid":1},  
           success:function(data){
               var vd = "";
               for(var i =0;i<data.newlist.length;i++){
            	   //html5加入的video标签，poster属性值为URL规定视频下载时显示的图像，或者在用户点击播放按钮前显示的图像。
            	    vd+='<video src="'+http+data.newlist[i].imagePath+
            	    '" id="video" preload="auto" controls="controls" poster="'+data.newlist[i].content+
            	    '" style="width:100%;height:100%;object-fit: fill;">您的浏览器不支持</video>';
            	    /* vd+='<img class="ad" src="${pageContext.request.contextPath}/static/images/cover.jpg" />'; */
            	    //vd+='<div class="cover-img">'+data.newlist[i].content+'</div>'; 
            	    //自定义的播放暂停按钮
                    //vd+='<span class="ctrl"> <img src="../static/images/play.png" /></span>';  	   
            	  }
            $('.video-left').html(vd);
            //不需要通过自定义按钮控制视频播放
            //playVideo();
           }
       }); 	
})

//首页公司简介
$(function(){
	  $.ajax({
           type:"post",
           url:pathName+"/news/getList.do",	
           data:{"start":0,"limit":1,"typeid":6,"langid":1},  
           success:function(data){
               var intro = "";
               for(var i =0;i<data.newlist.length;i++){			            	   		            	        	 		            	   		            	  
            	   intro+='<h3>'+data.newlist[i].title +'</h3>';		            	
            	   intro+='<p>'+data.newlist[i].content+'</p>';	   
            	  } 		              
            $('.video-right').html(intro);		            
           }
       }); 	
}) 

	//首页轮播图
	$(function(){
		  $.ajax({
	           type:"post",
	           url:pathName+"/news/getList.do",	
	           data:{"typeid":17,"langid":1},  
	           success:function(data){
	               var sd = "";
	               for(var i =0;i<data.newlist.length;i++){			            	   		            	        	 		            	   		            	       	
	            	 sd+='<li><img src="'+http+data.newlist[i].imagePath+'" /></li>';	            	    
	            	  } 		              
	            $('.bd ul').html(sd);	
	            jQuery(".fullSlide").slide(
				  	    { titCell:".hd ul", mainCell:".bd ul", effect:"leftLoop", vis:"auto", autoPlay:true, autoPage:true, trigger:"click" }
				  	); 
	           }
	       }); 			
	}) 		