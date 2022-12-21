package com.project.bloomevents.User;

import java.security.NoSuchAlgorithmException;
import java.util.List;

//import com.project.bloomevents.LoginDetails.LoginDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping
public class UserController {
	@Autowired
	private UserService service;
	
	@GetMapping("/get")
	public String get() {
		return "Hello";
	}
	
	@GetMapping("/getAllUsers")
	public List<User> getAllUsers(){
		return service.getAllUsers();
	}
	
	@PostMapping("/addUser")
//	public LoginDetails addUser(@RequestBody LoginDetails userdata) throws NoSuchAlgorithmException {
//		return service.addUser(userdata);
//	}

	@GetMapping("/getUser/{userId}")
	public User getAllUsers(@PathVariable int userId){
		return service.getUser(userId);
	}
}
