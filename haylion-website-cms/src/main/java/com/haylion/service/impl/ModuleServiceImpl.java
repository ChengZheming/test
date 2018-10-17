package com.haylion.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.haylion.dao.ModuleDao;
import com.haylion.entity.Module;
import com.haylion.service.ModuleService;
@Service("moduleService")
public class ModuleServiceImpl implements ModuleService {
	@Resource
	private ModuleDao moduleDao;
	public List<Module> getModule(Module module) {
		return moduleDao.selectByPrimaryKey(module);
	}

	public int save(Module module) {
		return moduleDao.insertSelective(module);
	}

	public int update(Module module) {
		return moduleDao.updateByPrimaryKeySelective(module);
	}

	public int delete(int id) {
		return moduleDao.deleteByPrimaryKey(id);
	}

	public List<Module> selectType(Module module) {
		return moduleDao.selectType(module);
	}

	public List<Module> list(Map<String, Object> map) {
		return moduleDao.list(map);
	}

}
