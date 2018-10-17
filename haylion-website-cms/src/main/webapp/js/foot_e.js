var pathName = window.document.location.pathname;
pathName = "http://"+window.document.location.hostname+":"+window.document.location.port+pathName.substring(0,pathName.substr(1).indexOf('/')+1);	
$(function(){
	  $.ajax({
         type:"post",
         url:pathName+"/news/getList.do",	
         data:{"typeid":23,"langid":2},  
         success:function(data){
        	 var title="";
             var html = "";
             var co=""
             var mi="";
             var wx="";
             for(var i =0;i<data.newlist.length;i++){			            	   		            	        	 		            	   		            	  
            	 title+='<span>'+data.newlist[i].title +'</span>';       	         	  
          	     html+='<div>'+data.newlist[i].content+'</div>';
          	     co+='<span>'+data.newlist[i].worktype+'</span>';
          	     mi+='<a href="http://www.miibeian.gov.cn/ ">'+data.newlist[i].workplace+'</a>'; 
          	     wx+='<img src="'+http+data.newlist[i].imagePath+'" />';
          	  } 	
              $(".bottom-contacts").html(html);
              $(".bottom-content h3").html(title);
              $(".wx-img").html(wx);
              $(".mi").html(mi);
              $(".copy").html(co)
         }
     }); 	
}) ;