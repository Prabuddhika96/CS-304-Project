package com.project.bloomevents.Controller;

import com.project.bloomevents.DTO.UserDTO;
import com.project.bloomevents.DTO.UserFullDTO;
import com.project.bloomevents.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.NoSuchAlgorithmException;
import java.util.List;

@RestController
@RequestMapping
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
}
