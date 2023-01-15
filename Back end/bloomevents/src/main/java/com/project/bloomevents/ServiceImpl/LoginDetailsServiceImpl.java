package com.project.bloomevents.ServiceImpl;

import com.project.bloomevents.Common.Common;
import com.project.bloomevents.DTO.LoginDetailsDTO;
import com.project.bloomevents.DTO.UserFullDTO;
import com.project.bloomevents.Model.LoginDetails;
import com.project.bloomevents.Repository.LoginDetailsRepository;
import com.project.bloomevents.Service.LoginDetailsService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.NoSuchAlgorithmException;
import java.util.List;

@Service
public class LoginDetailsServiceImpl implements LoginDetailsService {
    @Autowired
    private LoginDetailsRepository loginrepo;
    @Autowired
    private ModelMapper modelMapper;
    private Common common=new Common();

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

    public LoginDetailsDTO addLoginDetails(UserFullDTO userdata) throws NoSuchAlgorithmException {
        try{
            LoginDetailsDTO ldto = new LoginDetailsDTO(userdata.getEmail(), userdata.getPassword());
            String hashedPW = common.encryptPassword(ldto.getPassword());

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
    public LoginDetailsDTO updatePassword(LoginDetailsDTO logindata) throws NoSuchAlgorithmException {
        try{
            LoginDetailsDTO logindto = getLoginDetailById(logindata.getLoginId());

            if(logindto != null) {
                String hashedPW = common.encryptPassword(logindata.getPassword());
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
