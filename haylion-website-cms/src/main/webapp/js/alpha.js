 //阿尔法巴左侧菜单
$(function(){
	  $.ajax({
         type:"post",
 url:pathName+"/module/getType.do",	
 data:{"id":3,"langid":1},  
 success:function(data){        	 
     var tabHtml = "";
     for(var i =0;i<data.data.length;i++){       	 
    	 var html="";
    	 var titleHtml="";
    	 var placeHtml="";
    	 var introHtml="";
    	 var visionHtml="";
    	 var eventsHtml="";
    	 titleHtml=data.data[i].modulename
    	 html+='<span>'+data.data[i].modulename+'</span>';
    	 tabHtml+='<li><a href="#">'+data.data[i].typename+'</a></li>'; 	            	     		
		 placeHtml+='<span>您所在的位置：</span>';
    	 placeHtml+='<a href="#">'+data.data[i].modulename+'</a>';
         placeHtml+='<span class="place-line "></span>';			                 
        introHtml+='<span>'+data.data[0].typename+'</span>';
        eventsHtml+='<span>'+data.data[1].typename+'</span>';		
        visionHtml+='<span>'+data.data[2].typename+'</span>';			               
  	  } 
       $("title").html(titleHtml); 
       $('.about-text').html(html);
       $('.tabs').html(tabHtml);
       $('.place-content').html(placeHtml);
       $('.place-intro').html(introHtml);
       $('.place-vision').html(visionHtml);
       $('.place-events').html(eventsHtml);
       $('.tabs li a').eq(0).attr({
    	   "href":"javascript:void(0)",
    	   "title":"content1",
    	   "class":"selecteds"
       });				      
       $('.tabs li a').eq(1).attr({
        	  "href":"javascript:void(0)",
	    	   "title":"content2",
	    	   "onclick":"base()",					    	
        });  	
       $('.tabs li a').eq(2).attr({
        	  "href":"javascript:void(0)",
	    	   "title":"content3",
	    	   "onclick":"alpha();"
		        });	
	          selecteds();
         }
     }); 			
}) 		

//阿尔法巴轮播图
$(function(){
	  $.ajax({
           type:"post",
   url:pathName+"/news/getList.do",	
   data:{"typeid":18,"langid":1},  
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

//cbsf
$(function(){		
	  $.ajax({
           type:"post",
   url:pathName+"/news/getList.do",	
   data:{"typeid":41,"langid":1},  
   success:function(data){
       var str = "";	               
      for(var i =0;i<data.newlist.length;i++){          	                    	             	 		            
    		  str+='<div class="cbsfs">'+data.newlist[i].content+'</div>';         	                                         
       }           
     $('.cbsf-details').html(str);	          
           }
       }); 	
}) 

//示范基地
function base(){	
	  $.ajax({
           type:"post",
   url:pathName+"/news/getList.do",	
   data:{"typeid":42,"langid":1},  
   success:function(data){
       var baHtml = "";		               
      for(var i =0;i<data.newlist.length;i++){          	 			            	  	        	  			        	  			        		            
    	  baHtml+='<div class="base-content">'+data.newlist[i].content+'</div></li>';				        
       }           			          
    $('.base-details').html(baHtml);			         
		           }			   
		}) 
}	

//阿尔法巴
function alpha(){	
			  $.ajax({
		           type:"post",
				   url:pathName+"/news/getList.do",	
				   data:{"typeid":43,"langid":1},  
				   success:function(data){
				       var alHtml = "";		               
				      for(var i =0;i<data.newlist.length;i++){          	 			            	  	        	  			        	  			        		            
				    	  alHtml+='<div class="alphas">'+data.newlist[i].content+'</div></li>';				        
				       }           			          
				    $('.alpha-details').html(alHtml);			         
				  }			   
				}) 
}	
