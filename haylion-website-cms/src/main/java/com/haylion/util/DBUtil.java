package com.haylion.util;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import org.apache.commons.dbcp.BasicDataSource;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.haylion.entity.News;
public class DBUtil {


	//连接池对象-由DBCP提供
	private static BasicDataSource ds;
  
	static {
		Properties p = new Properties();
		try {
			p.load(DBUtil.class.getClassLoader().getResourceAsStream("db.properties"));
			//读取参数
			//读取连接参数
			String driver = p.getProperty("DRIVER");
			String url = p.getProperty("URL");
			String user = p.getProperty("DB_USERNAME");
			String pwd = p.getProperty("DB_PASSWORD");

			//创建连接池
			ds = new BasicDataSource();
			//设置参数
			//使用这个参数注册驱动
			ds.setDriverClassName(driver);
			//使用这3个参数创建连接
			ds.setUrl(url);
			ds.setUsername(user);
			ds.setPassword(pwd);
			//使用其他参数管理连接

		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(
					"加载db.properties失败", e);
		}

	}

	public static Connection getConnection() 
			throws SQLException {
		return ds.getConnection();
		
		
	}

	
	
	/**
	 * 由连接池创建的连接,连接的close方法
	 * 被连接池重写了,变为了归还连接的逻辑,
	 * 即:连接池会将连接的状态设置为空闲,
	 * 并清空连接中所包含的任何数据.
	 */
	public static void close(Connection conn) {
		if(conn != null) {
			try {
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
				throw new RuntimeException(
						"归还连接失败", e);
			}
		}
	}

	public static void rollback(Connection conn) {
		if(conn != null) {
			try {
				conn.rollback();
			} catch (SQLException e) {
				e.printStackTrace();
				throw new RuntimeException(
						"回滚失败", e);
			}
		}
	}

	/*
	 * 通过表单编号查找数据
	 */
	public static List<News> findNews(){
		Connection con = null;
		JSONArray jsonArray=new JSONArray();
		List<News> list=new ArrayList<News>();
		try {
			con = DBUtil.getConnection();
			String sql = "select * from t_news ";
			PreparedStatement ps = con.prepareStatement(sql);
			ResultSet rs = ps.executeQuery();
			ResultSetMetaData md = rs.getMetaData();
			int columnCount = md.getColumnCount(); 
			while(rs.next()) {
				Map<String,Object> rowData = new HashMap<String,Object>();
				JSONObject jsonObject=new JSONObject();
				for (int i = 1; i <= columnCount; i++) {
					rowData.put(md.getColumnName(i), rs.getObject(i));
					jsonObject.put(md.getColumnName(i), rs.getObject(i));
				}
				jsonArray.add(jsonObject);
			}
			list=JSONArray.parseArray(jsonArray.toString()).toJavaList(News.class);
			return list;
		} catch (SQLException e) {
			e.printStackTrace();
			return list;
		}finally {
			DBUtil.close(con);
		}
	}

}








