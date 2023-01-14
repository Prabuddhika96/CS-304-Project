package com.project.bloomevents.Controller;

import com.project.bloomevents.DTO.UserDTO;
import com.project.bloomevents.DTO.UserFullDTO;
import com.project.bloomevents.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.NoSuchAlgorithmException;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;


    @GetMapping("/getAllUsers")
    public ResponseEntity<?> getAllUsers(){
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        List<UserDTO> userList= userService.getAllUsers();
        if (!userList.isEmpty()) {
            map.put("status", 1);
            map.put("data", userList);
            return new ResponseEntity<>(map, HttpStatus.OK);
        } else {
            map.clear();
            map.put("status", 0);
            map.put("message", "No users");
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/addUser")
    public ResponseEntity<?>  addUser(@RequestBody UserFullDTO userdata) throws NoSuchAlgorithmException {
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        UserDTO user = userService.addUser(userdata);
        if (user != null) {
            map.put("status", 1);
            map.put("data", user);
            return new ResponseEntity<>(map, HttpStatus.OK);
        } else {
            map.clear();
            map.put("status", 0);
            map.put("message", "User not added");
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/getuserbyid/{userid}")
    public ResponseEntity<?>  getUserById(@PathVariable int userid) {
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        UserDTO user = userService.getUserById(userid);
        if (user != null) {
            map.put("status", 1);
            map.put("data", user);
            return new ResponseEntity<>(map, HttpStatus.OK);
        } else {
            map.clear();
            map.put("status", 0);
            map.put("message", "User not found");
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/updateuser")
    public ResponseEntity<?>  updateUser(@RequestBody UserFullDTO userdata) {
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        UserDTO user = userService.updateUser(userdata);
        if (user != null) {
            map.put("status", 1);
            map.put("data", user);
            return new ResponseEntity<>(map, HttpStatus.OK);
        } else {
            map.clear();
            map.put("status", 0);
            map.put("message", "User not found");
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/deleteuser/{userId}")
    public ResponseEntity<?>  deleteUser(@PathVariable int userId) {
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        boolean deleted = userService.deleteUser(userId);;
        if (deleted) {
            map.put("status", 1);
            map.put("data", deleted);
            return new ResponseEntity<>(map, HttpStatus.OK);
        } else {
            map.clear();
            map.put("status", 0);
            map.put("message", "User not deleted");
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }
    }
}
