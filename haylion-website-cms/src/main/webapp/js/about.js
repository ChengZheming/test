

//关于我们左侧菜单
$(function(){
	$.ajax({
	 type:"post",
     url:pathName+"/module/getType.do",	
     data:{"id":2,"langid":1},  
     success:function(data){ 
     	console.log(data);
         var tabHtml = "";
         for(var i =0;i<data.data.length;i++){      	 
        	 var html="";
        	 var titleHtml="";
        	 var placeHtml="";
        	 var introHtml="";
        	 var visionHtml="";
        	 var eventsHtml="";
        	 var chairHtml='';
        	 //var coreteamHtml='';   //2018.7.5 added by xiaohaibo
        	 //var teamHtml='';
        	 var staffHtml="";
        	 var partnerHtml="";
        	 titleHtml=data.data[i].modulename
        	 html+='<span>'+data.data[i].modulename+'</span>';
        	 if(i!=2){
        		 tabHtml+='<li><a href="#">'+data.data[i].typename+'</a></li>';
        	 }
    		 placeHtml+='<span>您所在的位置：</span>';
        	 placeHtml+='<a href="#">'+data.data[i].modulename+'</a>';
             placeHtml+='<span class="place-line "></span>';
            introHtml+='<span>'+data.data[0].typename+'</span>';
            chairHtml+='<span>'+data.data[1].typename+'</span>';
            //coreteamHtml+='<span>'+data.data[2].typename+'</span>';  //2018.7.5 added by xiaohaibo 
            //teamHtml+='<span>'+data.data[2].typename+'</span>'
            visionHtml+='<span>'+data.data[3].typename+'</span>';
            eventsHtml+='<span>'+data.data[4].typename+'</span>';		 
            partnerHtml+='<span>'+data.data[5].typename+'</span>';	
            staffHtml+='<span>'+data.data[6].typename+'</span>';
            
      	  } 
       $("title").html(titleHtml);
       $('.about-text').html(html);
       $('.tabs').html(tabHtml);
       $('.place-content').html(placeHtml);
       $('.place-intro').html(introHtml);
       //$('.place-coreteam').html(coreteamHtml);   //2018.7.5 added by xiaohaibo
       //$('.place-team').html(teamHtml);
       $('.place-vision').html(visionHtml);
       $('.place-events').html(eventsHtml);
       $('.place-chair').html(chairHtml);
       $('.place-staff').html(staffHtml);
       $('.place-partner').html(partnerHtml);
       $('.history-top').html(eventsHtml);
       $('.tabs li a').eq(0).attr({
    	   "href":"javascript:void(0)",
    	   "title":"content1",
    	   "class":"selecteds"
       });
       $('.tabs li a').eq(1).attr({
     	  "href":"javascript:void(0)",
	    	   "title":"content2",
	    	   "onclick":"chair()"
       });
       
       //2018.7.5 added by xiaohaibo
        /*$('.tabs li a').eq(2).attr({
      	  "href":"javascript:void(0)",
	    	   "title":"content3",
	    	   "onclick":"coreteam()"
	    });*/

       
//       $('.tabs li a').eq(2).attr({
//     	  "href":"javascript:void(0)",
//	    	   "title":"content3",
//	    	   "onclick":"coreteam()"
//       });
       $('.tabs li a').eq(2).attr({
        	  "href":"javascript:void(0)",
	    	   "title":"content4",
	    	   "onclick":"vision();"
        });    
        $('.tabs li a').eq(3).attr({
        	  "href":"javascript:void(0)",
	    	   "title":"content5",
	    	   "onclick":"events(),eventsImg()"
        });  
       
        $('.tabs li a').eq(4).attr({
        	  "href":"javascript:void(0)",
	    	   "title":"content6",
	    	   "onclick":"partner()"
        }); 
        $('.tabs li a').eq(5).attr({
        	  "href":"javascript:void(0)",
	    	   "title":"content7",	    	  
	    	   "onclick":"staff()"
	        });        
          selecteds();
         }
     }); 			
}) 		

//关于我们首图
$(function(){
	  $.ajax({
           type:"post",
       url:pathName+"/news/getList.do",	
       data:{"typeid":21,"langid":1},  
       success:function(data){
           var imgHtml = "";
           for(var i =0;i<data.newlist.length;i++){			            	   		            	        	 		            	   		            	       	
        	   imgHtml+='<img src="'+http+data.newlist[i].imagePath+'" />';  
        	  } 		              
        $('.about-img').html(imgHtml);		           
           }
       }); 			
})

//	公司简介	
 $(function(){		
	  $.ajax({
       type:"post",
       url:pathName+"/news/getList.do",	
       data:{"typeid":7,"langid":1},  
       success:function(data){
           var str = "";	               
          for(var i =0;i<data.newlist.length;i++){          	                    	             	 
        		  str +=' <div class="speech-top">'+data.newlist[i].title+'</div>';           		  
        		  str+='<div class="speech-details">'+data.newlist[i].content+'</div>';         	                                         
           }           
         $('.company-profile').html(str);	          
           }
       }); 	
})

////核心团队
//function coreteam(){	
//			  $.ajax({
//		       type:"post",
//	           url:pathName+"/news/getList.do",	
//	           data:{"typeid":81,"langid":1},  
//	           success:function(data){
//	              var pro="";
//	              for(var i =0;i<data.newlist.length;i++){
//        	   		pro+='<li><p><img src="'+http+data.newlist[i].imagePath+'" /></p>';
//        	   		pro+='<p class="proName">'+data.newlist[i].worktype+'</p>';   
//        	   		pro+='<p class="proTxt">'+data.newlist[i].content+'</p></li>';  
//        	  } 
//	             $('.Teamwork ul').html(pro);	         
//		       }			   
//		}) 
// }	
 
 //核心团队   2018.7.5 added by xiaohaibo
 function coreteam(){		
		  $.ajax({
	           type:"post",
       url:pathName+"/news/getList.do",	
       data:{"typeid":81,"langid":1},  
       success:function(data){
           var team = "";	               
          for(var i =0;i<data.newlist.length;i++){ 
//          	  pro+='<li><p><img src="'+http+data.newlist[i].imagePath+'" /></p>';
//              pro+='<p class="proName">'+data.newlist[i].worktype+'</p>';   
//     	   	  pro+='<p class="proTxt">'+data.newlist[i].content+'</p></li>';
          	
          	  team+='<li><p><img src="'+http+data.newlist[i].imagePath+'" /></p>';
          	  team+='<p class="coreName">'+data.newlist[i].worktype+'</p>';
          	  team+='<p class="coreProfile">'+data.newlist[i].content+'</p></li>';
          	  
//        	  coreteam+='<div class="coreteam-details">'+data.newlist[i].content+'</div>';         	                                         
           }           
         $('.teamcontent ul').html(team);	          
           }
       }); 	
} 
 
 
//愿景与使命
function vision(){	
			  $.ajax({
		           type:"post",
	           url:pathName+"/news/getList.do",	
	           data:{"typeid":9,"langid":1},  
	           success:function(data){
	               var visHtml = "";	
	               var visImg="";
	              for(var i =0;i<data.newlist.length;i++){          	 			            	  	        	  			        	  			        				            		
	            		   visImg+='<img src="'+http+data.newlist[i].imagePath+'" />';
	            		   visHtml+='<div class="vis">'+data.newlist[i].content+'</div>';
	               }
	              $('.bg-img').html(visImg);	
	            $('.blocks').html(visHtml);			         
		           }			   
		}) 
 }	

//公司大事记
 function events(){	
			  $.ajax({
		           type:"post",
	           url:pathName+"/news/getList.do",	
	           data:{"typeid":10,"langid":1},  
	           success:function(data){
	               var strs='';
	               var hstrs='';
	              for(var i =0;i<data.newlist.length;i++){          	 	        	  			        	  			        	
			        	  strs+='<li>'+data.newlist[i].content+'</li>';
			        	  hstrs+='	<li><div class="circle"></div><a href="#">'+data.newlist[i].title+'</a></li>';
			          }    			          
	            $('#issues').html(strs);
	            $('#dates').html(hstrs);
	            //调用时间轴插件	   
	    			$().timelinr({
	    				arrowKeys: 'true'
		    			})	    		
		           }			   
		}) 
 }	
 
//大事记图片
 function eventsImg(){	
	  $.ajax({
           type:"post",
       url:pathName+"/news/getList.do",	
       data:{"typeid":4,"langid":1},  
       success:function(data){
           var imgs="";
          for(var i =0;i<data.newlist.length;i++){          	 	        	  			        	  			        				        	
        	  imgs+='<div class="hisimg-content">'+data.newlist[i].content+'</div>';
	          }    			          
        $('.hisimg').html(imgs);         
	           }			   
	}) 
}	
	 
//董事长
 function chair(){		
		  $.ajax({
	           type:"post",
       url:pathName+"/news/getList.do",	
       data:{"typeid":8,"langid":1},  
       success:function(data){
           var  chair= "";	               
          for(var i =0;i<data.newlist.length;i++){          	                    	             	 		  
        	  chair+='<div class="chair-details">'+data.newlist[i].content+'</div>';         	                                         
           }           
         $('.Leadership').html(chair);	          
           }
       }); 	
}
//员工风采	 
function staff(){		
	var pageSize=9;
	var total="";
	var pageCount="";
	var rest="";
	var par="";
	var newsHtml="";
	  $.ajax({
          type:"post",
          url:pathName+"/news/getList.do",
          async:false,  
          data:{"start":0,"limit":pageSize,"typeid":37,"langid":1},      
          success:function(data){      
              total=data.total;
              rest=data.total%pageSize;
              if(rest==0){
            	  pageCount=total/pageSize;
              }else { 
            	  par=total/pageSize+1;
            	  pageCount=parseInt(par);
              }
          	var staff=""; 
//           第一页内容
            for(var i =0;i<data.newlist.length;i++){ 			           		            	
            	staff+='<li><div class="example"><img src="'+http+data.newlist[i].imagePath+'" /></div></li>';        			        		                        			          
            }   
            $('.staff-ul').html(staff);	 
            $('.example img').zoomify();
          }
      }); 
	  
	  //分页插件，从第二页开始分页
	$(".newsPageCode").createPage({  
	   pageCount:pageCount,  
	     current:1,    
	    backFn:function(p){  
	        var start=(p-1)*pageSize;     
		        $.ajax({
		            type:"post",
		            url:pathName+"/news/getList.do",
		            async:false,  
		            data:{"start":start,"limit":pageSize,"typeid":37,"langid":1},
		            success:function(data){	
		            	var staff="";
		              for(var i =0;i<data.newlist.length;i++){   				            
		            	  staff+='<li><div class="example"><img src="'+http+data.newlist[i].imagePath+'" /></div></li>';   
		             }   
		             $('.staff-ul').html(staff);	        
		             $('.example img').zoomify();
			            }
			        }); 
		    }  
		}); 		
}
 	//合作伙伴
 function partner(){	
  $.ajax({
       type:"post",
       url:pathName+"/news/getList.do",	
       data:{"typeid":36,"langid":1},  
       success:function(data){
//       	console.log(data);
           var partner="";
          for(var i =0;i<data.newlist.length;i++){ 
        	  partner+='<li><a href="http://'+data.newlist[i].worktype+'"  target="_Blank"><img src="'+ http + data.newlist[i].imagePath+'" /></a></li>'
        	  /* partner+='<div class="partner-content">'+data.newlist[i].content+'</div>'; */
	          }    			          
        $('.partner-img ul').html(partner);         
	           }			   
	}) 
}	