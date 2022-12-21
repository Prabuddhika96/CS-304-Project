package com.project.bloomevents.LoginDetails;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.NoSuchAlgorithmException;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping
public class LoginDetailsController {
    @Autowired
    private LoginDetailsService service;

    @GetMapping("/getAllLoginDetails")
    public List<LoginDetails> getAllLoginDetails(){
        return service.getAllLoginDetails();
    }

    @GetMapping("/getLoginDetails/{login_id}")
    public LoginDetails getLoginDetails(@PathVariable int login_id){
        return service.getLoginDetails(login_id);
    }

    @PostMapping("/login")
    public LoginDetails login(@RequestBody LoginDetails loginData) throws NoSuchAlgorithmException {
        return service.login(loginData);
    }
}
