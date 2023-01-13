package com.project.bloomevents.Service;

import com.project.bloomevents.DTO.UserDTO;

import java.util.List;

public interface UserService {

    List<UserDTO> getAllUsers();

    UserDTO addUser(UserDTO userdata);
}
