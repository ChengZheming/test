
 $(function(){
	  $.ajax({
         type:"post",
         url:pathName+"/news/getList.do",	
         data:{"typeid":21,"langid":2},  
         success:function(data){
             var imgHtml = "";
             for(var i =0;i<data.newlist.length;i++){			            	   		            	        	 		            	   		            	       	
          	  imgHtml+='<li><img src="'+http+data.newlist[i].imagePath+'" /></li>';  
          	  } 		              
          $('.about-img').html(imgHtml);		           
         }
     }); 			
})  
	
$(function(){
	  $.ajax({
       type:"post",
       url:pathName+"/module/getType.do",	
       data:{"id":12,"langid":2},  
       success:function(data){        	 
           var tabHtml = "";
           for(var i =0;i<data.data.length;i++){
          	 console.log(data.data[i]);	            	 
          	 var html="";
          	 var titleHtml="";
          	 var placeHtml="";
          	 var introHtml="";
          	 var visionHtml="";
          	 var eventsHtml="";
         /*  var chairHtml='';
        	 var staffHtml="";
        	 var partnerHtml="";*/
          	 titleHtml=data.data[i].modulename
          	 html+='<span>'+data.data[i].modulename+'</span>';
          	 if(i!=1&&i!=4){
          		 tabHtml+='<li><a href="#">'+data.data[i].typename+'</a></li>'; 	            	     		
          	 }
          		 placeHtml+='<span>Your current location : </span>';
	            	 placeHtml+='<a href="#">'+data.data[i].modulename+'</a>';
	                 placeHtml+='<span class="place-line "></span>';	                 
	                introHtml+='<span>'+data.data[0].typename+'</span>';
	                visionHtml+='<span>'+data.data[2].typename+'</span>';
	                eventsHtml+='<span>'+data.data[3].typename+'</span>';	
	               /* chairHtml+='<span>'+data.data[3].typename+'</span>';	
	                staffHtml+='<span>'+data.data[4].typename+'</span>';
	                partnerHtml+='<span>'+data.data[5].typename+'</span>';*/
        	  } 
	         $("title").html(titleHtml);
	         $('.about-text').html(html);
	         $('.tabs').html(tabHtml);
	         $('.place-content').html(placeHtml);
	         $('.place-intro').html(introHtml);
	         $('.place-vision').html(visionHtml);
	         $('.place-events').html(eventsHtml);
	       /*  $('.place-chair').html(chairHtml);
	         $('.place-staff').html(staffHtml);
	         $('.place-partner').html(partnerHtml);*/
	         $('.history-top').html(eventsHtml);
	       $('.tabs li a').eq(0).attr({
	    	   "href":"javascript:void(0)",
	    	   "title":"content1",
	    	   "class":"selecteds"
	       });
	       $('.tabs li a').eq(1).attr({
	        	  "href":"javascript:void(0)",
		    	   "title":"content2",
		    	   "onclick":"vision();"
	        });
	        $('.tabs li a').eq(2).attr({
	        	  "href":"javascript:void(0)",
		    	   "title":"content3",
		    	   "onclick":"events(),eventsImg()"
	        });
	        /*$('.tabs li a').eq(3).attr({
	        	  "href":"javascript:void(0)",
		    	   "title":"content4",
		    	   "onclick":"chair()"
	        });  
	        $('.tabs li a').eq(4).attr({
	        	  "href":"javascript:void(0)",
		    	   "title":"content5",
		    	   "onclick":"staff()"
	        }); 
	        $('.tabs li a').eq(5).attr({
	        	  "href":"javascript:void(0)",
		    	   "title":"content6",
		    	   "onclick":"partner()"
	        });        */
        selecteds();
       }
   }); 			
}) 		

$(function(){		
	  $.ajax({
         type:"post",
         url:pathName+"/news/getList.do",	
         data:{"typeid":7,"langid":2},  
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

function vision(){	
				  $.ajax({
			           type:"post",
			           url:pathName+"/news/getList.do",	
			           data:{"typeid":9,"langid":2},  
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

function events(){	
			  $.ajax({
		           type:"post",
		           url:pathName+"/news/getList.do",	
		           data:{"typeid":10,"langid":2},  
		           success:function(data){
		              var strs='';
		              var hstrs='';
		              for(var i =0;i<data.newlist.length;i++){          	 	        	  			        	  			        	
				        	  strs+='<li>'+data.newlist[i].content+'</li>';
				        	  hstrs+='	<li><div class="circle"></div><a href="#">'+data.newlist[i].title+'</a></li>';
				          }    			          
		            $('#issues').html(strs);
		            $('#dates').html(hstrs);
		            $(function(){
		    			$().timelinr({
		    				arrowKeys: 'true'
		    			})
		    		});
		           }			   
		}) 
}	

function eventsImg(){	
	  $.ajax({
         type:"post",
         url:pathName+"/news/getList.do",	
         data:{"typeid":4,"langid":2},  
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
	           data:{"typeid":35,"langid":2},  
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
		          data:{"start":0,"limit":pageSize,"typeid":36,"langid":2},      
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
		            for(var i =0;i<data.newlist.length;i++){ 			           		            	
		            	staff+='<li><div class="example"><img src="'+http+data.newlist[i].imagePath+'" /></div></li>';        			        		                        			          
		            }   
		            $('.staff-ul').html(staff);	 
		            $('.example img').zoomify();
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
				            data:{"start":start,"limit":pageSize,"typeid":36,"langid":2},
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
	           data:{"typeid":37,"langid":2},  
	           success:function(data){
	               var partner="";
	              for(var i =0;i<data.newlist.length;i++){ 
	            	  partner+='<li><a href="http://'+data.newlist[i].worktype+'" target="_Blank"><img src="'+http+data.newlist[i].imagePath+'" /></a></li>'
	            	  /* partner+='<div class="partner-content">'+data.newlist[i].content+'</div>'; */
			          }    			          
	            $('.partner-img ul').html(partner);         
	           }			   
	}) 
}	