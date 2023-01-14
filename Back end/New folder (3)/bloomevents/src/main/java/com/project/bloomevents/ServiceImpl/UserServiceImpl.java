package com.project.bloomevents.ServiceImpl;

import com.project.bloomevents.Common.CommonResponse;
import com.project.bloomevents.DTO.LoginDetailsDTO;
import com.project.bloomevents.DTO.UserDTO;
import com.project.bloomevents.DTO.UserFullDTO;
import com.project.bloomevents.Model.LoginDetails;
import com.project.bloomevents.Model.User;
import com.project.bloomevents.Repository.UserRepository;
import com.project.bloomevents.Service.UserService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.NoSuchAlgorithmException;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepo;
    @Autowired
    private LoginDetailsServiceImpl loginServiceImpl;
    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<UserDTO> getAllUsers() {
        try{
            List<User> userList = userRepo.findAll();
            return modelMapper.map(userList, new TypeToken<List<UserDTO>>() {
            }.getType());
        }
        catch(Exception e){
            System.out.println(e.toString());
            return null;
        }
    }

    @Override
    public UserDTO addUser(UserFullDTO userdata) throws NoSuchAlgorithmException {
        try{
            boolean valid=loginServiceImpl.validateEmail(userdata.getEmail()).isSuccess();

            if(valid){
                LoginDetailsDTO ld = loginServiceImpl.addLoginDetails(userdata);
                LoginDetails l = modelMapper.map(ld, LoginDetails.class);

                User u = modelMapper.map(userdata, User.class);
                u.setLoginDetails(l);
                User us = userRepo.save(u);
                return modelMapper.map(us, new TypeToken<UserDTO>() {
                }.getType());
            }
            else{
                return null;
            }
        }
        catch(Exception e){
            System.out.println(e.toString());
            return null;
        }
    }

    @Override
    public UserDTO getUserById(int userid) {
        try{
            User user = userRepo.getUserbyId(userid);

            if(user==null){
                return null;
            }
            return modelMapper.map(user, new TypeToken<UserDTO>() {
            }.getType());
        }
        catch(Exception e){
            System.out.println(e.toString());
            return null;
        }
    }

    @Override
    public CommonResponse updateUser(UserFullDTO userdata) {
        try{
            UserDTO validUser = getUserById(userdata.getUserId());

            if(validUser != null){
                userRepo.updateUser(userdata.getFirstName(), userdata.getLastName(), userdata.getMobile(), userdata.getDistrict(), userdata.getUserId());
                return new CommonResponse(true, "Updated user id : "+validUser.getUserId());
            }
            else{
                return new CommonResponse(false, "Can not find user with user id : "+userdata.getUserId());
            }

        }
        catch(Exception e){
            System.out.println(e.toString());
            return null;
        }
    }

    @Override
    public String deleteUser(int userId) {
        try{
            User user = modelMapper.map(getUserById(userId), User.class);
            userRepo.deleteById(user.getUserId());
            return "deleted";
        }
        catch(Exception e){
            System.out.println(e.toString());
            return null;
        }
    }
}
