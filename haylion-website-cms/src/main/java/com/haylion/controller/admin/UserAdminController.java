package com.haylion.controller.admin;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.haylion.entity.User;
import com.haylion.service.UserService;
import com.haylion.util.CryptographyUtil;
import com.haylion.util.ResponseUtil;
import com.haylion.util.StringUtil;

import net.sf.json.JSONObject;

/**
 * 管理员Controller层
 * 
 * @author Administrator
 *
 */
@Controller
public class UserAdminController {

	@Resource
	private UserService userService;

	/**
	 * 用户登录
	 * @param blogger
	 * @param request
	 * @return
	 */
	@RequestMapping("/user/login")
	public String login(User user, HttpServletRequest request) {
		Subject subject = SecurityUtils.getSubject();
		UsernamePasswordToken token = new UsernamePasswordToken(user.getUsername(),
				CryptographyUtil.md5(user.getPassword(), StringUtil.loadConfig("SALT")));
		try {
			// 登录验证(shiro框架工具方法)
			subject.login(token); 
			User u = userService.getByUserName(user.getUsername());
			//判断查询结果是否为空，不为空则登录成功跳转到main，否则就重新回到登录界面
			if (u != null) {
				return "/admin/main";
			} else {
				return "login";
			}
		} catch (Exception e) {
			e.printStackTrace();
			request.setAttribute("user", user);
			request.setAttribute("errorInfo", "用户名或密码错误！");
			return "login";
		}
	}

	/**
	 * 修改信息
	 * 
	 * @param file1
	 * @param user
	 * @param request
	 * @param response
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/user/save", produces = "text/html;charset=UTF-8")
	public String save(User user, HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		//这里通过md5工具类对传入的明文密码进行加密加盐处理后，再进行下面操作
		user.setPassword(CryptographyUtil.md5(user.getPassword(), StringUtil.loadConfig("SALT")));
		
		int resultTotal = userService.update(user);
		StringBuffer result = new StringBuffer();
		//上述操作完成后会返回int为1，操作失败会返回0，通过这个来判断插入或更新操作是否完成来给前端传递消息
		if (resultTotal > 0) {
			result.append("<script language='javascript'>alert('修改成功！');</script>");
		} else {
			result.append("<script language='javascript'>alert('修改失败！');</script>");
		}
		ResponseUtil.write(response, result);
		return null;
	}

	/**
	 * 查询信息
	 * 
	 * @param response
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/user/find", produces = "text/html;charset=UTF-8")
	public String find(HttpServletResponse response) throws Exception {
        //查询用户信息，返回string数据给前端
		User user = userService.find();
		JSONObject jsonObject = JSONObject.fromObject(user);
		ResponseUtil.write(response, jsonObject);
		return null;
	}

	/**
	 * 修改密码
	 * 
	 * @param newPassword
	 * @param response
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/user/update", produces = "text/html;charset=UTF-8")
	public String update(String newPassword, HttpServletResponse response) throws Exception {
		User user = new User();
		//获取传入的密码，将密码进行md5工具处理加密后更新入库
		user.setPassword(CryptographyUtil.md5(newPassword, StringUtil.loadConfig("SALT")));
		int resultTotal = userService.update(user);
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
	 * 注销
	 * 
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/user/logout")
	public String logout() throws Exception {
		SecurityUtils.getSubject().logout();
		return "redirect:/login.jsp";
	}
}
