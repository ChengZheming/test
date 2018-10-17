package com.haylion.service;

import com.haylion.entity.User;

public interface UserService {


	/**
	 * 查询博主信息
	 * @return
	 */
	public User find();
	
	/**
	 * 通过用户名查询用户
	 * @param userName
	 * @return
	 */
	public User getByUserName(String userName);
	
	/**
	 * 更新博主信息
	 * @param user
	 * @return
	 */
	public Integer update(User user);

}
