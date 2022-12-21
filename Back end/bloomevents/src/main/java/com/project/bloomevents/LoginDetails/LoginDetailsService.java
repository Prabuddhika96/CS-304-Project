package com.project.bloomevents.LoginDetails;

import com.project.bloomevents.User.User;
import com.project.bloomevents.User.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.sql.Timestamp;
import java.time.Instant;
import java.util.List;

@Service
public class LoginDetailsService {
    @Autowired
    private LoginDetailsRepository repo;
    @Autowired
    private UserService userService;

    public List<LoginDetails> getAllLoginDetails() {
        return repo.findAll();
    }

    public LoginDetails getLoginDetails(int loginId) {
        return repo.getLoginDetails(loginId);
    }

    public LoginDetails validateEmail(String email){
        return repo.validateEmail(email);
    }

    public LoginDetails login(LoginDetails loginData) throws NoSuchAlgorithmException {
        MessageDigest md = MessageDigest.getInstance("MD5");
        byte[] pwDigest = md.digest(loginData.getPassword().getBytes());

        BigInteger hashed = new BigInteger(1, pwDigest);
        String hashedPW = hashed.toString(16);

        LoginDetails details = repo.login(loginData.getEmail(), hashedPW);
//        return details;

        if(details != null){
            Timestamp instant= Timestamp.from(Instant.now());
            details.getUser().setLast_login(instant);
            userService.updateLastLogin(details.getUser(), instant);
            return details;
        }
        else{
            return null;
        }
    }

    public void addLoginDetails(LoginDetails userdata) {
        repo.save(userdata);
    }
}
