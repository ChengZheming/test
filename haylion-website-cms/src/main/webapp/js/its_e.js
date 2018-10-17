 //产品与服务左侧菜单
$(function(){
	  $.ajax({
         type:"post",
		 url:pathName+"/module/getType.do",	
		 data:{"id":14,"langid":1},  
		 success:function(data){
		     //console.log(data);
		     var tabHtml = "";
		     for(var i =0;i<data.data.length;i++){       	 
		    	 var html="";
		    	 var titleHtml="";
		    	 var placeHtml="";
		    	 var introHtml="";
		    	 var introHtml2="";
		    	 var introHtml3="";
		    	 titleHtml=data.data[i].modulename
		    	 html+='<span>'+data.data[i].modulename+'</span>';
		    	 tabHtml+='<li><a href="#">'+data.data[i].typename+'</a></li>'; 	            	     		
				 placeHtml+='<span>Your current location : </span>';
		    	 placeHtml+='<a href="#">'+data.data[i].modulename+'</a>';
		         placeHtml+='<span class="place-line "></span>';			                 
		        introHtml+='<span>'+data.data[0].typename+'</span>';		       	
		        introHtml2+='<span>'+data.data[1].typename+'</span>';
		        introHtml3+='<span>'+data.data[2].typename+'</span>';
		  	  } 
		  	  //console.log(psgODHtml);
		       $("title").html(titleHtml); 
		       $('.about-text').html(html);
		       $('.tabs').html(tabHtml);
		       $('.place-content').html(placeHtml);
		       $('.place-intro').html(introHtml);
		       $('.place-intro2').html(introHtml2);
		       $('.place-vision').html(introHtml3);
		       $('.tabs li a').eq(0).attr({
		    	   "href":"javascript:void(0)",
		    	   "title":"content1",
		    	   "class":"selecteds"
		       });	
		        $('.tabs li a').eq(1).attr({
		    	   "href":"javascript:void(0)",
		    	   "title":"content2",
		    	   "onclick":""
		       });	
		        $('.tabs li a').eq(2).attr({
		        	"href":"javascript:void(0)",
			    	"title":"content3",
			    	"onclick":""
			   });
			   
			      selecteds();
		         }
		  }); 			
}) 	



//智能交通轮播图
/*$(function(){
	  $.ajax({
           type:"post",
   url:pathName+"/news/getList.do",	
   data:{"typeid":139,"langid":1},  
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
})*/

//智能交通首图
$(function(){
	  $.ajax({
           type:"post",
       url:pathName+"/news/getList.do",	
       data:{"typeid":139,"langid":1},  
       success:function(data){
           var imgHtml = "";
           for(var i =0;i<data.newlist.length;i++){			            	   		            	        	 		            	   		            	       	
        	   imgHtml+='<img src="'+http+data.newlist[i].imagePath+'" />';  
        	  } 		              
        $('.its_e-img').html(imgHtml);		           
           }
       }); 			
})