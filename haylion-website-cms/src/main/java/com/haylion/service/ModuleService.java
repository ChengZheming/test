package com.haylion.service;

import java.util.List;
import java.util.Map;

import com.haylion.entity.Module;

public interface ModuleService {

	List<Module> getModule(Module module);
	
	int save(Module module);
	
	int update(Module module);
	
	int delete(int id);
	
	List<Module> selectType(Module module);

	List<Module> list(Map<String, Object> map);
}
