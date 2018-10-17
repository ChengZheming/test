

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.haylion.dao.UserDao;
import com.haylion.entity.User;


public class UseInfoTest {
	@SuppressWarnings("resource")
	@Test
	public void test()
	{
		
		ApplicationContext applicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
		UserDao userDao = applicationContext.getBean(UserDao.class);
		
		User u = userDao.find();
		
		System.out.println(u.getUsername());
	}
}
