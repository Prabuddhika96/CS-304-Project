package com.project.bloomevents.Controller;

import com.project.bloomevents.Common.CommonResponse;
import com.project.bloomevents.DTO.UserDTO;
import com.project.bloomevents.DTO.UserFullDTO;
import com.project.bloomevents.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.NoSuchAlgorithmException;
import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;


    @GetMapping("/getAllUsers")
    public List<UserDTO> getUser(){
        return userService.getAllUsers();
    }

    @PostMapping("/addUser")
	public UserDTO addUser(@RequestBody UserFullDTO userdata) throws NoSuchAlgorithmException {
		return userService.addUser(userdata);
	}

    @GetMapping("/getuserbyid/{userid}")
    public UserDTO getUserById(@PathVariable int userid){
        return userService.getUserById(userid);
    }

    @PutMapping("/updateuser")
    public CommonResponse updateUser(@RequestBody UserFullDTO userdata){
        return userService.updateUser(userdata);
    }

    @DeleteMapping("/deleteuser/{userId}")
    public String deleteUser(@PathVariable int userId){
        return userService.deleteUser(userId);
    }
}
