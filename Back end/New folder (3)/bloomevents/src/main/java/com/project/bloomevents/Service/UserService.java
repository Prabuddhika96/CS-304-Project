package com.project.bloomevents.Service;

import com.project.bloomevents.Common.CommonResponse;
import com.project.bloomevents.DTO.UserDTO;
import com.project.bloomevents.DTO.UserFullDTO;

import java.security.NoSuchAlgorithmException;
import java.util.List;

public interface UserService {

    List<UserDTO> getAllUsers();
    UserDTO addUser(UserFullDTO userdata) throws NoSuchAlgorithmException;
    UserDTO getUserById(int userid);
    CommonResponse updateUser(UserFullDTO userdata);
    String deleteUser(int userId);
}
