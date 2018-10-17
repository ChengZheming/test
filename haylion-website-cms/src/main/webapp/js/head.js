var strPath = window.document.location.pathname;
pathName = "http://"+window.document.location.hostname+":"+window.document.location.port+strPath.substring(0,strPath.substr(1).indexOf('/')+1);

//公司logo图片
$(function(){
	  $.ajax({
       type:"post",
       url:pathName+"/news/getList.do",	
       data:{"typeid":34,"langid":1},  
       success:function(data){
           var logoHtml = "";
           for(var i =0;i<data.newlist.length;i++){			            	   		            	        	 		            	   		            	       	
        	   logoHtml+='<a href="/"><img src="'+http+data.newlist[i].imagePath+'" /></a>';      
        	  } 		              
        $('.top-logo').html(logoHtml);		           
       }
   }); 			
}) 

//中文版导航栏
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
          $('.nav li:gt(9)').hide();
          $('.nav li:eq(4)').hide();
          $('.nav li a').eq(0).attr('href','index.jsp');    //跳转到首页
          $('.nav li a').eq(1).attr('href','about.jsp');
          $('.nav li a').eq(2).attr('href','alpha.jsp');
          $('.nav li a').eq(3).attr('href','its.jsp');
          $('.nav li a').eq(4).attr('href','product.jsp');
          $('.nav li a').eq(5).attr('href','news.jsp?typeid=1&langid=1');
          $('.nav li a').eq(6).attr('href','committee.jsp');
          $('.nav li a').eq(7).attr('href','recruitment.jsp');
          $('.nav li a').eq(8).attr('href','index.jsp');          
          $('.nav li a').eq(9).attr('href','index_e.jsp');
          $('.nav li a').eq(8).css('color','#666');
          $('.nav li a').eq(9).css('color','#666');
          //$('.nav li').eq(8).css('margin-left','10px');         
          $(".top-nav a").each(function(){
              $this = $(this);
              if($this[0].href==String(window.location)){
                  $this.addClass("hover");
              }
          });
         }
     }); 			
}) 		

