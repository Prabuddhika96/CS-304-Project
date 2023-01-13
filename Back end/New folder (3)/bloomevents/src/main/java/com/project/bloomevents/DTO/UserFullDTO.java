package com.project.bloomevents.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UserFullDTO {
    private int userId;
    private String firstName;
    private String lastName;
    private int mobile;
    private String district;
    private Timestamp lastLogin;
    private int isAdmin;
    private int logiId;
    private String email;
    private String password;

}
