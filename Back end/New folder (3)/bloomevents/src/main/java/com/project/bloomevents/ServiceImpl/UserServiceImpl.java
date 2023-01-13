package com.project.bloomevents.ServiceImpl;

import com.project.bloomevents.DTO.UserDTO;
import com.project.bloomevents.DTO.UserFullDTO;
import com.project.bloomevents.Model.User;
import com.project.bloomevents.Repository.UserRepository;
import com.project.bloomevents.Service.UserService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepo;
    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<UserDTO> getAllUsers() {
        List<User>userList = userRepo.findAll();
        return modelMapper.map(userList, new TypeToken<List<UserDTO>>(){}.getType());
    }

    @Override
    public UserFullDTO addUser(UserFullDTO userdata) {
        userRepo.save(modelMapper.map(userdata, User.class));
        return userdata;
    }
}
