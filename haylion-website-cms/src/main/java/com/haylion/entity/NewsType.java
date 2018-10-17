package com.haylion.entity;

public class NewsType {
	private Integer id;  // 编号
	private String typename; // 新闻类型名称
	private Integer newscount; // 数量
	private Integer moduleId;
	private Integer moduleName;
	
	
	public Integer getModuleName() {
		return moduleName;
	}
	public void setModuleName(Integer moduleName) {
		this.moduleName = moduleName;
	}
	public Integer getModuleId() {
		return moduleId;
	}
	public void setModuleId(Integer moduleId) {
		this.moduleId = moduleId;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getTypename() {
		return typename;
	}
	public void setTypename(String typename) {
		this.typename = typename;
	}
	public Integer getNewscount() {
		return newscount;
	}
	public void setNewscount(Integer newscount) {
		this.newscount = newscount;
	}
	@Override
	public String toString() {
		return "NewsType [id=" + id + ", typename=" + typename + ", newscount=" + newscount + ", moduleId=" + moduleId
				+ ", moduleName=" + moduleName + "]";
	}
}