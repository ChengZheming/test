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
import com.haylion.entity.Module;
import com.haylion.entity.News;
import com.haylion.entity.NewsType;
import com.haylion.entity.PageBean;
import com.haylion.entity.Type;
import com.haylion.service.ModuleService;
import com.haylion.service.TypeService;
import com.haylion.util.DateUtil;
import com.haylion.util.ResponseUtil;
/**
 * 
 * @ClassName TypeController
 * @Description TODO(管理官网模块controller)
 * @author guojunming
 * @Date 2018年3月24日 上午10:41:52
 * @version 1.0.0
 */
@Controller
public class TypeController {
	@Resource
	private TypeService typeService;
	
	/**
	 * 添加或者修改模块信息
	 * 
	 * @param news
	 * @param response
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/type/save", produces = "text/html;charset=UTF-8")
	public String save(Type type, HttpServletResponse response) throws Exception {
		int resultTotal = 0; // 操作的记录条数
		//根据id是否为空判断前端请求是新增还是更新操作
		if (type.getId() == null) {
			resultTotal = typeService.save(type);
		} else {
			resultTotal = typeService.update(type);
		}
		JSONObject result = new JSONObject();
		//上述操作完成后会返回int为1，操作失败会返回0，通过这个来判断插入或更新操作是否完成来给前端传递消息
		if (resultTotal > 0) {
			result.put("success", true);
		} else {
			result.put("success", false);
		}
		ResponseUtil.write(response, result);
		return null;
	}
	/**
	 * 查询模块信息
	 * 
	 * @param page
	 * @param rows
	 * @param s_customer
	 * @param response
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/type/getList", produces = "application/json;charset=UTF-8")
	public @ResponseBody JSONObject getList(Type type, HttpServletRequest httpServletRequest) throws Exception {
		//按传入对象数据条件查询类型表数据，返回json数据给前端
		List<Type> list=typeService.getType(type);
		JSONObject json=new JSONObject();
		json.put("data", list);
		return json;
	}
	/**
	 * 模块列表
	 * 
	 * @param page
	 * @param rows
	 * @param s_customer
	 * @param response
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/type/list")
	public @ResponseBody String list(@RequestParam(value="page",required=false)String page,@RequestParam(value="rows",required=false)String rows,HttpServletResponse response) throws Exception {
		//分页查询数据，返回stirng格式数据给前端
		PageBean pageBean=new PageBean(Integer.parseInt(page),Integer.parseInt(rows));
		Map<String,Object> map=new HashMap<String,Object>();
		map.put("start", pageBean.getStart());
		map.put("size", pageBean.getPageSize());
		List<Type> list=typeService.list(map);
		int total=list.size();
		JSONObject result=new JSONObject();
		JSONArray jsonArray=(JSONArray) JSON.toJSON(list);
		result.put("rows", jsonArray);
		result.put("total", total);
		ResponseUtil.write(response, result);
		return null;
	}
//	/**
//	 * 查询模块信息
//	 * 
//	 * @param page
//	 * @param rows
//	 * @param s_customer
//	 * @param response
//	 * @return
//	 * @throws Exception
//	 */
//	@RequestMapping(value = "/module/getType", produces = "application/json;charset=UTF-8")
//	public @ResponseBody JSONObject listType(Module module, HttpServletRequest httpServletRequest) throws Exception {
//		List<Module> list=typeService.selectType(module);
//		JSONObject json=new JSONObject();
//		json.put("data", list);
//		return json;
//	}
	/**
	 * 删除新闻类别信息
	 * @param ids
	 * @param response
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/type/delete")
	public String delete(@RequestParam(value="ids")String ids,HttpServletResponse response)throws Exception{
		//前端传入字符串ids到后台，通过逗号分割成字符串数组，再遍历转换为数字进行删除操作
		String []idsStr=ids.split(",");
		for(int i=0;i<idsStr.length;i++){
			typeService.delete(Integer.parseInt(idsStr[i]));
		}
		JSONObject result=new JSONObject();
		result.put("success", true);
		ResponseUtil.write(response, result);
		return null;
	}
}
