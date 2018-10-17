package com.haylion.entity;

import java.util.Date;

/**
 * 评论实体
 * @author Administrator
 *
 */
public class Comment {

	private Integer id; // 编号
	private String userIp; // 用户IP
	private String content; // 评论内容
	private News news; // 被评论的新闻
	private Date commentDate; // 评论日期
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getUserIp() {
		return userIp;
	}
	public void setUserIp(String userIp) {
		this.userIp = userIp;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public News getNews() {
		return news;
	}
	public void setNews(News news) {
		this.news = news;
	}
	public Date getCommentDate() {
		return commentDate;
	}
	public void setCommentDate(Date commentDate) {
		this.commentDate = commentDate;
	}
	@Override
	public String toString() {
		return "Comment [id=" + id + ", userIp=" + userIp + ", content=" + content + ", news=" + news + ", commentDate="
				+ commentDate + "]";
	}
}
