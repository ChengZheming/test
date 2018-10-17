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
import com.haylion.entity.PageBean;
import com.haylion.service.ModuleService;
import com.haylion.util.ResponseUtil;
/**
 * 
 * @ClassName ModuleController
 * @Description TODO(管理官网模块controller)
 * @author guojunming
 * @Date 2018年3月24日 上午10:41:52
 * @version 1.0.0
 */
@Controller
public class ModuleController {
	@Resource
	private ModuleService moduleService;
	
	/**
	 * 添加或者修改新闻信息
	 * @param news
	 * @param response
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/module/save", produces = "text/html;charset=UTF-8")
	public String save(Module module, HttpServletResponse response) throws Exception {
		int resultTotal = 0; // 操作的记录条数
		//根据id是否为空判断前端请求是新增还是更新操作
		if (module.getId() == null) {
			resultTotal = moduleService.save(module);
		} else {
			resultTotal = moduleService.update(module);
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
	 * @param page
	 * @param rows
	 * @param s_customer
	 * @param response
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/module/getList", produces = "application/json;charset=UTF-8")
	public @ResponseBody JSONObject getList(Module module, HttpServletRequest httpServletRequest) throws Exception {
		//根据传入对象进行查询，返回相应json数据给前端
		List<Module> list=moduleService.getModule(module);
		JSONObject json=new JSONObject();
		json.put("data", list);
		return json;
	}
	/**
	 * 模块列表
	 * @param page
	 * @param rows
	 * @param s_customer
	 * @param response
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/module/list")
	public @ResponseBody String list(@RequestParam(value="page",required=false)String page,@RequestParam(value="rows",required=false)String rows,HttpServletResponse response) throws Exception {
		/**
		 * 与上面getlist方法获取方式相近，增加了分页功能，返回一个string类型(页面)到前端
		 */
		PageBean pageBean=new PageBean(Integer.parseInt(page),Integer.parseInt(rows));
		Map<String,Object> map=new HashMap<String,Object>();
		map.put("start", pageBean.getStart());
		map.put("size", pageBean.getPageSize());
		List<Module> list=moduleService.list(map);
		int total=list.size();
		JSONObject result=new JSONObject();
		JSONArray jsonArray=(JSONArray) JSON.toJSON(list);
		result.put("rows", jsonArray);
		result.put("total", total);
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
	@RequestMapping(value = "/module/getType", produces = "application/json;charset=UTF-8")
	public @ResponseBody JSONObject getType(Module module, HttpServletRequest httpServletRequest) throws Exception {
		List<Module> list=moduleService.selectType(module);
		JSONObject json=new JSONObject();
		json.put("data", list);
		return json;
	}
	/**
	 * 删除新闻类别信息
	 * @param ids
	 * @param response
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/module/delete")
	public String delete(@RequestParam(value="ids")String ids,HttpServletResponse response)throws Exception{
		//前端传入字符串ids到后台，通过逗号分割成字符串数组，再遍历转换为数字进行删除操作
		String []idsStr=ids.split(",");
		for(int i=0;i<idsStr.length;i++){
			moduleService.delete(Integer.parseInt(idsStr[i]));
		}
		JSONObject result=new JSONObject();
		result.put("success", true);
		ResponseUtil.write(response, result);
		return null;
	}
}
