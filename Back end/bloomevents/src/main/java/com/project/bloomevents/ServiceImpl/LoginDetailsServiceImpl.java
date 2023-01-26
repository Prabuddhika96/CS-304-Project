package com.project.bloomevents.ServiceImpl;


import com.project.bloomevents.DTO.LoginDetailsDTO;
import com.project.bloomevents.DTO.UserFullDTO;
import com.project.bloomevents.Model.LoginDetails;
import com.project.bloomevents.Model.User;
import com.project.bloomevents.Repository.LoginDetailsRepository;
import com.project.bloomevents.Service.LoginDetailsService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.NoSuchAlgorithmException;
import java.util.List;

@Service
@RequiredArgsConstructor
public class LoginDetailsServiceImpl implements LoginDetailsService {
    @Autowired
    private LoginDetailsRepository loginrepo;
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private final PasswordEncoder passwordEncoder;

    @Override
    public boolean validateEmail(String email){
        boolean valid=false;
        try{
            LoginDetails logindetails = loginrepo.validateEmail(email);
            if(logindetails==null){
                valid=true;
            }
            else{
                valid=false;
            }
            return valid;
        }
        catch(Exception e){
            System.out.println(e.toString());
            return valid;
        }
    }

    public LoginDetailsDTO getLoginDetailById(int loginId){
        try{
            LoginDetails logindetails=loginrepo.getLoginDetailsById(loginId);

            if(logindetails == null){
                return null;
            }
            return modelMapper.map(logindetails, new TypeToken<LoginDetailsDTO>(){}.getType());
        }
        catch(Exception e){
            System.out.println(e.toString());
        }
        return null;
    }

    @Override
    public LoginDetailsDTO addLoginDetails(UserFullDTO userdata, User user) throws NoSuchAlgorithmException {
        try{
            //LoginDetailsDTO ldto = new LoginDetailsDTO(userdata.getEmail(), userdata.getPassword());
            //String hashedPW = common.encryptPassword(userdata.getPassword());

            String hashedPW= passwordEncoder.encode(userdata.getPassword());
            LoginDetails ld=new LoginDetails();
            ld.setEmail(userdata.getEmail());
            ld.setPassword(hashedPW);
            ld.setUser(user);

            LoginDetails newLd = loginrepo.save(ld);
            return modelMapper.map(ld, new TypeToken<LoginDetailsDTO>() {
            }.getType());
        }
        catch(Exception e){
            System.out.println(e.toString());
            return null;
        }
    }

    @Override
    public LoginDetailsDTO updatePassword(LoginDetailsDTO logindata) throws NoSuchAlgorithmException {
        try{
            LoginDetailsDTO logindto = getLoginDetailById(logindata.getLoginId());

            if(logindto != null) {
                String hashedPW= passwordEncoder.encode(logindata.getPassword());
                loginrepo.updatePassword(hashedPW, logindata.getLoginId());
                return getLoginDetailById(logindata.getLoginId());
            }
        }
        catch(Exception e){
            System.out.println(e.toString());
        }
        return null;
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
