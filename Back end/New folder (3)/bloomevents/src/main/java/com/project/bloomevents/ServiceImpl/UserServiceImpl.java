package com.project.bloomevents.ServiceImpl;

import com.project.bloomevents.DTO.LoginDetailsDTO;
import com.project.bloomevents.DTO.UserDTO;
import com.project.bloomevents.DTO.UserFullDTO;
import com.project.bloomevents.Model.LoginDetails;
import com.project.bloomevents.Model.User;
import com.project.bloomevents.Repository.LoginDetailsRepository;
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
        List<User>userList = userRepo.findAll();
        return modelMapper.map(userList, new TypeToken<List<UserDTO>>(){}.getType());
    }

    @Override
    public UserDTO addUser(UserFullDTO userdata) throws NoSuchAlgorithmException {
        LoginDetailsDTO ld= loginServiceImpl.addLoginDetails(userdata);
        LoginDetails l=modelMapper.map(ld, LoginDetails.class);

        User u=modelMapper.map(userdata, User.class);
        u.setLoginDetails(l);
        User us=userRepo.save(u);
        return modelMapper.map(us, new TypeToken<UserDTO>(){}.getType());
//        return null;
    }
}
