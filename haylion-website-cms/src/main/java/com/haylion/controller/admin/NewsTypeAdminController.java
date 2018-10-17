package com.haylion.controller.admin;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.haylion.entity.NewsType;
import com.haylion.entity.PageBean;
import com.haylion.service.NewsTypeService;
import com.haylion.util.ResponseUtil;



/**
 * 管理员新闻类别Controller层
 * @author Administrator
 *
 */
@Controller
public class NewsTypeAdminController {

	@Resource
	private NewsTypeService newsTypeService;

	/**
	 * 分页查询新闻类别信息
	 * @param page
	 * @param rows
	 * @param response
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/newsType/list")
	public String list(@RequestParam(value="page",required=false)String page,@RequestParam(value="rows",required=false)String rows,HttpServletResponse response)throws Exception{
		//分页查询新闻类别表里的数据并通过string类型输出返回前端
		PageBean pageBean=new PageBean(Integer.parseInt(page),Integer.parseInt(rows));
		Map<String,Object> map=new HashMap<String,Object>();
		map.put("start", pageBean.getStart());
		map.put("size", pageBean.getPageSize());
		List<NewsType> newsTypeList=newsTypeService.list(map);
		Long total=newsTypeService.getTotal(map);
		JSONObject result=new JSONObject();
		JSONArray jsonArray=(JSONArray) JSON.toJSON(newsTypeList);
		result.put("rows", jsonArray);
		result.put("total", total);
		ResponseUtil.write(response, result);
		return null;
	}
	/**
	 * 分页查询新闻类别信息
	 * @param page
	 * @param rows
	 * @param response
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/newsType/getList")
	public @ResponseBody String getList(HttpServletRequest request)throws Exception{
		List<NewsType> newsTypeList=newsTypeService.getList();
		//与上一个查询方法查询出来数据，但是这里通过request.setAttribute的赋值方式将查询的数据存入key"newTypeCountList"，并直接跳转到
		//"haylion-website-cms/admin/writeNews"页面
		request.setAttribute("newTypeCountList", newsTypeList);
		return "haylion-website-cms/admin/writeNews";
	}

	/**
	 * 添加或者修改新闻类别信息
	 * @param blogType
	 * @param response
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/newsType/save")
	public String save(NewsType newsType,HttpServletResponse response)throws Exception{
		int resultTotal=0; // 操作的记录条数
		//根据id是否为空判断前端请求是新增还是更新操作
		if(newsType.getId()==null){
			resultTotal=newsTypeService.add(newsType);
		}else{
			resultTotal=newsTypeService.update(newsType);
		}
		JSONObject result=new JSONObject();
		//上述操作完成后会返回int为1，操作失败会返回0，通过这个来判断插入或更新操作是否完成来给前端传递消息
		if(resultTotal>0){
			result.put("success", true);
		}else{
			result.put("success", false);
		}
		ResponseUtil.write(response, result);
		return null;
	}

	/**
	 * 删除新闻类别信息
	 * @param ids
	 * @param response
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/newsType/delete")
	public String delete(@RequestParam(value="ids")String ids,HttpServletResponse response)throws Exception{
		//前端传入字符串ids到后台，通过逗号分割成字符串数组，再遍历转换为数字进行删除操作
		String []idsStr=ids.split(",");
		for(int i=0;i<idsStr.length;i++){
			newsTypeService.delete(Integer.parseInt(idsStr[i]));
		}
		JSONObject result=new JSONObject();
		result.put("success", true);
		ResponseUtil.write(response, result);
		return null;
	}
}
