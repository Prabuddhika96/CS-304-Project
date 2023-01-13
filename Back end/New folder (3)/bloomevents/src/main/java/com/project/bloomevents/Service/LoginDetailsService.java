package com.project.bloomevents.Service;

import com.project.bloomevents.DTO.LoginDetailsDTO;
import com.project.bloomevents.DTO.UserFullDTO;

import java.security.NoSuchAlgorithmException;

public interface LoginDetailsService {

    LoginDetailsDTO addLoginDetails(UserFullDTO userdata) throws NoSuchAlgorithmException;
}
