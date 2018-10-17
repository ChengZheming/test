package com.haylion.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.haylion.dao.NewsTypeDao;
import com.haylion.entity.NewsType;
import com.haylion.service.NewsTypeService;
@Service("newsTypeService")
public class NewsTypeServiceImpl implements NewsTypeService {

	@Resource
	private NewsTypeDao newsTypeDao;
	
	public List<NewsType> countList() {
		return newsTypeDao.countList();
	}

	public List<NewsType> list(Map<String, Object> map) {
		return newsTypeDao.list(map);
	}

	public Long getTotal(Map<String, Object> map) {
		return newsTypeDao.getTotal(map);
	}

	public Integer add(NewsType newsType) {
		return newsTypeDao.add(newsType);
	}

	public Integer update(NewsType newsType) {
		return newsTypeDao.update(newsType);
	}

	public Integer delete(Integer id) {
		return newsTypeDao.delete(id);
	}

	public List<NewsType> getList() {
		return newsTypeDao.getList();
	}

	public String getNameById(NewsType newsType) {
		return newsTypeDao.getNameById(newsType);
	}
}
