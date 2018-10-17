//协会工作左侧菜单
$(function(){
	  $.ajax({
       type:"post",
       url:pathName+"/module/getType.do",	
       data:{"id":17,"langid":2},  
       success:function(data){        	 
           var tabHtml = "";
           for(var i =0;i<data.data.length;i++){      	 
          	 var html="";
          	 var titleHtml="";
          	 var placeHtml="";
          	 var introHtml="";
          	 var visionHtml="";
          	 titleHtml=data.data[i].modulename
          	 html+='<span>'+data.data[i].modulename+'</span>';
          	 tabHtml+='<li><a href="#">'+data.data[i].typename+'</a></li>'; 	            	     		
       		 placeHtml+='<span>Your current location : </span>';
          	 placeHtml+='<a href="#">'+data.data[i].modulename+'</a>';
             placeHtml+='<span class="place-line "></span>';			                 
              introHtml+='<span>'+data.data[0].typename+'</span>';
              visionHtml+='<span>'+data.data[1].typename+'</span>';			                                
        	  } 
             $("title").html(titleHtml);
	         $('.about-text').html(html);
	         $('.tabs').html(tabHtml);
	         $('.place-content').html(placeHtml);
	         $('.place-intro').html(introHtml);
	         $('.place-vision').html(visionHtml);
		       $('.tabs li a').eq(0).attr({
		    	   "href":"javascript:void(0)",
		    	   "title":"content1",
		    	   "class":"selecteds"
		       });
		       $('.tabs li a').eq(1).attr({
		        	  "href":"javascript:void(0)",
			    	   "title":"content2",
			    	   "onclick":"work();"
		        });			        
	        selecteds();
       }
   }); 			
}) 		

//	协会工作轮播图
$(function(){
	  $.ajax({
       type:"post",
       url:pathName+"/news/getList.do",	
       data:{"typeid":20,"langid":2},  
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

//	专家委员会
$(function(){		
	  $.ajax({
         type:"post",
         url:pathName+"/news/getList.do",	
         data:{"typeid":13,"langid":2},  
         success:function(data){        	 
             var str = "";	               
            for(var i =0;i<data.newlist.length;i++){
          	   var imgTime=data.newlist[i].year+'-'+data.newlist[i].month+'-'+data.newlist[i].day;
          		  str +=' <h2>'+data.newlist[i].title+'</h2>'; 
          		  str +='<p>'+imgTime+'</p>'; 
          		  str+='<div class="expert-content">'+data.newlist[i].content+'</div>';         	                                         
             }           
           $('.expert').html(str);	          
         }
     }); 	
}) 

//工作委员会
function work(){
	 var pageSize=1;
		var total="";
		var pageCount="";
		var rest="";
		var par="";
		var newsHtml="";
		  $.ajax({
	          type:"post",
	          url:pathName+"/news/getList.do",
	          async:false,  
	          data:{"start":0,"limit":pageSize,"typeid":14,"langid":2},      
	          success:function(data){      
	              total=data.total;
	              rest=data.total%pageSize;
	              if(rest==0){
	            	  pageCount=total/pageSize;
	              }else { 
	            	  par=total/pageSize+1;
	            	  pageCount=parseInt(par);
	              }
	              html="";      
	            for(var i =0;i<data.newlist.length;i++){ 			           
	            	  var imgTime=data.newlist[i].year+'-'+data.newlist[i].month+'-'+data.newlist[i].day;
		              html +='<li> <h2>'+data.newlist[i].title+'</h2>'; 
	            	  html +='<p>'+imgTime+'</p>'; 
	            	  html+='<div class="work-content">'+data.newlist[i].content+'</div></li>';      			        		                        			          
	            }   
	            $('.work-content').html(html);	 
	          }
	      }); 
		  
		$(".newsPageCode").createPage({  
		   pageCount:pageCount,  
		     current:1,    
		    backFn:function(p){  
		        var start=(p-1)*pageSize;     
			        $.ajax({
			            type:"post",
			            url:pathName+"/news/getList.do",
			            async:false,  
			            data:{"start":start,"limit":pageSize,"typeid":14,"langid":2},
			            success:function(data){	
			            	html="";
			              for(var i =0;i<data.newlist.length;i++){   
			            	  var imgTime=data.newlist[i].year+'-'+data.newlist[i].month+'-'+data.newlist[i].day;
			            	  html +=' <li><h2>'+data.newlist[i].title+'</h2>'; 
			            	  html +='<p>'+imgTime+'</p>'; 
			            	  html+='<div class="expert-content">'+data.newlist[i].content+'</div><li>';   
			             }   
			             $('.work-content').html(html);	             		                    
			            }
			        }); 
		    }  
		}); 
}