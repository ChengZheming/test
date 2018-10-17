package com.haylion.controller.admin;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.haylion.entity.News;
import com.haylion.entity.NewsType;
import com.haylion.entity.PageBean;
import com.haylion.service.NewsService;
import com.haylion.service.NewsTypeService;
import com.haylion.util.DateUtil;
import com.haylion.util.ResponseUtil;
import com.haylion.util.StringUtil;

/**
 * 管理员新闻Controller层
 * 
 * @author Administrator
 *
 */
@Controller
public class NewsAdminController {

	@Resource
	private NewsService newsService;
	@Resource
	private NewsTypeService newsTypeService;


	/**
	 * 头像图片上传
	 * 
	 * @throws IOException
	 */
	@RequestMapping(value = "/saveHeaderPic", method = RequestMethod.POST)
	public @ResponseBody JSONObject saveHeaderPic(@RequestParam("file") CommonsMultipartFile file,
			HttpServletRequest request, HttpServletResponse response) throws IOException {
		JSONObject map = new JSONObject();
		try {
			//获取开始时间
			long startTime = System.currentTimeMillis();
			// 设置日期格式
			SimpleDateFormat df = new SimpleDateFormat("yyyyMMddHHmmss");
			// new Date()为获取当前系统时间，也可使用当前时间戳
			String date = df.format(new Date());
			System.out.println("fileName：" + file.getOriginalFilename());
			String realPath = request.getSession().getServletContext().getRealPath("/");
			//获取绝对路径
			String appsPath=new File(realPath).getParentFile().getAbsolutePath();
			//拼接图片路径
			String path = appsPath + StringUtil.loadConfig("imgPath") + date + file.getOriginalFilename();
			File newFile = new File(path);
			//目录不存在就创建新目录
			if (!newFile.exists()) {
				newFile.mkdirs();
			}
			//通过Stringutil读取配置文件中指定的字符串并增加时间戳以及原始文件名共同组成一个新的文件路径
			String dbPath = StringUtil.loadConfig("dbPath") + date + file.getOriginalFilename();
			//将该路径存入map中返回前端
			map.put("path", dbPath);
			// 通过CommonsMultipartFile的方法直接写文件
			file.transferTo(newFile);
			//获取结束时间，通过结束减去开始，计算出本次操作耗时时间
			long endTime = System.currentTimeMillis();
			System.out.println("运行时间：" + String.valueOf(endTime - startTime) + "ms");
		} catch (IllegalStateException e) {
			e.printStackTrace();
		}
		return map;

	}

	/**
	 * 添加或者修改新闻信息
	 * 
	 * @param news
	 * @param response
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/news/save", produces = "text/html;charset=UTF-8")
	public String save(News news, HttpServletResponse response) throws Exception {
		int resultTotal = 0; // 操作的记录条数
		//根据id是否为空判断前端请求是新增还是更新操作
		if (news.getId() == null) {
			resultTotal = newsService.add(news);
		} else {
			resultTotal = newsService.update(news);
		}
		JSONObject result = new JSONObject();
		//上述操作完成后会返回int为1，操作失败会返回0，通过这个来判断插入或更新操作是否完成来给前端传递消息
		if (resultTotal > 0) {
			result.put("success", true);
		} else {
			result.put("success", false);
		}
		ResponseUtil.write(response, result);
		return null;
	}

	/**
	 * 分页查询新闻信息
	 * 
	 * @param page
	 * @param rows
	 * @param s_customer
	 * @param response
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/news/list", produces = "text/html;charset=UTF-8")
	public String list(@RequestParam(value = "page", required = false) String page,
			@RequestParam(value = "rows", required = false) String rows, News s_news, HttpServletResponse response)
			throws Exception {
		//增加分页功能
		PageBean pageBean = new PageBean(Integer.parseInt(page), Integer.parseInt(rows));
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("title", StringUtil.formatLike(s_news.getTitle()));
		map.put("start", pageBean.getStart());
		map.put("size", pageBean.getPageSize());
		List<News> newsList = newsService.list(map);
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		for (int i = 0; i < newsList.size(); i++) {
			//循环将获取到的时间转换成年月日放入Releasedate里返回前端
			String date = sdf.format(sdf.parse(newsList.get(i).getReleasedate()));
			//循环获取到集合元素中的typeid，并根据typeid来获取相应的typename并赋给每个元素的typename，返回给前端
			if (newsList.get(i).getTypeid() != null && !newsList.get(i).getTypeid().equals("")) {
				NewsType newsType = new NewsType();
				newsType.setId(newsList.get(i).getTypeid());
				String typeName = newsTypeService.getNameById(newsType);
				newsList.get(i).setTypename(typeName);
			}
			newsList.get(i).setReleaseDateStr(date);
		}
		//获取集合元素个数
		Long total = newsService.getTotal(map);
		JSONObject result = new JSONObject();
		result.put("rows", newsList);
		result.put("total", total);
		ResponseUtil.write(response, result);
		return null;
	}

	/**
	 * 分页查询新闻信息
	 * 
	 * @param page
	 * @param rows
	 * @param s_customer
	 * @param response
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/news/getList", produces = "application/json;charset=UTF-8")
	public @ResponseBody JSONObject getList(HttpServletRequest httpServletRequest) throws Exception {
		// 获取每页显示的开始记录数
		News news = new News();
		//分别通过判空来获取typeid、langid、start、limit
		String typeId=httpServletRequest.getParameter("typeid");
		if(typeId!=null&&!typeId.equals("")){
			news.setTypeid(Integer.valueOf(typeId));
		}
		String langId=httpServletRequest.getParameter("langid");
		if(langId!=null&&!langId.equals("")){
			news.setLangid(Integer.valueOf(langId));
		}
		String pageSize = httpServletRequest.getParameter("start");
		if (pageSize != null && !pageSize.equals("")) {
			news.setPageSize(Integer.parseInt(pageSize));
		}
		// 获取每页需要显示的记录数
		String pageNum = httpServletRequest.getParameter("limit");
		if (pageNum != null && !pageNum.equals("")) {
			news.setPageNum(Integer.parseInt(pageNum));
		}
		List<News> newsList = newsService.getlist(news);
		//获取元素个数
		Integer count=newsService.getCount(news);
		JSONObject map = new JSONObject();
		for (int i = 0; i < newsList.size(); i++) {
			//循环获取具体时间，并根据前端需求，将年月日分别单独剪切出来存入year，month，day属性中，返回前端
			JSONObject json = DateUtil.DateSeperator(newsList.get(i).getReleasedate());
			newsList.get(i).setReleaseDateStr(json.getString("ymd"));
			newsList.get(i).setYear(json.getString("year"));
			newsList.get(i).setMonth(json.getString("month"));
			newsList.get(i).setDay(json.getString("day"));
		}
		map.put("newlist", newsList);
		map.put("total", count);
		return map;
	}

	/**
	 * 删除新闻信息
	 * 
	 * @param ids
	 * @param response
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/news/delete", produces = "text/html;charset=UTF-8")
	public String delete(@RequestParam(value = "ids") String ids, HttpServletResponse response) throws Exception {
		//前端传入字符串ids到后台，通过逗号分割成字符串数组，再遍历转换为数字进行删除操作
		String[] idsStr = ids.split(",");
		for (int i = 0; i < idsStr.length; i++) {
			newsService.delete(Integer.parseInt(idsStr[i]));
		}
		JSONObject result = new JSONObject();
		result.put("success", true);
		ResponseUtil.write(response, result);
		return null;
	}

	/**
	 * 通过ID查找实体
	 * 
	 * @param id
	 * @param response
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/news/getListById", produces = "text/html;charset=UTF-8")
	public String getListById(@RequestParam(value = "id") String id, HttpServletResponse response) throws Exception {
		
		News news = new News();
		//根据id获取指定新闻，并返回前端
		if (id != null && !id.equals("")) {
			News n=new News();
			n.setId(Integer.parseInt(id));
			news = newsService.findById(n);
			JSONObject result=new JSONObject();
			result.put("id", news.getId());
			result.put("typeid", news.getTypeid());
			result.put("title", news.getTitle());
			result.put("content", news.getContent());
			result.put("imagePath", news.getImagePath());
			result.put("releaseDate", news.getReleasedate().subSequence(0, 19));
			result.put("worktype", news.getWorktype());
			result.put("workplace", news.getWorkplace());
			result.put("summary", news.getSummary());
			result.put("langid", news.getLangid());
		ResponseUtil.write(response, result);
		}
		return null;
	}

	/**
	 * 通过ID查找实体
	 * 
	 * @param id
	 * @param response
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/news/getNewsById", produces = "application/json;charset=UTF-8")
	public @ResponseBody JSONObject getNewsById(HttpServletResponse response, HttpServletRequest request)
			throws Exception {
		String id = request.getParameter("id");
		JSONObject json = new JSONObject();
		News news = new News();
		//通过id判空来通过id查询新闻数据
		if (id != null && !id.equals("")) {
			News n=new News();
			n.setId(Integer.parseInt(id));
			news = newsService.findById(n);
			//DateSeperator整理日期格式，将处理后的年月日分别提取出来赋值，返回前端
			JSONObject dateJson = DateUtil.DateSeperator(news.getReleasedate());
			news.setReleaseDateStr(dateJson.getString("ymd"));
			news.setYear(dateJson.getString("year"));
			news.setMonth(dateJson.getString("month"));
			news.setDay(dateJson.getString("day"));
			json = (JSONObject) JSON.toJSON(news);
		}
		return json;
	}
}
