package com.haylion.entity;

import java.io.Serializable;
import java.util.Date;

public class News implements Serializable{
	private Integer id; // 编号
	private String title; // 新闻标题
	private String releasedate; // 发布日期
	private String content; // 新闻内容
	private String contentNoTag; // 新闻内容 无网页标签 Lucene分词用
	private String newsType; // 新闻类型
	private Integer newsCount; // 新闻数量 非新闻实际属性，主要是 根据发布日期归档查询新闻数量用
	private String releaseDateStr; // 发布日期字符串 只取年和月
	private Integer typeid;
	private String summary;
	private Integer pageSize;
	private Integer pageNum;
	private String imagePath;
	private String typename;
	private String year;
	private String month;
	private String day;
	private Integer langid;
	private Integer moduleId;
	private String worktype;
	private String workplace;
	
	
	
	public String getWorktype() {
		return worktype;
	}
	public void setWorktype(String worktype) {
		this.worktype = worktype;
	}
	public String getWorkplace() {
		return workplace;
	}
	public void setWorkplace(String workplace) {
		this.workplace = workplace;
	}
	public Integer getModuleId() {
		return moduleId;
	}
	public void setModuleId(Integer moduleId) {
		this.moduleId = moduleId;
	}
	public Integer getLangid() {
		return langid;
	}
	public void setLangid(Integer langid) {
		this.langid = langid;
	}
	public String getYear() {
		return year;
	}
	public void setYear(String year) {
		this.year = year;
	}
	public String getMonth() {
		return month;
	}
	public void setMonth(String month) {
		this.month = month;
	}
	public String getDay() {
		return day;
	}
	public void setDay(String day) {
		this.day = day;
	}
	public String getTypename() {
		return typename;
	}
	public void setTypename(String typename) {
		this.typename = typename;
	}
	public String getImagePath() {
		return imagePath;
	}
	public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
	}
	public Integer getPageSize() {
		return pageSize;
	}
	public void setPageSize(Integer pageSize) {
		this.pageSize = pageSize;
	}
	public Integer getPageNum() {
		return pageNum;
	}
	public void setPageNum(Integer pageNum) {
		this.pageNum = pageNum;
	}
	public String getReleasedate() {
		return releasedate;
	}
	public void setReleasedate(String releasedate) {
		this.releasedate = releasedate;
	}

	public String getSummary() {
		return summary;
	}
	public void setSummary(String summary) {
		this.summary = summary;
	}
	public Integer getTypeid() {
		return typeid;
	}
	public void setTypeid(Integer typeid) {
		this.typeid = typeid;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getContentNoTag() {
		return contentNoTag;
	}
	public void setContentNoTag(String contentNoTag) {
		this.contentNoTag = contentNoTag;
	}
	public String getNewsType() {
		return newsType;
	}
	public void setNewsType(String newsType) {
		this.newsType = newsType;
	}
	public Integer getNewsCount() {
		return newsCount;
	}
	public void setNewsCount(Integer newsCount) {
		this.newsCount = newsCount;
	}
	public String getReleaseDateStr() {
		return releaseDateStr;
	}
	public void setReleaseDateStr(String releaseDateStr) {
		this.releaseDateStr = releaseDateStr;
	}
	@Override
	public String toString() {
		return "News [id=" + id + ", title=" + title + ", releasedate=" + releasedate + ", content=" + content
				+ ", contentNoTag=" + contentNoTag + ", newsType=" + newsType + ", newsCount=" + newsCount
				+ ", releaseDateStr=" + releaseDateStr + ", typeid=" + typeid + ", summary=" + summary + ", pageSize="
				+ pageSize + ", pageNum=" + pageNum + ", imagePath=" + imagePath + ", typename=" + typename + ", year="
				+ year + ", month=" + month + ", day=" + day + ", langid=" + langid + ", moduleId=" + moduleId
				+ ", worktype=" + worktype + ", workplace=" + workplace + "]";
	}
}