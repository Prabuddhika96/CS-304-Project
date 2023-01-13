package com.project.bloomevents.DTO;

import jakarta.persistence.Id;
import lombok.*;

import java.sql.Timestamp;

@NoArgsConstructor
@AllArgsConstructor
@Data
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
