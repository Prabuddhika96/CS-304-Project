package com.project.bloomevents.ServiceImpl;

import com.project.bloomevents.DTO.LoginDetailsDTO;
import com.project.bloomevents.DTO.UserFullDTO;
import com.project.bloomevents.Model.LoginDetails;
import com.project.bloomevents.Repository.LoginDetailsRepository;
import com.project.bloomevents.Service.LoginDetailsService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.List;

@Service
public class LoginDetailsServiceImpl implements LoginDetailsService {
    @Autowired
    private LoginDetailsRepository loginrepo;
    @Autowired
    private ModelMapper modelMapper;

    public String encryptPassword(String password) throws NoSuchAlgorithmException{
        MessageDigest md = MessageDigest.getInstance("MD5");
        byte[] pwDigest = md.digest(password.getBytes());
        BigInteger hashed = new BigInteger(1, pwDigest);
        return hashed.toString(16);
    }

    public LoginDetailsDTO addLoginDetails(UserFullDTO userdata) throws NoSuchAlgorithmException {
        try{
            LoginDetailsDTO ldto = new LoginDetailsDTO(userdata.getEmail(), userdata.getPassword());
            String hashedPW = encryptPassword(ldto.getPassword());

            ldto.setPassword(hashedPW);

            LoginDetails ld = loginrepo.save(modelMapper.map(ldto, LoginDetails.class));
            return modelMapper.map(ld, new TypeToken<LoginDetailsDTO>() {
            }.getType());
        }
        catch(Exception e){
            System.out.println(e.toString());
            return null;
        }
    }

    @Override
    public boolean updatePassword(LoginDetailsDTO logindata) throws NoSuchAlgorithmException {
        boolean success=false;
        try{
            String hashedPW = encryptPassword(logindata.getPassword());
            int i = loginrepo.updatePassword(hashedPW, logindata.getLoginId());
            if (i == 1) {
                success= true;
            }
            else{
                success = false;
            }
        }
        catch(Exception e){
            System.out.println(e.toString());
        }
        return success;
    }

    @Override
    public List<LoginDetailsDTO> getAllLoginDetails() {
        try{
            List<LoginDetails> list = loginrepo.findAll();
            return modelMapper.map(list, new TypeToken<List<LoginDetailsDTO>>() {
            }.getType());
        }
        catch(Exception e){
            System.out.println(e.toString());
            return null;
        }
    }
}
