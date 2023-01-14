package com.project.bloomevents.Service;

import com.project.bloomevents.Common.CommonResponse;
import com.project.bloomevents.DTO.LoginDetailsDTO;
import com.project.bloomevents.DTO.UserFullDTO;

import java.security.NoSuchAlgorithmException;
import java.util.List;

public interface LoginDetailsService {

    LoginDetailsDTO addLoginDetails(UserFullDTO userdata) throws NoSuchAlgorithmException;
    boolean updatePassword(LoginDetailsDTO logindata) throws NoSuchAlgorithmException;
    List<LoginDetailsDTO> getAllLoginDetails();

    CommonResponse validateEmail(String email);
}
