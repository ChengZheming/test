 //产品与服务左侧菜单
$(function(){
	  $.ajax({
         type:"post",
		 url:pathName+"/module/getType.do",	
		 data:{"id":5,"langid":1},  
		 success:function(data){
		     //console.log(data);
		     var tabHtml = "";
		     for(var i =0;i<data.data.length;i++){       	 
		    	 var html="";
		    	 var titleHtml="";
		    	 var placeHtml="";
		    	 var introHtml="";
		    	 var introHtml2="";
		    	 var visionHtml="";
		    	 var eventsHtml="";
		    	 //var psgODHtml="";  //2018.7.12 added by xhb
		    	 //var operSysHtml="";    //2018.7.12 added by xhb
		    	 titleHtml=data.data[i].modulename
		    	 html+='<span>'+data.data[i].modulename+'</span>';
		    	 if(i<=3){
		    		 tabHtml+='<li><a href="#">'+data.data[i].typename+'</a></li>'; 	            	     		
		    	 }
				 placeHtml+='<span>您所在的位置：</span>';
		    	 placeHtml+='<a href="#">'+data.data[i].modulename+'</a>';
		         placeHtml+='<span class="place-line "></span>';			                 
		        introHtml+='<span>'+data.data[0].typename+'</span>';		       	
		        introHtml2+='<span>'+data.data[1].typename+'</span>';	
		        visionHtml+='<span>'+data.data[2].typename+'</span>';
		        eventsHtml+='<span>'+data.data[3].typename+'</span>';
		        //psgODHtml+='<span>'+data.data[4].typename+'</span>';   //2018.7.12 added by xhb
		        //operSysHtml+='<span>'+data.data[5].typename+'</span>';   //2018.7.12 added by xhb
		  	  } 
		  	  //console.log(psgODHtml);
		       $("title").html(titleHtml); 
		       $('.about-text').html(html);
		       $('.tabs').html(tabHtml);
		       $('.place-content').html(placeHtml);
		       $('.place-intro').html(introHtml);
		       $('.place-intro2').html(introHtml2);
		       $('.place-vision').html(visionHtml);
		       $('.place-events').html(eventsHtml);
		       //$('.place-ODsystem').html(psgODHtml);           //2018.7.12 added by xhb
		       //$('.place-operation').html(operSysHtml);           //2018.7.12 added by xhb
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
			   //2018.7.12 added by xhb 
			   /*$('.tabs li a').eq(4).attr({
		        	  "href":"javascript:void(0)",
			    	   "title":"content5",
			    	   "onclick":""
				  });*/
				  
			   //2018.7.12 added by xhb 
			   /*$('.tabs li a').eq(5).attr({
		        	  "href":"javascript:void(0)",
			    	   "title":"content6",
			    	   "onclick":""
				  });*/
			      selecteds();
		         }
		  }); 			
}) 	


//产品服务首图
$(function(){
	  $.ajax({
           type:"post",
       url:pathName+"/news/getList.do",	
       data:{"typeid":53,"langid":1},  
       success:function(data){
           var imgHtml = "";
           for(var i =0;i<data.newlist.length;i++){			            	   		            	        	 		            	   		            	       	
        	   imgHtml+='<img src="'+http+data.newlist[i].imagePath+'" />';  
        	  } 		              
        $('.about-img').html(imgHtml);		           
           }
       }); 			
})
/********************AS001********************/
//AS产品图
$(function(){
	  $.ajax({
           type:"post",
       url:pathName+"/news/getList.do",	
       data:{"typeid":54,"langid":1},  
       success:function(data){
           var adHtml = "";
           for(var i =0;i<data.newlist.length;i++){
        	   adHtml+='<div class="adas-img"><img src="'+http+data.newlist[i].imagePath+'" /></div>'
        	   adHtml+='<div class="adas-content">'+data.newlist[i].content+'</div>';  
        	  } 		              
        $('.adas').html(adHtml);		           
           }
       }); 			
})

//产品规格
$(function(){
	  $.ajax({
           type:"post",
	       url:pathName+"/news/getList.do",	
	       data:{"typeid":55,"langid":1},  
	       success:function(data){
	           var padHtml = "";
	           for(var i =0;i<data.newlist.length;i++){
	        	   padHtml+='<h3>'+data.newlist[i].title+'</h3>';  
	        	   padHtml+='<div class="product-size">'+data.newlist[i].content+'</div>';  
	        	  } 		              
	        $('.size').html(padHtml);		           
	           }
	       }); 			
});

//主要功能
$(function(){
	  $.ajax({
           type:"post",
       url:pathName+"/news/getList.do",	
       data:{"typeid":56,"langid":1},  
       success:function(data){
           var funHtml = "";
           for(var i =0;i<data.newlist.length;i++){
        	   var ftHtml="";
        	   ftHtml+='<span>'+data.newlist[i].title+'<span>';
        	   funHtml+='<li><p><img src="'+http+data.newlist[i].imagePath+'" /></p>';
        	   funHtml+='<p>'+data.newlist[i].worktype+'</p>';  
        	   funHtml+='<p></p>';  
        	   funHtml+='<p>'+data.newlist[i].content+'</p></li>';  
        	  } 
           $('.function h3').html(ftHtml);		
           $('.product-function ul').html(funHtml);		           
           }
       }); 			
})

//产品优势
$(function(){
	  $.ajax({
           type:"post",
       url:pathName+"/news/getList.do",	
       data:{"typeid":57,"langid":1},  
       success:function(data){
           var prHtml = "";
           for(var i =0;i<data.newlist.length;i++){
        	   prHtml+='<h3>'+data.newlist[i].title+'</h3>';  
        	   prHtml+='<div class="advantage-cotent">'+data.newlist[i].content+'</div>';  
        	  } 		              
        $('.product-advantage').html(prHtml);		           
           }
       }); 			
});

//应用领域
$(function(){
	  $.ajax({
           type:"post",
       url:pathName+"/news/getList.do",	
       data:{"typeid":58,"langid":1},  
       success:function(data){
           var doHtml = "";
           for(var i =0;i<data.newlist.length;i++){
        	   doHtml+='<h3>'+data.newlist[i].title+'</h3>';  
        	   doHtml+='<div class="domain-content">'+data.newlist[i].content+'</div>';  
        	  } 		              
        $('.domain').html(doHtml);		           
           }
       }); 			
});
//配件清单
$(function(){
	  $.ajax({
           type:"post",
       url:pathName+"/news/getList.do",	
       data:{"typeid":59,"langid":1},  
       success:function(data){
           var paHtml = "";
           for(var i =0;i<data.newlist.length;i++){
        	   paHtml+='<h3>'+data.newlist[i].title+'</h3>';  
        	   paHtml+='<div class="parts-list-content">'+data.newlist[i].content+'</div>';  
        	  } 		              
        $('.parts-list').html(paHtml);		           
           }
       }); 			
});




/********************AS002********************/
//AS产品图
$(function(){
	  $.ajax({
           type:"post",
       url:pathName+"/news/getList.do",	
       data:{"typeid":75,"langid":1},  
       success:function(data){
           var adHtml = "";
           for(var i =0;i<data.newlist.length;i++){
        	   adHtml+='<div class="adas2-img"><img src="'+http+data.newlist[i].imagePath+'" /></div>'
        	   adHtml+='<div class="adas2-content">'+data.newlist[i].content+'</div>';  
        	  } 		              
        $('.adas2').html(adHtml);		           
           }
       }); 			
})

//产品规格
$(function(){
	  $.ajax({
           type:"post",
	       url:pathName+"/news/getList.do",	
	       data:{"typeid":76,"langid":1},  
	       success:function(data){
	           var padHtml = "";
	           for(var i =0;i<data.newlist.length;i++){
	        	   padHtml+='<h3>'+data.newlist[i].title+'</h3>';  
	        	   padHtml+='<div class="adas2-product-size">'+data.newlist[i].content+'</div>';  
	        	  } 		              
	        $('.adas2-size').html(padHtml);		           
	           }
	       }); 			
});

//主要功能
$(function(){
	  $.ajax({
           type:"post",
       url:pathName+"/news/getList.do",	
       data:{"typeid":77,"langid":1},  
       success:function(data){
           var funHtml = "";
           for(var i =0;i<data.newlist.length;i++){
        	   var ftHtml="";
        	   var tiHtml="";
        	   ftHtml+='<span>'+data.newlist[i].title+'<span>';
        	   tiHtml+='<p>'+data.newlist[i].content+'</p>'; 
        	  } 
           $('.adas2-function h3').html(ftHtml);		
           $('.adas2-product-summry').html(tiHtml);
           
           }
       }); 			
})
//主要功能图片文字
$(function(){
	  $.ajax({
           type:"post",
       url:pathName+"/news/getList.do",	
       data:{"typeid":78,"langid":1},  
       success:function(data){
       	   console.log(data);
	       console.log("+++++++++++")
           var funHtml = "";
           for(var i =0;i<data.newlist.length;i++){
//        	   tiHtml+='<p>'+data.newlist[i].content+'</p>';
//        	   funHtml+='<li><p><img src="'+http+data.newlist[i].imagePath+'" /></p>';
//        	   funHtml+='<p>'+data.newlist[i].worktype+'</p>';   
        	   funHtml+='<p>'+data.newlist[i].content+'</p>';  
        	  } 
           
           $('.adas2-product-function').html(funHtml);
           }
       }); 			
})
//核心优势
$(function(){
	  $.ajax({
       type:"post",
       url:pathName+"/news/getList.do",	
       data:{"typeid":79,"langid":1},  
       success:function(data){
           var prHtml = "";
           for(var i =0;i<data.newlist.length;i++){
           	   prHtml+='<div class="ads2-advantage-img"><img src="'+http+data.newlist[i].imagePath+'" /></div>'
        	   prHtml+='<h3>'+data.newlist[i].title+'</h3>';  
        	   prHtml+='<div class="ads2-advantage-cotent">'+data.newlist[i].content+'</div>';  
        	  } 		              
        $('.ads2-product-advantage').html(prHtml);		           
           }
       }); 			
});


/********************DS001********************/
//Ds产品图片
$(function(){
	  $.ajax({
         type:"post",
     url:pathName+"/news/getList.do",	
     data:{"typeid":60,"langid":1},  
     success:function(data){
         var dsHtml = "";
         for(var i =0;i<data.newlist.length;i++){
        	 dsHtml+='<div class="ds-img"><img src="'+http+data.newlist[i].imagePath+'" /></div>'  
        	 dsHtml+='<div class="ds-content">'+data.newlist[i].content+'</div>';  
      	  } 		              
      $('.ds').html(dsHtml);		           
         }
     }); 			
});

//ds产品规格
$(function(){
	  $.ajax({
           type:"post",
	       url:pathName+"/news/getList.do",	
	       data:{"typeid":61,"langid":1},  
	       success:function(data){
	           var padHtml = "";
	           for(var i =0;i<data.newlist.length;i++){
	        	   padHtml+='<h3>'+data.newlist[i].title+'</h3>';  
	        	   padHtml+='<div class="ds-product-size">'+data.newlist[i].content+'</div>';  
	        	  } 		              
	        $('.ds-size').html(padHtml);		           
	           }
	       }); 			
});

//ds产品功能
$(function(){
	  $.ajax({
           type:"post",
	       url:pathName+"/news/getList.do",	
	       data:{"typeid":62,"langid":1},  
	       success:function(data){
	           var padHtml = "";
	           for(var i =0;i<data.newlist.length;i++){
	        	   padHtml+='<h3>'+data.newlist[i].title+'</h3>';  
	        	   padHtml+='<div class="ds-product-function">'+data.newlist[i].content+'</div>';  
	        	  } 		              
	        $('.ds-function').html(padHtml);		           
	           }
	       }); 			
});

//十大功能
$(function(){
	  $.ajax({
       type:"post",
       url:pathName+"/news/getList.do",	
       data:{"typeid":63,"langid":1},  
       success:function(data){
           var fnHtml = "";
           for(var i =0;i<data.newlist.length;i++){
        	   var futHtml="";
        	   futHtml+='<span>'+data.newlist[i].title+'<span>';
        	   fnHtml+='<li><p><img src="'+http+data.newlist[i].imagePath+'" /></p>';
        	   fnHtml+='<p>'+data.newlist[i].worktype+'</p>';  
        	   fnHtml+='<p></p>';  
        	   fnHtml+='<p>'+data.newlist[i].content+'</p></li>';  
        	  } 
           $('.functions h3').html(futHtml);		
           $('.product-functions ul').html(fnHtml);		           
           }
       }); 			
})

//DMS警报提醒
$(function(){
	  $.ajax({
           type:"post",
	       url:pathName+"/news/getList.do",	
	       data:{"typeid":64,"langid":1},  
	       success:function(data){
	           var dmsHtml = "";
	           for(var i =0;i<data.newlist.length;i++){
	        	   dmsHtml+='<h3>'+data.newlist[i].title+'</h3>';  
	        	   dmsHtml+='<div class="dms-test">'+data.newlist[i].worktype+'</div>';
	        	   dmsHtml+='<div class="dms-content">'+data.newlist[i].content+'</div>';  
	        	  } 		              
	        $('.dms').html(dmsHtml);		           
	           }
	       }); 			
});

//dms图片
$(function(){
	  $.ajax({
           type:"post",
	       url:pathName+"/news/getList.do",	
	       data:{"typeid":67,"langid":1},  
	       success:function(data){
	           var diHtml = "";
	           for(var i =0;i<data.newlist.length;i++){
	        	   diHtml+='<div>'+data.newlist[i].content+'</div>';  
	        	  } 		              
	        $('.dms-img').html(diHtml);		           
	           }
	       }); 			
});

//ds应用领域
$(function(){
	  $.ajax({
           type:"post",
       url:pathName+"/news/getList.do",	
       data:{"typeid":65,"langid":1},  
       success:function(data){
           var dosHtml = "";
           for(var i =0;i<data.newlist.length;i++){
        	   dosHtml+='<h3>'+data.newlist[i].title+'</h3>';  
        	   dosHtml+='<div class="ds-domain-content">'+data.newlist[i].content+'</div>';  
        	  } 		              
        $('.ds-domain').html(dosHtml);		           
           }
       }); 			
});

//ds配件清单
$(function(){
	  $.ajax({
           type:"post",
	       url:pathName+"/news/getList.do",	
	       data:{"typeid":66,"langid":1},  
	       success:function(data){
	           var padHtml = "";
	           for(var i =0;i<data.newlist.length;i++){
	        	   padHtml+='<h3>'+data.newlist[i].title+'</h3>';  
	        	   padHtml+='<div class="ds-list-content">'+data.newlist[i].content+'</div>';  
	        	  } 		              
	        $('.ds-parts-list').html(padHtml);		           
	           }
	       }); 			
});

/********************安全管控平台********************/
//平台简介
$(function(){
	  $.ajax({
           type:"post",
	       url:pathName+"/news/getList.do",	
	       data:{"typeid":68,"langid":1},  
	       success:function(data){
	           var inHtml = "";
	           for(var i =0;i<data.newlist.length;i++){
	        	   inHtml+='<div>'+data.newlist[i].content+'</div>';  
	        	  } 		              
	        $('.platform-intro').html(inHtml);		           
	           }
	       }); 			
});

//六大功能模块
$(function(){
	  $.ajax({
           type:"post",
       url:pathName+"/news/getList.do",	
       data:{"typeid":69,"langid":1},  
       success:function(data){
           var plHtml = "";
           for(var i =0;i<data.newlist.length;i++){
        	   var pltHtml="";
        	   pltHtml+='<span>'+data.newlist[i].title+'<span>';
        	   plHtml+='<li><p><img src="'+http+data.newlist[i].imagePath+'" /></p>';
        	   plHtml+='<p>'+data.newlist[i].worktype+'</p>';  
        	   plHtml+='<p></p>';  
        	   plHtml+='<p>'+data.newlist[i].content+'</p></li>';  
        	  } 
           $('.platform-function h3').html(pltHtml);		
           $('.platform-content ul').html(plHtml);		           
           }
       }); 			
})

//数据集合
$(function(){
	  $.ajax({
           type:"post",
	       url:pathName+"/news/getList.do",	
	       data:{"typeid":70,"langid":1},  
	       success:function(data){
	           var daHtml = "";
	           for(var i =0;i<data.newlist.length;i++){
	        	   daHtml+='<h3>'+data.newlist[i].title+'</h3>';  
	        	   daHtml+='<div class="data-content">'+data.newlist[i].content+'</div>';  
	        	  } 		              
	           	$('.data-set').html(daHtml);		           
	           }
	       }); 			
});

/********************客流分析系统********************/
//2018.7.12 added by xhb  客流OD分析内容0
$(function(){
	  $.ajax({
           type:"post",
	       url:pathName+"/news/getList.do",	
	       data:{"typeid":102,"langid":1},  
	       success:function(data){
	           //console.log(data);
	           var daHtml = "";
	           for(var i =0;i<data.newlist.length;i++){

	           	   daHtml+='<h3>'+data.newlist[i].title+'</h3>';  
	        	   daHtml+='<li><p><img src="'+http+data.newlist[i].imagePath+'" /></p>';
         	       daHtml+='<p>'+data.newlist[i].content+'</p></li>';
          	
	        	  } 		              
	           	$('.ODlist0').html(daHtml);	
	           console.log(daHtml);
	           }
	       }); 			
});

//2018.7.20 added by xhb  客流OD分析内容1
$(function(){
	  $.ajax({
           type:"post",
	       url:pathName+"/news/getList.do",	
	       data:{"typeid":103,"langid":1},  
	       success:function(data){
	           //console.log(data);
	           var daImg = "";
	           var daDecs = "";
	           var daProfile = "";
	           for(var i =0;i<data.newlist.length;i++){
                   daImg = '<p><img src="'+http+data.newlist[i].imagePath+'" /></p>';
                   daProfile = '<p>'+data.newlist[i].worktype+'</p>';
                   daDecs = '<p>'+data.newlist[i].content+'</p>';

	        	  } 		              
	            $('.ODlist1-Img').html(daImg);
	        	$('.ODlist1-Profile').html(daProfile);
	        	$('.ODlist1-Desc').html(daDecs);
	           	console.log(daImg);
	           }
	       }); 			
});

//2018.7.20 added by xhb  客流OD分析内容2
//$(function(){
//	  $.ajax({
//           type:"post",
//	       url:pathName+"/news/getList.do",	
//	       data:{"typeid":104,"langid":1},  
//	       success:function(data){
//	           
//	           var daImg = "";
//	           var daDecs = "";
//	           for(var i =0;i<data.newlist.length;i++){
//                   daImg = '<p><img src="'+http+data.newlist[i].imagePath+'" /></p>';
//                   daDecs = '<p>'+data.newlist[i].content+'</p>';
//                   
//	           } 		              
//	           $('.ODlist2-Img').html(daImg);
//	           $('.ODlist2-Desc').html(daDecs);
//	           	
//	           }
//	       }); 			
//});


//2018.7.20 added by xhb  客流OD分析内容2  --改造
$(function(){
	  $.ajax({
           type:"post",
	       url:pathName+"/news/getList.do",	
	       data:{"typeid":104,"langid":1},  
	       success:function(data){
	           
	           var daODlist2 = "";
	          
	           for(var i =0;i<data.newlist.length;i++){
                  
                   daODlist2+='<li><p><img src="'+http+data.newlist[i].imagePath+'" /></p>';
          	       daODlist2+='<p class="ODlist2-Desc">'+data.newlist[i].content+'</p></li>';
                   
	           } 		              
	           
	           $('.ODlist2 ul').html(daODlist2);
	           	
	           }
	       }); 			
});

//2018.7.24 added by xhb  客流OD分析内容3
$(function(){
	  $.ajax({
           type:"post",
	       url:pathName+"/news/getList.do",	
	       data:{"typeid":105,"langid":1},  
	       success:function(data){
	           //console.log(data);
	           var daImg = "";
	           var daDecs = "";
	           var daProfile = "";
	           for(var i =0;i<data.newlist.length;i++){
                   daImg = '<p><img src="'+http+data.newlist[i].imagePath+'" /></p>';
                   daProfile = '<p>'+data.newlist[i].title+'</p>';
                   daDecs = '<p>'+data.newlist[i].content+'</p>';

	        	  } 		              
	            $('.ODlist3-Img').html(daImg);
	        	$('.ODlist3-Profile').html(daProfile);
	        	$('.ODlist3-Desc').html(daDecs);
	           	console.log(daImg);
	           }
	       }); 			
});

//2018.7.24 added by xhb  客流OD分析内容4  --改造
$(function(){
	  $.ajax({
           type:"post",
	       url:pathName+"/news/getList.do",	
	       data:{"typeid":106,"langid":1},  
	       success:function(data){
	           
	           var daODlist = "";
	          
	           for(var i =0;i<data.newlist.length;i++){
                  
                   daODlist+='<li><p><img src="'+http+data.newlist[i].imagePath+'" /></p>';
          	       daODlist+='<p class="ODlist4-Desc">'+data.newlist[i].content+'</p></li>';
                   
	           } 		              
	           
	           $('.ODlist4 ul').html(daODlist);
	           	
	           }
	       }); 			
});


//2018.7.24 added by xhb  客流OD分析内容5
$(function(){
	  $.ajax({
           type:"post",
	       url:pathName+"/news/getList.do",	
	       data:{"typeid":107,"langid":1},  
	       success:function(data){
	           //console.log(data);
	           var daImg = "";
	           var daDecs = "";
	           var daProfile = "";
	           for(var i =0;i<data.newlist.length;i++){
                   daImg = '<p><img src="'+http+data.newlist[i].imagePath+'" /></p>';
                   daProfile = '<p>'+data.newlist[i].title+'</p>';
                   daDecs = '<p>'+data.newlist[i].content+'</p>';

	        	  } 		              
	            $('.ODlist5-Img').html(daImg);
	        	$('.ODlist5-Profile').html(daProfile);
	        	$('.ODlist5-Desc').html(daDecs);
	           	console.log(daImg);
	           }
	       }); 			
});


//2018.7.24 added by xhb  客流OD分析内容6  
$(function(){
	  $.ajax({
           type:"post",
	       url:pathName+"/news/getList.do",	
	       data:{"typeid":108,"langid":1},  
	       success:function(data){
	           
	           var daODlist = "";
	          
	           for(var i =0;i<data.newlist.length;i++){
                  
                   daODlist+='<li><p><img src="'+http+data.newlist[i].imagePath+'" /></p>';
          	       daODlist+='<p>'+data.newlist[i].content+'</p></li>';
                   
	           } 		              
	           
	           $('.ODlist6 ul').html(daODlist);
	           	
	           }
	       }); 			
});




//2018.7.13 added by xhb
//$(function(){
//	  $.ajax({
//           type:"post",
//	       url:pathName+"/news/getList.do",	
//	       data:{"typeid":,"langid":1},  
//	       success:function(data){
//	           var daHtml = "";
//	           for(var i =0;i<data.newlist.length;i++){
//
//	           	   daHtml+='<li><p><img src="'+http+data.newlist[i].imagePath+'" /></p>';
//          	       daHtml+='<p class="OPContentlist">'+data.newlist[i].content+'</p></li>';
//	           	
//	        	  } 		              
//	           	$('.operSystemcontent ul').html(daHtml);	
//	           	
//	           }
//	       }); 			
//});

/********************运营统计系统********************/
//运营统计系统简介
$(function(){
	  $.ajax({
         type:"post",
	       url:pathName+"/news/getList.do",	
	       data:{"typeid":109,"langid":1},  
	       success:function(data){
	           
	           var daOSlist = "";
	          
	           for(var i =0;i<data.newlist.length;i++){
                
	        	   daOSlist+='<h3>'+data.newlist[i].title+'</h3>';  
	        	   daOSlist+='<div class="osimg"><img src="'+http+data.newlist[i].imagePath+'" /></div>';
	        	   daOSlist+='<div class="oscentent">'+data.newlist[i].content+'</div>';
                 
	           } 		              
	           
	           $('.OSlist0').html(daOSlist);
	           	
	           }
	       }); 			
});

//数据填报1
$(function(){
	  $.ajax({
         type:"post",
	       url:pathName+"/news/getList.do",	
	       data:{"typeid":110,"langid":1},  
	       success:function(data){
	           
	           var daOSlist1 = "";
	          
	           for(var i =0;i<data.newlist.length;i++){
	        	   
	        	   daOSlist1+='<div class="ostitle">'+data.newlist[i].title+'</div>';
	        	   daOSlist1+='<div class="osintroduce">'+data.newlist[i].content+'</div>';
	           } 		              
	           
	           $('.OSlist1').html(daOSlist1);
	           	
	           }
	       }); 			
});

//数据填报2
$(function(){
	  $.ajax({
         type:"post",
	       url:pathName+"/news/getList.do",	
	       data:{"typeid":111,"langid":1},  
	       success:function(data){
	           
	           var daOSlist2 = "";
	          
	           for(var i =0;i<data.newlist.length;i++){
	        	   
	        	   daOSlist2+='<div class="osimg2"><img src="'+http+data.newlist[i].imagePath+'" />';
	        	   daOSlist2+='<div >'+data.newlist[i].content+'</div></div>';
	           } 		              
	           
	           $('.OSlist2').html(daOSlist2);
	           	
	           }
	       }); 			
});

//数据填报3
$(function(){
	  $.ajax({
         type:"post",
	       url:pathName+"/news/getList.do",	
	       data:{"typeid":112,"langid":1},  
	       success:function(data){
	           
	           var daOSlist3 = "";
	          
	           for(var i =0;i<data.newlist.length;i++){
	        	   
	        	   daOSlist3+='<div class="osimg3"><img src="'+http+data.newlist[i].imagePath+'" />';
	           } 		              
	           
	           $('.OSlist3').html(daOSlist3);
	           	
	           }
	       }); 			
});

//数据填报4
$(function(){
	  $.ajax({
         type:"post",
	       url:pathName+"/news/getList.do",	
	       data:{"typeid":113,"langid":1},  
	       success:function(data){
	           
	           var daOSlist4 = "";
	          
	           for(var i =0;i<data.newlist.length;i++){
	        	   
	        	   daOSlist4+='<div class="osimg4"><img src="'+http+data.newlist[i].imagePath+'" />';
	        	   daOSlist4+='<div >'+data.newlist[i].content+'</div></div>';
	           } 		              
	           
	           $('.OSlist4').html(daOSlist4);
	           	
	           }
	       }); 			
});

//工资核算单据1
$(function(){
	  $.ajax({
         type:"post",
	       url:pathName+"/news/getList.do",	
	       data:{"typeid":114,"langid":1},  
	       success:function(data){
	           
	           var daOSlist5 = "";
	          
	           for(var i =0;i<data.newlist.length;i++){
	        	   
	        	   daOSlist5+='<div class="ostitle">'+data.newlist[i].title+'</div>';
	        	   daOSlist5+='<div class="osintroduce">'+data.newlist[i].content+'</div>';
	           } 		              
	           
	           $('.OSlist5').html(daOSlist5);
	           	
	           }
	       }); 			
});

//工资核算单据2
$(function(){
	  $.ajax({
         type:"post",
	       url:pathName+"/news/getList.do",	
	       data:{"typeid":115,"langid":1},  
	       success:function(data){
	           
	           var daOSlist6 = "";
	          
	           for(var i =0;i<data.newlist.length;i++){
	        	   
	        	   daOSlist6+='<div class="osimg5"><img src="'+http+data.newlist[i].imagePath+'" />';
	        	   daOSlist6+='<div >'+data.newlist[i].content+'</div></div>';
	           } 		              
	           
	           $('.OSlist6').html(daOSlist6);
	           	
	           }
	       }); 			
});

//常用报表1
$(function(){
	  $.ajax({
         type:"post",
	       url:pathName+"/news/getList.do",	
	       data:{"typeid":116,"langid":1},  
	       success:function(data){
	           
	           var daOSlist7 = "";
	          
	           for(var i =0;i<data.newlist.length;i++){
	        	   
	        	   daOSlist7+='<div class="ostitle">'+data.newlist[i].title+'</div>';
	        	   daOSlist7+='<div class="osintroduce">'+data.newlist[i].content+'</div>';
	           } 		              
	           
	           $('.OSlist7').html(daOSlist7);
	           	
	           }
	       }); 			
});

//常用报表2
$(function(){
	  $.ajax({
         type:"post",
	       url:pathName+"/news/getList.do",	
	       data:{"typeid":117,"langid":1},  
	       success:function(data){
	           
	           var daOSlist8 = "";
	          
	           for(var i =0;i<data.newlist.length;i++){
	        	   
	        	   daOSlist8+='<div class="osimg6"><img src="'+http+data.newlist[i].imagePath+'" />';
	        	   daOSlist8+='<div >'+data.newlist[i].content+'</div></div>';
	           } 		              
	           
	           $('.OSlist8').html(daOSlist8);
	           	
	           }
	       }); 			
});

//日报1
$(function(){
	  $.ajax({
         type:"post",
	       url:pathName+"/news/getList.do",	
	       data:{"typeid":118,"langid":1},  
	       success:function(data){
	           
	           var daOSlist9 = "";
	          
	           for(var i =0;i<data.newlist.length;i++){
	        	   
	        	   daOSlist9+='<div class="ostitle">'+data.newlist[i].title+'</div>';
	        	   daOSlist9+='<div class="osintroduce">'+data.newlist[i].content+'</div>';
	           } 		              
	           
	           $('.OSlist9').html(daOSlist9);
	           	
	           }
	       }); 			
});

//日报2
$(function(){
	  $.ajax({
         type:"post",
	       url:pathName+"/news/getList.do",	
	       data:{"typeid":119,"langid":1},  
	       success:function(data){
	           
	           var daOSlist10 = "";
	          
	           for(var i =0;i<data.newlist.length;i++){
	        	   
	        	   daOSlist10+='<div class="osimg6"><img src="'+http+data.newlist[i].imagePath+'" />';
	        	   daOSlist10+='<div >'+data.newlist[i].content+'</div></div>';
	           } 		              
	           
	           $('.OSlist10').html(daOSlist10);
	           	
	           }
	       }); 			
});
