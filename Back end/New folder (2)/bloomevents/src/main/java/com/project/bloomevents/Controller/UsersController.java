package com.project.bloomevents.Controller;

import com.project.bloomevents.DTO.UserDTO;
import com.project.bloomevents.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping
public class UsersController {
    @Autowired
    private UserService userService;
    @GetMapping("/getAllUsers")
    public List<UserDTO> getUser(){
        return userService.getAllUsers();
    }

    @PostMapping("/addUser")
	public UserDTO addUser(@RequestBody UserDTO userdata) {
		return userService.addUser(userdata);
	}
}
