 
$(function(){
	  $.ajax({
         type:"post",
		 url:pathName+"/module/getType.do",	
		 data:{"id":4,"langid":1},
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
		    	 var introHtml4="";
		    	 titleHtml=data.data[i].modulename
		    	 html+='<span>'+data.data[i].modulename+'</span>';
		    	 tabHtml+='<li><a href="#">'+data.data[i].typename+'</a></li>'; 	            	     		
				 placeHtml+='<span>您所在的位置：</span>';
		    	 placeHtml+='<a href="#">'+data.data[i].modulename+'</a>';
		         placeHtml+='<span class="place-line "></span>';			                 
		        introHtml+='<span>'+data.data[0].typename+'</span>';		       	
		        introHtml2+='<span>'+data.data[1].typename+'</span>';
		        introHtml3+='<span>'+data.data[2].typename+'</span>';
		        introHtml4+='<span>'+data.data[3].typename+'</span>';
		  	  } 
		  	  //console.log(psgODHtml);
		       $("title").html(titleHtml); 
		       $('.about-text').html(html);
		       $('.tabs').html(tabHtml);
		       $('.place-content').html(placeHtml);
		       $('.place-intro').html(introHtml);
		       $('.place-intro2').html(introHtml2);
		       $('.place-intro3').html(introHtml3);
		       $('.place-vision').html(introHtml4);
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
		        $('.tabs li a').eq(3).attr({
		        	"href":"javascript:void(0)",
			    	"title":"content4",
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

//智慧出行首图
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
        $('.its-img').html(imgHtml);		           
           }
       }); 			
})

/*
 * maas
 */

//MaaS介绍
$(function(){
  $.ajax({
     type:"post",
       url:pathName+"/news/getList.do",	
       data:{"typeid":141,"langid":1},  
       success:function(data){
    	   var maas_intro = "";
    	   
    	   for(var i =0;i<data.newlist.length;i++){
    		   maas_intro+='<div class="maas_intro_backgroud"><div class="maas_intro_title">'+data.newlist[i].title+'</div>';
    		   maas_intro+='<div class="maas_intro_content">'+data.newlist[i].content+'</div></div>';
    	   }
           $('.maas_intro').html(maas_intro);
           }
       }); 
  });

//近期项目计划
$(function(){
  $.ajax({
     type:"post",
       url:pathName+"/news/getList.do",	
       data:{"typeid":142,"langid":1},  
       success:function(data){
    	   var maas_plan = "";
    	   
    	   for(var i =0;i<data.newlist.length;i++){
    		   maas_plan+='<div class="maas_plan_backgroud"><div class="maas_plan_title">'+data.newlist[i].title+'</div>';
    		   maas_plan+='<div class="maas_plan_img"><img src="'+data.newlist[i].imagePath+'"/></div></div>';
    	   }
           $('.maas_plan').html(maas_plan);
           }
       }); 
  });

//智慧出行
$(function(){
  $.ajax({
     type:"post",
       url:pathName+"/news/getList.do",	
       data:{"typeid":143,"langid":1},  
       success:function(data){
    	   var maas_phone_word1 = "";
    	   
    	   for(var i =0;i<data.newlist.length;i++){
    		   maas_phone_word1+='<div class="maas_phone_word1_backgroud"><div class="maas_phone_word1_img"><img src="'+data.newlist[i].imagePath+'"/></div>';
    		   maas_phone_word1+='<div class="maas_phone_word1_content">'+data.newlist[i].content+'</div></div>';
    	   }
           $('.maas_phone_word1').html(maas_phone_word1);
           }
       }); 
  });

//麦诗出行
$(function(){
  $.ajax({
     type:"post",
       url:pathName+"/news/getList.do",	
       data:{"typeid":144,"langid":1},  
       success:function(data){
    	   var maas_phone_word2 = "";
    	   
    	   for(var i =0;i<data.newlist.length;i++){
    		   maas_phone_word2+='<div class="maas_phone_word2_backgroud"><div class="maas_phone_word2_content">'+data.newlist[i].content+'</div>';
    		   maas_phone_word2+='<div class="maas_phone_word2_img"><img src="'+data.newlist[i].imagePath+'"/></div></div>';
    	   }
           $('.maas_phone_word2').html(maas_phone_word2);
           }
       }); 
  });

/*智慧公交云平台*/
//云存储云计算
$(function(){
	  $.ajax({
         type:"post",
	       url:pathName+"/news/getList.do",	
	       data:{"typeid":128,"langid":1},  
	       success:function(data){
	          
	    	   var cloud_storage = "";
	    	   
	    	   for(var i =0;i<data.newlist.length;i++){
	    	   
	    	   cloud_storage+='<div>'+'<span class="cloud_title">'+data.newlist[i].title+'</span>'+data.newlist[i].content+'</div>';
	    	   cloud_storage+='<img src="'+http+data.newlist[i].imagePath+'" />';
		      
	    	   }
	    	   
	           $('.cloud_storage').html(cloud_storage);
	           
	           }
	       }); 			
});


$(function(){
	  $.ajax({
       type:"post",
	       url:pathName+"/news/getList.do",	
	       data:{"typeid":133,"langid":1},  
	       success:function(data){
	           
               var cloud_model = "";
	
               cloud_model+='<span class="cloud_model_content">'+data.newlist[0].content+'</span>';
               cloud_model+='<img src="'+http+data.newlist[0].imagePath+'" />';
               cloud_model+='<span class="cloud_model_title">'+data.newlist[0].title+'</span>';
               
               
	           $('.cloud_model').html(cloud_model);

	           }
	       }); 			
});


$(function(){
	  $.ajax({
     type:"post",
	       url:pathName+"/news/getList.do",	
	       data:{"typeid":134,"langid":1},  
	       success:function(data){
	           
             var graphic_details = "";
                 
             graphic_details+='<span class="cloud_applications_title">'+data.newlist[4].title+'</span>';
        	 graphic_details+='<p class="cloud_applications_content">'+data.newlist[4].content+'</p>';

             
             for(var i =0;i<data.newlist.length;i++){         	 
            	 graphic_details+='<img src="'+http+data.newlist[i].imagePath+'" />';
             }
             
             
	         $('.graphic_details').html(graphic_details);

	         }
	       }); 			
});


$(function(){
	  $.ajax({
   type:"post",
	       url:pathName+"/news/getList.do",	
	       data:{"typeid":135,"langid":1},  
	       success:function(data){
	           
           var cloud_data = "";
           
           for(var i =0;i<data.newlist.length;i++){
  	    	   
        	   cloud_data+='<div>'+'<img src="'+http+data.newlist[i].imagePath+'"/>'+'<span class="graphic_details_title">'+data.newlist[i].title+'</span>'+'<div>'+data.newlist[i].content+'</div>'+'</div>';

           }
 
	      $('.cloud_data').html(cloud_data);

	      }
	  }); 			
});

//网约定制公交
$(function(){
	  $.ajax({
         type:"post",
	       url:pathName+"/news/getList.do",	
	       data:{"typeid":123,"langid":1},  
	       success:function(data){
	           
	           var daNCBlist1 = "";
	          
	           for(var i =0;i<data.newlist.length;i++){
	        	   
	        	   daNCBlist1+='<div class="NCBimg1"><img src="'+http+data.newlist[i].imagePath+'" /></div>';
	           } 		              
	           
	           $('.NCBlist1').html(daNCBlist1);
	           	
	           }
	       }); 			
});

$(function(){
	  $.ajax({
       type:"post",
	       url:pathName+"/news/getList.do",	
	       data:{"typeid":124,"langid":1},  
	       success:function(data){
	           
	           var daNCBlist2 = "";
	          
	           for(var i =0;i<data.newlist.length;i++){
	        	   
	        	   daNCBlist2+='<div class="NCBintro">'+data.newlist[i].content+'</div>';
	        	   daNCBlist2+='<div class="NCBimg2"><img src="'+http+data.newlist[i].imagePath+'" /></div>';
	           } 		              
	           
	           $('.NCBlist2').html(daNCBlist2);
	           	
	           }
	       }); 			
});

$(function(){
	  $.ajax({
     type:"post",
	       url:pathName+"/news/getList.do",	
	       data:{"typeid":125,"langid":1},  
	       success:function(data){
	           
	           var daNCBlist3 = "";
	          
	           for(var i =0;i<data.newlist.length;i++){
	        	   if(i==0){
	        		   daNCBlist3+='<div class="NCBtitle1">'+data.newlist[i].content+'</div>';
	        	   }else {
	        		   daNCBlist3+='<div class="NCBcontrast">'+data.newlist[i].content+'</div>';
	        	   }
	        	   daNCBlist3+='<div class="NCBimg3"><img src="'+http+data.newlist[i].imagePath+'" /></div>';
	           } 		              
	           
	           $('.NCBlist3').html(daNCBlist3);
	           	
	           }
	       }); 			
});

$(function(){
	  $.ajax({
   type:"post",
	       url:pathName+"/news/getList.do",	
	       data:{"typeid":126,"langid":1},  
	       success:function(data){
	           
	           var daNCBlist4 = "";
	          
	           for(var i =0;i<data.newlist.length;i++){
	        	   if(i<=3){
	        		   daNCBlist4+='<div class="NCBcontent">'+data.newlist[i].content+'</div>';
	        	   }else{
	        		   daNCBlist4+='<div class="NCBcontent2">'+data.newlist[i].content+'</div>';
	        	   }
	           } 		              
	           
	           $('.NCBlist4').html(daNCBlist4);
	           	
	           }
	       }); 			
});

$(function(){
	  $.ajax({
 type:"post",
	       url:pathName+"/news/getList.do",	
	       data:{"typeid":127,"langid":1},  
	       success:function(data){
	           
	           var daNCBlist5 = "";
	          
	           for(var i =0;i<data.newlist.length;i++){
	        	   if(i==0){
	        		   daNCBlist5+='<div class="NCBtitle2"><strong>'+http+data.newlist[i].title+'</strong></div>';
	        	   }
	        	   daNCBlist5+='<div class="NCBcity"><div class="NCBimg4"><img src="'+http+data.newlist[i].imagePath+'" /></div>';
	        	   daNCBlist5+='<div class="NCBcontent3">'+data.newlist[i].content+'</div></div>';
	           } 		              
	           
	           $('.NCBlist5').html(daNCBlist5);
	           	
	           }
	       }); 			
});


/*
 *信息审批-数据协同 
 */
$(function(){
	  $.ajax({
         type:"post",
	       url:pathName+"/news/getList.do",	
	       data:{"typeid":122,"langid":1},  
	       success:function(data){
	           
	           var daMPlist = "";
	          
	           for(var i =0;i<data.newlist.length;i++){
                
	        	   //daMPlist+='<h3>'+data.newlist[i].title+'</h3>';  
	        	  
	        	   //daMPlist+='<div class="mpcontent">'+data.newlist[i].content+'</div>';
	        	   daMPlist+='<div class="MPlist0right"><h4 class="mptitle">'+data.newlist[i].title+'</h4><br><div class="mpcontent">'+data.newlist[i].content+'</div></div>';
	        	   daMPlist+='<div class="mpimg"><img src="'+http+data.newlist[i].imagePath+'" /></div>';
                 
	           } 		              
	           $('.MPlist0').html(daMPlist);
	           	
	           }
	       }); 			
});

/*
 *城市分时租赁车辆关系系统
 */
$(function(){
	  $.ajax({
         type:"post",
	       url:pathName+"/news/getList.do",	
	       data:{"typeid":129,"langid":1},  
	       success:function(data){
	           
	           var daMPlist = "";
	           daMPlist+='<h3 class="productIntroduce"> 产品介绍</h3>';
	           for(var i =0;i<data.newlist.length;i++){
                
	        	    
	        	   daMPlist+='<div class="mpimg1"><img src="'+http+data.newlist[i].imagePath+'" /></div>';
	        	   daMPlist+='<div class="MPlist1right"><h4 class="mptitle1">'+data.newlist[i].title+'</h4><br><div class="mpcontent1">'+data.newlist[i].content+'</div></div>';
	        	  
                 
	           } 		
	           
	           $('.MPlist1').html(daMPlist);
	           	
	           }
	       }); 			
});

/*
 * 交通投诉、建议数据分析系统
 */
$(function(){
	  $.ajax({
         type:"post",
	       url:pathName+"/news/getList.do",	
	       data:{"typeid":130,"langid":1},  
	       success:function(data){
	           
	           var daMPlist = "";
	       
	           daMPlist+='<div class="MPlist2left"><h4 class="mptitle2">'+data.newlist[1].title+'</h4><br><div class="mpcontent2">'+data.newlist[1].content+'</div></div>';
	           for(var i =0;i<data.newlist.length;i++){
	        	    
	        	   daMPlist+='<div class="mpimg2'+i+'"><img src="'+http+data.newlist[i].imagePath+'" /></div>';
	        	   
	           } 		
	          
	           $('.MPlist2').html(daMPlist);
	           	
	           }
	       }); 			
});

/*
 * 城市校车管理系统
 */
$(function(){
	  $.ajax({
         type:"post",
	       url:pathName+"/news/getList.do",	
	       data:{"typeid":131,"langid":1},  
	       success:function(data){
	           
	           var daMPlist = "";
	       
	          
	           for(var i =0;i<data.newlist.length;i++){
	        	    
	        	   daMPlist+='<div class="mpimg3'+i+'"><img src="'+http+data.newlist[i].imagePath+'" /></div>';
	        	   
	           } 		
	           daMPlist+='<div class="MPlist3right"><h4 class="mptitle3">'+data.newlist[1].title+'</h4><br><div class="mpcontent3">'+data.newlist[1].content+'</div></div>';
	           $('.MPlist3').html(daMPlist);
	           	
	           }
	       }); 			
});

/*
 * 站点延误系统
 */
$(function(){
	  $.ajax({
         type:"post",
	       url:pathName+"/news/getList.do",	
	       data:{"typeid":132,"langid":1},  
	       success:function(data){
	           
	           var daMPlist = "";
	       
	           daMPlist+='<div class="MPlist4left"><h4 class="mptitle4">'+data.newlist[1].title+'</h4><br><div class="mpcontent4">'+data.newlist[1].content+'</div></div>';
	           for(var i =0;i<data.newlist.length;i++){
	        	    
	        	   daMPlist+='<div class="mpimg4'+i+'"><img src="'+http+data.newlist[i].imagePath+'" /></div>';
	        	   
	           } 		
	          
	           $('.MPlist4').html(daMPlist);
	           	
	           }
	       }); 			
});

