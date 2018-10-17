package com.haylion.util;

import java.io.InputStream;
import java.util.Properties;


/**
 * 字符串工具类
 * @author 
 *
 */
public class StringUtil {

	/**
	 * 判断是否是空
	 * @param str
	 * @return
	 */
	public static boolean isEmpty(String str){
		if(str==null||"".equals(str.trim())){
			return true;
		}else{
			return false;
		}
	}
	/**
	 * 
	 * @Description (对字符串做校验判空)
	 * @param str
	 * @return
	 */
	public static boolean validateStringNull(String str) {
		boolean msg = true;
		if (str != null&&!str.equals("null")) {
			str = str.trim();
			if ("".equals(str)) {
				msg = false;
			}
		} else {
			msg = false;
		}
		return msg;
	}
	/**
	 * 判断是否不是空
	 * @param str
	 * @return
	 */
	public static boolean isNotEmpty(String str){
		if((str!=null)&&!"".equals(str.trim())){
			return true;
		}else{
			return false;
		}
	}
	
	/**
	 * 格式化模糊查询
	 * @param str
	 * @return
	 */
	public static String formatLike(String str){
		if(isNotEmpty(str)){
			return "%"+str+"%";
		}else{
			return null;
		}
	}
	/**
	 * 
	 * @Description (加载指定的配置文件，并通过参数读取参数所代表的字符串)
	 * @param params
	 * @return
	 */
	public static String loadConfig(String param) {
		String res = "";
		try {
			InputStream in = StringUtil.class.getClassLoader().getResourceAsStream("db.properties");
			Properties prop = new Properties();
			prop.load(in);
			res = prop.getProperty(param).toString();
			if (in != null) {
				in.close();
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return res;
	}
}
