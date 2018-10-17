//招聘中心左侧菜单
$(function(){
	  $.ajax({
       type:"post",
       url:pathName+"/module/getType.do",	
       data:{"id":8,"langid":1},  
       success:function(data){        	 
           var tabHtml = "";
           for(var i =0;i<data.data.length;i++){         	 
          	 var html="";
          	 var titleHtml="";
          	 var placeHtml="";
          	 var introHtml="";
          	titleHtml=data.data[i].modulename;
          	 html+='<span>'+data.data[i].modulename+'</span>';
          	 tabHtml+='<li><a href="#">'+data.data[i].typename+'</a></li>'; 	            	     		
          		     placeHtml+='<span>您所在的位置：</span>';
	            	 placeHtml+='<a href="#">'+data.data[i].modulename+'</a>';
	                 placeHtml+='<span class="place-line "></span>';			                 
	                introHtml+='<span>'+data.data[0].typename+'</span>';                                           
        	  } 
           $("title").html(titleHtml);
         $('.about-text').html(html);
         $('.tabs').html(tabHtml);
         $('.place-content').html(placeHtml);
         $('.place-intro').html(introHtml);
         $('.recruit h3').html(introHtml);
	       $('.tabs li a').eq(0).attr({
	    	   "href":"javascript:void(0)",
	    	   "title":"content1",
	    	   "class":"selecteds"
	       });	            
        selecteds();
       }
   }); 			
}) 		

//招聘中心首图
$(function(){
	  $.ajax({
         type:"post",
         url:pathName+"/news/getList.do",	
         data:{"typeid":22,"langid":1},  
         success:function(data){
             var imgHtml = "";
             for(var i =0;i<data.newlist.length;i++){			            	   		            	        	 		            	   		            	       	
          	    imgHtml+='<img src="'+http+data.newlist[i].imagePath+'" />';      
          	  } 		              
          $('.about-img').html(imgHtml);		           
         }
     }); 			
}) 

//热招职位标题栏
$(function(){
	  $.ajax({
         type:"post",
         url:pathName+"/news/getList.do",	
         data:{"typeid":33,"langid":1},  
         success:function(data){          
             for(var i =0;i<data.newlist.length;i++){
            	 var reHtml = "";
            	 reHtml+='<li>'+data.newlist[i].title+'</li><li>'+data.newlist[i].worktype+'</li><li>'+data.newlist[i].workplace+'</li><li>'+data.newlist[i].content+'</li>';      
          	  } 		              
          $('.recruit-title ul').html(reHtml);		           
         }
     }); 			
}) 

//热招职位岗位信息栏
$(function(){		
		  $.ajax({
	           type:"post",
	           url:pathName+"/news/getList.do",	
	           data:{"typeid":15,"langid":1},  
	           success:function(data){
	               var str = "";	               
	              for(var i =0;i<data.newlist.length;i++){  
	            	  var videoTime=data.newlist[i].year+'-'+data.newlist[i].month+'-'+data.newlist[i].day
	            		  str +=' <div class="accordion-title"><ul><li>'+data.newlist[i].title+'</li><li>'+data.newlist[i].worktype+'</li><li>'+data.newlist[i].workplace+'</li><li>'+videoTime+'</li></ul></div>';           		  
	            		  str+='<div class="content fade">'+data.newlist[i].content+'</div>';         	                                         
	               }           
	             $('.accordion').html(str);
//              第一条岗位信息详情选中展开
	             $(".content").eq(0).addClass("in");
//	             手风琴效果，点击内容显示隐藏
	             $(".accordion-title").click(function(){
	            	    $(this).next(".content").toggleClass("in")
	            	        .siblings(".content").removeClass("in")
	            	});
	           }
	       }); 	
	}) 