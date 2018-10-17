package com.haylion.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import org.springframework.stereotype.Service;
import com.haylion.dao.TypeDao;
import com.haylion.entity.Type;
import com.haylion.service.TypeService;
@Service("typeService")
public class TypeServiceImpl implements TypeService {
	@Resource
	private TypeDao typeDao;

	public int save(Type type) {
		return typeDao.insert(type);
	}

	public int update(Type type) {
		return typeDao.updateByPrimaryKeySelective(type);
	}

	public List<Type> getType(Type type) {
		return typeDao.selectByPrimaryKey(type);
	}

	public List<Type> list(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return null;
	}

	public void delete(int parseInt) {
		typeDao.deleteByPrimaryKey(parseInt);
	}

}
