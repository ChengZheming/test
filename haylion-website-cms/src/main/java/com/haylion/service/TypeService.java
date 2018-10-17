package com.haylion.service;

import java.util.List;
import java.util.Map;

import com.haylion.entity.Module;
import com.haylion.entity.Type;

public interface TypeService {

	int save(Type type);

	int update(Type type);

	List<Type> getType(Type type);

	List<Type> list(Map<String, Object> map);

	void delete(int parseInt);


}
