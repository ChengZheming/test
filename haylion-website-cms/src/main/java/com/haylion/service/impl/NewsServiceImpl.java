package com.haylion.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.haylion.dao.NewsDao;
import com.haylion.entity.News;
import com.haylion.service.NewsService;
import com.haylion.util.RedisUtil;

@Service("newsService")
public class NewsServiceImpl implements NewsService {

	@Resource
	private NewsDao newsDao;
	@Autowired
	private RedisUtil redisUtil;
	
	public List<News> countList() {
		return newsDao.countList();
	}

	public List<News> list(Map<String, Object> map) {
		return newsDao.list(map);
	}

	public Long getTotal(Map<String, Object> map) {
		return newsDao.getTotal(map);
	}

	public News findById(News news) {
		return newsDao.findById(news);
	}

	public Integer update(News news) {
		Integer in=newsDao.update(news);
		try {
			redisUtil.removePattern("*");
		} catch (Exception e) {
			System.out.println("redis出错");
		}
		return in;
	}

	public News getLastNews(Integer id) {
		return newsDao.getLastNews(id);
	}

	public News getNextNews(Integer id) {
		return newsDao.getNextNews(id);
	}

	public Integer add(News news) {
		Integer in=newsDao.add(news);
		try {
			redisUtil.removePattern("*");
		} catch (Exception e) {
			System.out.println("redis出错");
		}
		return in;
	}

	public Integer delete(Integer id) {
		Integer in=newsDao.delete(id);
		try {
			redisUtil.removePattern("*");
		} catch (Exception e) {
			System.out.println("redis出错");
		}
		return in;
	}

	public List<News> getlist(News news) {
		List<News> list_news=new ArrayList<News>();
		List<News> str=new ArrayList<News>();
		try {
			//从缓存中读取数据
			str = (List<News>) redisUtil.get(news.getPageSize()+"_"+news.getPageNum()+"_"+news.getTypeid()+"_"+news.getLangid());
		} catch (Exception e) {
			System.out.println("redis出错");
		}
			//缓存中若无要查找的数据则到数据库查找
			if(str==null||str.isEmpty()) {
				//从数据库查找数据
				list_news=newsDao.getlist(news);
				try {
					//将数据库查找出的数据存入缓存，key为传入的参数以‘_’拼接而成
					redisUtil.set("haylion_"+news.getPageSize()+"_"+news.getPageNum()+"_"+news.getTypeid()+"_"+news.getLangid(), list_news);
				} catch (Exception e) {
					System.out.println("redis出错");
				}
			}else {
				list_news=str;
			}
		return list_news;
	}

	public Integer getCount(News news) {
		return newsDao.getCount(news);
	}
}
