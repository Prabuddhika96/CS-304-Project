package com.project.bloomevents.Controller;


import com.project.bloomevents.DTO.LoginDetailsDTO;
import com.project.bloomevents.DTO.UserFullDTO;
import com.project.bloomevents.Model.User;
import com.project.bloomevents.Service.LoginDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.NoSuchAlgorithmException;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/logindetails")
public class LoginController {
    @Autowired
    private LoginDetailsService loginservice;

    @GetMapping("/getAllLoginDetails")
    public ResponseEntity<?> getAllLoginDetails(){
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        List<LoginDetailsDTO> loginList=loginservice.getAllLoginDetails();
        if (!loginList.isEmpty()) {
            map.put("status", 1);
            map.put("data", loginList);
            return new ResponseEntity<>(map, HttpStatus.OK);
        } else {
            map.clear();
            map.put("status", 0);
            map.put("message", "Login detail list is not found");
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/addlogindetails")
    public ResponseEntity<?> addLoginDetails(@RequestBody UserFullDTO userdata,@RequestBody User user) throws NoSuchAlgorithmException{
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        LoginDetailsDTO loginDetails = loginservice.addLoginDetails(userdata, user);
        if (loginDetails != null) {
            map.put("status", 1);
            map.put("data", loginDetails);
            return new ResponseEntity<>(map, HttpStatus.OK);
        } else {
            map.clear();
            map.put("status", 0);
            map.put("message", "Login details is not found");
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/updatepassword")
    public ResponseEntity<?> updatePassword(@RequestBody LoginDetailsDTO logindata) throws NoSuchAlgorithmException{
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        LoginDetailsDTO loginDetails = loginservice.updatePassword(logindata);

        if (loginDetails != null) {
            map.put("status", 1);
            map.put("data", loginDetails);
            return new ResponseEntity<>(map, HttpStatus.OK);
        } else {
            map.clear();
            map.put("status", 0);
            map.put("message", "Update password is failed");
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/validateemail")
    public ResponseEntity<?> validateEmail(@RequestBody String email){
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        boolean valid = loginservice.validateEmail(email);

        if (valid) {
            map.put("status", 1);
            map.put("message", "Email is available");
            return new ResponseEntity<>(map, HttpStatus.OK);
        } else {
            map.clear();
            map.put("status", 0);
            map.put("message", "Email is not available");
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }
    }
}
