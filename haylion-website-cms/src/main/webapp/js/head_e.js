var pathName = window.document.location.pathname;
pathName = "http://"+window.document.location.hostname+":"+window.document.location.port+pathName.substring(0,pathName.substr(1).indexOf('/')+1);

//公司logo图片
$(function(){
	  $.ajax({
     type:"post",
     url:pathName+"/news/getList.do",	
     data:{"typeid":34,"langid":2},  
     success:function(data){
         var logoHtml = "";
         for(var i =0;i<data.newlist.length;i++){			            	   		            	        	 		            	   		            	       	
      	   logoHtml+='<a href="index_e.jsp"><img src="'+http+data.newlist[i].imagePath+'" /></a>';      
      	  } 		              
      $('.top-logo').html(logoHtml);		           
     }
 }); 			
}) 

$(function(){
	  $.ajax({
         type:"post",
         url:pathName+"/module/getList.do",	
         data:{},  
         success:function(data){
             var navHtml = "";
             for(var i =0;i<data.data.length;i++){
            	 navHtml+='<li><a href="#">'+data.data[i].modulename+'</a></li>'; 
          	  } 		              
          $('.nav').html(navHtml);
          $('.nav li:lt(10)').hide();
          $('.nav li:eq(13)').hide();
          $('.nav li:eq(14)').hide();
          $('.nav li a').eq(10).attr('href','index_e.jsp');
          $('.nav li a').eq(11).attr('href','about_e.jsp');
          $('.nav li a').eq(12).attr('href','alpha_e.jsp');
          $('.nav li a').eq(13).attr('href','its_e.jsp');
          $('.nav li a').eq(14).attr('href','product_e.jsp');
          $('.nav li a').eq(15).attr('href','news_e.jsp?typeid=1&langid=2');
          $('.nav li a').eq(16).attr('href','committee_e.jsp');
          $('.nav li a').eq(17).attr('href','recruitment_e.jsp');
          $('.nav li a').eq(18).attr('href','index.jsp');          
          $('.nav li a').eq(19).attr('href','index_e.jsp');
          $('.nav li a').eq(18).css('color','#666');
          $('.nav li a').eq(19).css('color','#666');
          $('.nav li').eq(16).css('margin-left','10px');
          $(".top-nav a").each(function(){
              $this = $(this);
              if($this[0].href==String(window.location)){
                  $this.addClass("hover");
              }
          });
         }
     }); 			
}) 		

//英文版导航栏
/*$(function(){
	  $.ajax({
         type:"post",
         url:pathName+"/module/getList.do",	
         data:{},  
         success:function(data){
             var navHtml = "";
             for(var i =0;i<data.data.length;i++){
            	 navHtml+='<li><a href="#">'+data.data[i].modulename+'</a></li>'; 
          	  } 		              
          $('.nav').html(navHtml);
          $('.nav li:lt(9)').hide();
          $('.nav li a').eq(9).attr('href','index_e.jsp');
          $('.nav li a').eq(10).attr('href','about_e.jsp');
          $('.nav li a').eq(11).attr('href','alpha_e.jsp');
          $('.nav li a').eq(12).attr('href','product_e.jsp');
          $('.nav li a').eq(13).attr('href','news_e.jsp?typeid=1&langid=2');
          $('.nav li a').eq(14).attr('href','committee_e.jsp');
          $('.nav li a').eq(15).attr('href','recruitment_e.jsp');
          $('.nav li a').eq(16).attr('href','/');          
          $('.nav li a').eq(17).attr('href','index_e.jsp');
          $('.nav li a').eq(16).css('color','#666');
          $('.nav li a').eq(17).css('color','#666');
          $('.nav li').eq(17).css('margin-left','10px');         
          $(".top-nav a").each(function(){
              $this = $(this);
              if($this[0].href==String(window.location)){
                  $this.addClass("hover");
              }
          });
         }
     }); 			
}) 		*/