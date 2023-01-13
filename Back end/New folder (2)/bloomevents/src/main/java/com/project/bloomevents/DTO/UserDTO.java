package com.project.bloomevents.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    private int userId;
    private String firstName;
    private String lastName;
    private int mobile;
    private String district;
    private Timestamp lastLogin;
    private int isAdmin;
}
