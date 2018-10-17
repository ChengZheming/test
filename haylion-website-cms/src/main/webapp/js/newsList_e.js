 var pathName = window.document.location.pathname;
pathName = "http://"+window.document.location.hostname+":"+window.document.location.port+pathName.substring(0,pathName.substr(1).indexOf('/')+1);

//新闻资讯轮播图
$(function(){
	  $.ajax({
     type:"post",
     url:pathName+"/news/getList.do",	
     data:{"typeid":19,"langid":2},  
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

//新闻资讯列表
$(function(){
	  $.ajax({
   type:"post",
   url:pathName+"/module/getType.do",	
   data:{"id":16,"langid":2},  
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
    	  } 
           $("title").html(titleHtml);
	         $('.about-text').html(html);
	         $('.tabs').html(tabHtml);
	         $('.place-content').html(placeHtml);
	         $('.place-intro').html(introHtml);	       
		       $('.tabs li a').eq(0).attr({
		    	   "href":"news_e.jsp?typeid=1&langid=2"   	   
		       });		    
		        $(".company-nav li a").each(function(){
		            $this = $(this);
		            if($this[0].href==String(window.location)){
		                $this.addClass("selecteds");
		            }
		        });
   }
}); 			
}) 		

//获取浏览器URL中查询字符串中的参数
function showWindowHref(){
    var sHref = window.location.href;
    var args = sHref.split('?');
    if(args[0] == sHref){
        return "";
    }
    var arr = args[1].split('&');
    var obj = {};
    for(var i = 0;i< arr.length;i++){
        var arg = arr[i].split('=');
        obj[arg[0]] = arg[1];
    }
    return obj;
}

//新闻资讯列表
$(function(){
	var href = showWindowHref(); // obj
	var typeid=href["typeid"];
	var langid=href["langid"];
	var pageSize=6;
	var total="";
	var pageCount="";
	var rest="";
	var par="";
	var newsHtml="";
	  $.ajax({
          type:"post",
          url:pathName+"/news/getList.do",
          async:false,  
          data:{"start":0,"limit":pageSize,"typeid":typeid,"langid":langid},      
          success:function(data){      
              total=data.total;
              rest=data.total%pageSize;
              if(rest==0){
            	  pageCount=total/pageSize;
              }else { 
            	  par=total/pageSize+1;
            	  pageCount=parseInt(par);
              }
            newsHtml="";      
            for(var i =0;i<data.newlist.length;i++){ 
	            var Monday=data.newlist[i].month+'-'+data.newlist[i].day
	            var videoTime=data.newlist[i].year+'-'+data.newlist[i].month+'-'+data.newlist[i].day
	            if(typeid=="1"){                     	             	 
	                  newsHtml +='<li><a href="newsDetails_e.jsp?newsId='+data.newlist[i].id+'&langid=2">';
	                  newsHtml+='<div class="products-time"><p>'+Monday+'</p><p>'+data.newlist[i].year+'</p></div>';
	                  newsHtml+='<div class="products-img"><img src="'+http+data.newlist[i].imagePath+'" /></div>';
	                  newsHtml+='<div class="products-content"><p>'+data.newlist[i].title +'</p><p>'+data.newlist[i].summary +'</p></div>';
	                  newsHtml+='</a></li>';         	                                         
		          }
            }   
            $('#pageContent').html(newsHtml);	 
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
		            data:{"start":start,"limit":pageSize,"typeid":typeid,"langid":langid},
		            success:function(data){	
		              newsHtml="";
		              for(var i =0;i<data.newlist.length;i++){   
		               var Monday=data.newlist[i].month+'-'+data.newlist[i].day
		               var videoTime=data.newlist[i].year+'-'+data.newlist[i].month+'-'+data.newlist[i].day
		              if(typeid=="1"){                     	 	             	
		                   newsHtml +='<li><a href="newsDetails_e.jsp?newsId='+data.newlist[i].id+'&langid=2">';
		                   newsHtml+='<div class="products-time"><p>'+Monday+'</p><p>'+data.newlist[i].year+'</p></div>';
		                   newsHtml+='<div class="products-img"><img src="'+http+data.newlist[i].imagePath+'" /></div>';
		                   newsHtml+='<div class="products-content"><p>'+data.newlist[i].title +'</p><p>'+data.newlist[i].summary +'</p></div>';
		                   newsHtml+='</a></li>';         	                                         
			           }
		             }   
		             $('#pageContent').html(newsHtml);	             		                    
		            }
		        }); 
	    }  
	}); 
		
})
 
//新闻详情
$(function(){
	 function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg); //匹配目标参数
        if (r != null) return unescape(r[2]); 
        return null; //返回参数值
    }
    //接收URL中的参数newsId
    var id = getUrlParam('newsId');
 /*   console.log('id:'+id);*/
	  $.ajax({
         type:"post",
         url:pathName+"/news/getNewsById.do",
         data:{"id":id}, 
         success:function(data){    
           	 var str = "";
           	 var dates=data.year+'-'+data.month+'-'+data.day
           	 if(id == data.id){
                 str +='<div class="news-details-content"><h3>'+data.title +'</h3>';
                 str+='<div class="news-details-time">'+dates+'</div>'; 
                 str+='<div class="news-content">'+data.content+'</div>'
                 str+='</div>';
           	 }           	            
          $('.news-details-content').html(str);	             		                    
         }
     }); 
});      
    