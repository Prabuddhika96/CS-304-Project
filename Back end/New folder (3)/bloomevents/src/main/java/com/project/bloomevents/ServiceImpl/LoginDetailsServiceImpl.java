package com.project.bloomevents.ServiceImpl;

import com.project.bloomevents.DTO.LoginDetailsDTO;
import com.project.bloomevents.DTO.UserFullDTO;
import com.project.bloomevents.Model.LoginDetails;
import com.project.bloomevents.Repository.LoginDetailsRepository;
import com.project.bloomevents.Service.LoginDetailsService;
import org.jetbrains.annotations.NotNull;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

@Service
public class LoginDetailsServiceImpl implements LoginDetailsService {
    @Autowired
    private LoginDetailsRepository loginrepo;
    @Autowired
    private ModelMapper modelMapper;

    public LoginDetailsDTO addLoginDetails(UserFullDTO userdata) throws NoSuchAlgorithmException {
        LoginDetailsDTO ldto=new LoginDetailsDTO(userdata.getEmail(), userdata.getPassword());

        MessageDigest md = MessageDigest.getInstance("MD5");
        byte[] pwDigest = md.digest(ldto.getPassword().getBytes());
        BigInteger hashed = new BigInteger(1, pwDigest);
        String hashedPW = hashed.toString(16);

        ldto.setPassword(hashedPW);

        LoginDetails ld =loginrepo.save(modelMapper.map(ldto, LoginDetails.class));
        return modelMapper.map(ld, new TypeToken<LoginDetailsDTO>(){}.getType());
    }
}
