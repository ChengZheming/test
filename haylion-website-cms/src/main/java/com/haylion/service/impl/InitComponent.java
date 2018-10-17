package com.haylion.service.impl;

import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;

import com.haylion.entity.News;
import com.haylion.entity.NewsType;
import com.haylion.entity.User;
import com.haylion.service.NewsService;
import com.haylion.service.NewsTypeService;
import com.haylion.service.UserService;

/**
 * 初始化组件 把博主信息 根据新闻类别分类信息 根据日期归档分类信息 存放到application中，用以提供页面请求性能
 * @author Administrator
 *
 */
@Component
public class InitComponent implements ServletContextListener,ApplicationContextAware{

	private static ApplicationContext applicationContext;
	
	public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
		// TODO Auto-generated method stub
		this.applicationContext=applicationContext;
	}

	public void contextInitialized(ServletContextEvent servletContextEvent) {
		ServletContext application=servletContextEvent.getServletContext();
		UserService userService=(UserService) applicationContext.getBean("userService");
		User user=userService.find(); // 查询博主信息
		user.setPassword(null);
		application.setAttribute("user", user);
		
		NewsTypeService newsTypeService=(NewsTypeService) applicationContext.getBean("newsTypeService");
		List<NewsType> newsTypeCountList=newsTypeService.getList(); // 查询新闻类别以及新闻的数量
		application.setAttribute("newsTypeCountList", newsTypeCountList);
		
		NewsService newsService=(NewsService) applicationContext.getBean("newsService");
		List<News> newsCountList=newsService.countList(); // 根据日期分组查询新闻
		application.setAttribute("newsCountList", newsCountList);
	}

	public void contextDestroyed(ServletContextEvent sce) {
		// TODO Auto-generated method stub
		
	}

}
