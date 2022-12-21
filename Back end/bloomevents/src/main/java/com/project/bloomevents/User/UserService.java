package com.project.bloomevents.User;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.sql.Timestamp;
import java.time.Instant;
import java.util.List;

//import com.project.bloomevents.LoginDetails.LoginDetails;
//import com.project.bloomevents.LoginDetails.LoginDetailsRepository;
//import com.project.bloomevents.LoginDetails.LoginDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
	@Autowired
	private UserRepository repo;

	@Autowired
//	private LoginDetailsService loginService;
	
	public List<User> getAllUsers(){
		return repo.findAll();
	}
//
//	public LoginDetails addUser(LoginDetails userdata) throws NoSuchAlgorithmException {
//		LoginDetails ld=loginService.validateEmail(userdata.getEmail());
//
//		if(ld == null){
//			User newUser = repo.save(userdata.getUser());
//			userdata.setUser(newUser);
//
//			MessageDigest md = MessageDigest.getInstance("MD5");
//			byte[] pwDigest = md.digest(userdata.getPassword().getBytes());
//
//			BigInteger hashed = new BigInteger(1, pwDigest);
//			String hashedPW = hashed.toString(16);
//			userdata.setPassword(hashedPW);
//
//			loginService.addLoginDetails(userdata);
//			return userdata;
//		}
//		else{
//			return null;
//		}
//	}

	public User getUser(int userId) {
		return repo.CheckUser(userId);
	}

	public void updateLastLogin(User user, Timestamp timestamp){
		user.setLast_login(timestamp);
		repo.save(user);
	}

}
