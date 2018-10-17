<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>修改新闻页面</title>
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/jquery-easyui-1.3.3/themes/default/easyui.css">
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/jquery-easyui-1.3.3/themes/icon.css">
<script type="text/javascript" src="${pageContext.request.contextPath}/static/jquery-easyui-1.3.3/jquery.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/static/jquery-easyui-1.3.3/jquery.easyui.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/static/jquery-easyui-1.3.3/locale/easyui-lang-zh_CN.js"></script>

<script type="text/javascript" charset="gbk" src="${pageContext.request.contextPath}/static/ueditor/ueditor.config.js"></script>
<script type="text/javascript" charset="gbk" src="${pageContext.request.contextPath}/static/ueditor/ueditor.all.min.js"> </script>
<!--建议手动加在语言，避免在ie下有时因为加载语言失败导致编辑器加载失败-->
<!--这里加载的语言文件会覆盖你在配置项目里添加的语言类型，比如你在配置项目里配置的是英文，这里加载的中文，那最后就是中文-->
<script type="text/javascript" charset="gbk" src="${pageContext.request.contextPath}/static/ueditor/lang/zh-cn/zh-cn.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/laydate/laydate.js"></script>  
<script type="text/javascript">
//获取时间
laydate.render({
    elem: '#tdate' ,
    type: 'datetime' ,
    done: function(value, date){		    	
        $("#tdate").val(value);   
    }
}); 
//列表图片上传
function savePic(){
    var formData = new FormData($( "#uploadPic" )[0]);  
    var ajaxUrl = "${pageContext.request.contextPath}/saveHeaderPic.do";
    //需要浏览器支持：Chrome 7+、Firefox 4+、IE 10+、Opera 12+、Safari 5+。
    $.ajax({
        type: "POST",
        url: ajaxUrl,
        data: formData,
        async: false,  
        cache: false,  
        contentType: false,  
        processData: false,
        success: function (data) {
        	 $("#imagePath").val(data.path);   
        	 alert("上传成功！")
        },
        error: function(data) {
            alert("error:"+data.responseText);
         }
    });
}
//列表图片回显
function  change() {
	  var r= new FileReader();
	  f=document.getElementById('file').files[0];	   
	  r.readAsDataURL(f);
	  r.onload=function (e) {
	    document.getElementById('show').src=this.result;
	  };
}		
//新闻发布	
	function submitData(){		
		var title=$("#title").val();		
		var newTypeId=$("#newTypeId").combobox("getValue");
		var content=UE.getEditor('editor').getContent();
		var workType=$("#workType").val();
		var workPlace=$("#workPlace").val();
		var tdate=$("#tdate").val();
		console.log(tdate);
		var imagePath=$("#imagePath").val();
	    var langid=$("#langid").combobox("getValue");
	    if(langid==null || title==''){
			alert("请选择中英文类型！");
		}else if(title==null || title==''){
			alert("请输入标题！");
		}else if(newTypeId==null || newTypeId==''){
			alert("请选择新闻类别！");
		}else if(content==null || content==''){
			alert("请输入内容！");
		}else{
			$.post("${pageContext.request.contextPath}/news/save.do",{'id':'${param.id}','langid':langid,'title':title,'releasedate':tdate,'worktype':workType,'workplace':workPlace,'imagePath':imagePath,'typeid':newTypeId,'content':content,'contentNoTag':UE.getEditor('editor').getContentTxt(),'summary':UE.getEditor('editor').getContentTxt().substr(0,155)},function(result){
				if(result.success){
					alert("新闻修改成功！");					
				}else{
					alert("新闻修改失败！");
				}
			},"json");
		}
	}	
</script>
</head>
<body style="margin: 10px">
<div id="p" class="easyui-panel" title="修改新闻" style="padding: 10px">
 	<table cellspacing="20px">	
 	<tr>
   			<td>中英文版本：</td>
   			<td>
   				<select class="easyui-combobox"  style="width: 154px" id="langid" name="langId" editable="false" panelHeight="auto" >
					<option value="" >请选择版本类型...</option>
					<option value="1" >中文</option>
					<option value="2" >英文</option>			
                </select>
   			</td>
   		</tr>
   		<tr>
   			<td width="80px">新闻标题：</td>
   			<td><input type="text" id="title" name="title" style="width: 400px;"/></td>
   		</tr> 
   		<tr>
   			<td width="80px">新闻时间：</td>
   			<td><input type="text" id="tdate" name="tdate" style="width: 150px;"placeholder="请选择时间" /></td>
   		</tr>	
   		<tr>
   			<td>所属类别：</td>
   			<td>
   				<select class="easyui-combobox" style="width: 154px" id="newTypeId" name="newType.id" editable="false" panelHeight="auto" >
					<option value="">请选择新闻类别...</option>	
				    <c:forEach var="newType" items="${newsTypeCountList }">
				    	<option value="${newType.id }">${newType.typename }</option>
				    </c:forEach>			
                </select>
   			</td>
   		</tr> 
   		<tr>
   			<td width="116px">工作类型(域名备案)：</td>
   			<td><input type="text" id="workType" name="workType" style="width: 150px;"/></td>
   		</tr>
   		<tr>
   			<td width="80px">工作地点(粤ICP)：</td>
   			<td><input type="text" id="workPlace" name="workPlace" style="width: 150px;"/></td>
   		</tr>
   		<tr>
   		<td>列表图片(二维码)：</td>
   			<td>
   			<form id="uploadPic" action="#" enctype="multipart/form-data">
    			<input type="file" id="file" name="file"  onchange="change()">
    			<a href="javascript:savePic();" class="btn green"  style="padding:2px 14px; background:#eee; color:#000;border:1px solid #ddd; text-decoration:none;"> 上传 </a>
			</form>
			<br>
			<img id="show"  src="../static/images/tp.png" title="" style=" width: 160px; height: 120px;">
			<br>
			<input type="text" id="imagePath" name="imagePath" style="width: 400px;display:none;">
			</td>
   	</tr>	 		
   		<tr>
   			<td valign="top">新闻内容：</td>
   			<td>
				   <script id="editor" type="text/plain" style="width:100%;height:500px;"></script>
   			</td>
   		</tr>
   		<tr>
   			<td></td>
   			<td>
   				<a href="javascript:submitData()" class="easyui-linkbutton" data-options="iconCls:'icon-submit'">发布新闻</a>
   			</td>
   		</tr>
   	</table>
 </div>
 
 <script type="text/javascript">

    //实例化编辑器
    //建议使用工厂方法getEditor创建和引用编辑器实例，如果在某个闭包下引用该编辑器，直接调用UE.getEditor('editor')就能拿到相关的实例
    var ue = UE.getEditor('editor');

    ue.addListener("ready",function(){
        //通过ajax请求数据
        UE.ajax.request("${pageContext.request.contextPath}/news/getListById.do",
            {
                method:"post",
                async : false,  
                data:{"id":"${param.id}"},
                onsuccess:function(result){
                	result = eval("(" + result.responseText + ")");
                	console.log(result);
                	$("#title").val(result.title);                	
                	$("#tdate").val(result.releaseDate);
                	$("#imagePath").val(result.imagePath);
                	$("#newTypeId").combobox("setValue",result.typeid); 
                	$("#langid").combobox("setValue",result.langid); 
                	$("#workType").val(result.worktype);
                	$("#workPlace").val(result.workplace);
       				UE.getEditor('editor').setContent(result.content);
                }
            }
        );
    });
    
   
</script>
</body>
</html>

