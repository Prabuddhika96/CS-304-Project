package com.project.bloomevents.Service;

import com.project.bloomevents.DTO.UserDTO;
import com.project.bloomevents.DTO.UserFullDTO;

import java.util.List;

public interface UserService {

    List<UserDTO> getAllUsers();

    UserFullDTO addUser(UserFullDTO userdata);
}
