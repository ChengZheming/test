package com.haylion.dao;
import java.util.List;
import java.util.Map;
import com.haylion.entity.News;
public interface NewsDao {
	/**
	 * 根据日期月份分组查询
	 * @return
	 */
	public List<News> countList();

	/**
	 * 分页查询新闻
	 * @return
	 */
	public List<News> list(Map<String,Object> map);

	/**
	 * 获取总记录数
	 * @param map
	 * @return
	 */
	public Long getTotal(Map<String,Object> map);

	/**
	 * 通过Id查找实体
	 * @param news
	 * @return
	 */
	public News findById(News news);

	/**
	 * 更新新闻信息
	 * @param blog
	 * @return
	 */
	public Integer update(News news); 

	/**
	 * 获取上一个新闻
	 * @param id
	 * @return
	 */
	public News getLastNews(Integer id);

	/**
	 * 获取下一个新闻
	 * @param id
	 * @return
	 */
	public News getNextNews(Integer id);

	/**
	 * 添加新闻信息
	 * @param blog
	 * @return
	 */
	public Integer add(News news);

	/**
	 * 删除新闻信息
	 * @param id
	 * @return
	 */
	public Integer delete(Integer id);

	public List<News> getlist(News news);
	/**
	 * 
	 * @Description (TODO这里用一句话描述这个方法的作用)
	 * @param news
	 * @return
	 */
	public Integer getCount(News news);

}