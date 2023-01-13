package com.project.bloomevents.Controller;


import com.project.bloomevents.DTO.LoginDetailsDTO;
import com.project.bloomevents.DTO.UserFullDTO;
import com.project.bloomevents.Service.LoginDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.NoSuchAlgorithmException;

@RestController
@CrossOrigin
@RequestMapping
public class LoginController {
    @Autowired
    private LoginDetailsService loginservice;

    @PostMapping("addlogindetails")
    public LoginDetailsDTO addLoginDetails(@RequestBody UserFullDTO userdata) throws NoSuchAlgorithmException {
        return loginservice.addLoginDetails(userdata);
    }
}
