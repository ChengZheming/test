package com.haylion.controller.admin;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.Date;
import com.haylion.util.DBUtil;
/**
 * 
 * @ClassName VisitorController
 * @Description TODO(流量统计controller)
 * @author guojunming
 * @Date 2018年3月29日 下午3:16:58
 * @version 1.0.0
 */
public class VisitorCounterController {

	/*
	 * 将数据存入统计表中	 
	 * */
	public  static void incTodayCounter(int moduleId) throws SQLException{
		int flag=getTodayRecord(moduleId);
		if(flag>0){
			updateCounter(moduleId);
		}else{
			insertCounter(moduleId);
		}
	}
	/*
	 * 将数据存入统计表中	 
	 * */
	public  static void insertCounter(int moduleId){
		Connection con = null;
		try {
			con = DBUtil.getConnection();
			Date date=new Date();
			SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd");
			String sql = "INSERT INTO t_visitorcounter "
					+ "VALUES(null,?,1,?)";
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setString(1, sdf.format(date));
			ps.setInt(2, moduleId);
			ps.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			DBUtil.close(con);
		}
	}
	/*
	 * 将数据更新入统计表中	 
	 * */
	public  static void updateCounter(int moduleId){
		Connection con = null;
		try {
			con = DBUtil.getConnection();
			Date date=new Date();
			SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd");
			String sql = "update t_visitorcounter set vnum=vnum+1 where date_format(vdate,'%Y-%m-%d')=? and moduleId=?";
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setString(1, sdf.format(date));
			ps.setInt(2, moduleId);
			ps.executeUpdate();
		} catch (SQLException e) {

			e.printStackTrace();
		}finally {
			DBUtil.close(con);
		}
	}
	/*
	 * 查询今日的访问量 
	 * */
	public  static int getTodayNum(int moduleId){
		Connection con = null;
		ResultSet rs=null;
		int todaynum=0;
		String sql="";
		try {
			con = DBUtil.getConnection();
			Date date=new Date();
			SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd");
			if(moduleId>0){
				sql = "select * from t_visitorcounter where date_format(vdate,'%Y-%m-%d')=? and moduleId=?";
			}else{
				sql = "select * from t_visitorcounter where date_format(vdate,'%Y-%m-%d')=?";
			}
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setString(1, sdf.format(date));
			ps.setInt(2, moduleId);
			rs=ps.executeQuery();
			while(rs.next()){
				todaynum=rs.getInt("vnum");
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			DBUtil.close(con);
		}
		return todaynum;
	}
	/*
	 * 查询指定模块历史访问量 (0代表查全部访问量)
	 * */
	public  static int getTotalNum(int moduleId){
		Connection con = null;
		ResultSet rs=null;
		int totalnum=0;
		String sql="";
		try {
			con = DBUtil.getConnection();
			Date date=new Date();
			SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd");
			if(moduleId>0){
				sql = "select sum(vnum) as vnum from t_visitorcounter where moduleId=?";
			}else{
				sql = "select sum(vnum) as vnum from t_visitorcounter";
			}
			
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setInt(1, moduleId);
			rs=ps.executeQuery();
			while(rs.next()){
				totalnum=rs.getInt("vnum");
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			DBUtil.close(con);
		}
		return totalnum;
	}
	/*
	 * 查询是否有今日记录 
	 * */
	public  static Integer getTodayRecord(int moduleId){
		Connection con = null;
		ResultSet rs=null;
		Integer record=null;
		try {
			con = DBUtil.getConnection();
			Date date=new Date();
			SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd");
			String sql = "select count(*) as count from t_visitorcounter where date_format(vdate,'%Y-%m-%d')=? and moduleId=?";
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setString(1, sdf.format(date));
			ps.setInt(2, moduleId);
			rs=ps.executeQuery();
			while(rs.next()){
				record=rs.getInt("count");
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			DBUtil.close(con);
		}
		return record;
	}
}
