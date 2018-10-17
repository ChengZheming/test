 //产品与服务
$(function(){
	  $.ajax({
         type:"post",
		 url:pathName+"/module/getType.do",	
		 data:{"id":15,"langid":1},  
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
				 placeHtml+='<span>Your current location : </span>';
		    	 placeHtml+='<a href="#">'+data.data[i].modulename+'</a>';
		         placeHtml+='<span class="place-line "></span>';			                 
		        introHtml+='<span>'+data.data[0].typename+'</span>';		       	
		        visionHtml+='<span>'+data.data[1].typename+'</span>';	
		        eventsHtml+='<span>'+data.data[2].typename+'</span>';	
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
			    	   "onclick":"",					    	
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
