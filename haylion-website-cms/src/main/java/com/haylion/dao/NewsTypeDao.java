package com.haylion.dao;

import java.util.List;
import java.util.Map;
import com.haylion.entity.NewsType;
public interface NewsTypeDao {

	/**
	 * 查询所有新闻类型 以及对应的新闻数量
	 * @return
	 */
	public List<NewsType> countList();

	/**
	 * 通过id查询新闻类型
	 * @param id
	 * @return
	 */
	public NewsType findById(Integer id);

	/**
	 * 分页查询新闻类别信息
	 * @param map
	 * @return
	 */
	public List<NewsType> list(Map<String,Object> map);

	/**
	 * 获取总记录数
	 * @param map
	 * @return
	 */
	public Long getTotal(Map<String,Object> map);

	/**
	 * 添加新闻类别信息
	 * @param newsType
	 * @return
	 */
	public Integer add(NewsType newsType);

	/**
	 * 修改新闻类别信息
	 * @param newsType
	 * @return
	 */
	public Integer update(NewsType newsType);

	/**
	 * 删除新闻类别信息
	 * @param id
	 * @return
	 */
	public Integer delete(Integer id);
	/**
	 * 
	 * @Description (获取所有新闻类别)
	 * @return
	 */
	public List<NewsType> getList();
	/**
	 * 
	 * @Description (根据类别id查找出对应的类别名称)
	 * @param typeid 类别id
	 * @return
	 */

	public String getNameById(NewsType newsType);
}