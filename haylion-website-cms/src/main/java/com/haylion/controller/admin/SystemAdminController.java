package com.haylion.controller.admin;

import java.util.List;
import javax.annotation.Resource;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.support.RequestContextUtils;
import com.haylion.entity.News;
import com.haylion.entity.NewsType;
import com.haylion.entity.User;
import com.haylion.service.NewsService;
import com.haylion.service.NewsTypeService;
import com.haylion.service.UserService;
import com.haylion.util.ResponseUtil;
import net.sf.json.JSONObject;

/**
 * 管理员系统Controller层
 * @author Administrator
 *
 */
@Controller
@RequestMapping("/admin/system")
public class SystemAdminController {

	@Resource
	private NewsService newsService;
	
	@Resource
	private NewsTypeService newsTypeService;
	
	@Resource
	private UserService userService;
	
	/**
	 * 刷新系统缓存
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/refreshSystem")
	public String refreshSystem(HttpServletResponse response,HttpServletRequest request)throws Exception{
		ServletContext application=RequestContextUtils.getWebApplicationContext(request).getServletContext();
		// 查询新闻信息
		User user=userService.find(); 
		user.setPassword(null);
		application.setAttribute("user", user);
		// 查询新闻类别以及新闻的数量
		List<NewsType> newsTypeCountList=newsTypeService.countList(); 
		application.setAttribute("newsTypeCountList", newsTypeCountList);
		// 根据日期分组查询新闻
		List<News> newsCountList=newsService.countList();
		application.setAttribute("newsCountList", newsCountList);
		JSONObject result=new JSONObject();
		result.put("success", true);
		ResponseUtil.write(response, result);
		return null;
	}
}
