package com.project.bloomevents.Controller;


import com.project.bloomevents.DTO.LoginDetailsDTO;
import com.project.bloomevents.DTO.UserFullDTO;
import com.project.bloomevents.Service.LoginDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.NoSuchAlgorithmException;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/logindetails")
public class LoginController {
    @Autowired
    private LoginDetailsService loginservice;

    @GetMapping("/getAllLoginDetails")
    public List<LoginDetailsDTO> getAllLoginDetails(){
        return loginservice.getAllLoginDetails();
    }

    @PostMapping("/addlogindetails")
    public LoginDetailsDTO addLoginDetails(@RequestBody UserFullDTO userdata) throws NoSuchAlgorithmException {
        return loginservice.addLoginDetails(userdata);
    }

    @PutMapping("/updatepassword")
    public boolean updatePassword(@RequestBody LoginDetailsDTO logindata) throws NoSuchAlgorithmException {
        return loginservice.updatePassword(logindata);
    }
}
