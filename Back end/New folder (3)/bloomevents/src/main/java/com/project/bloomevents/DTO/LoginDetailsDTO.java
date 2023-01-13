package com.project.bloomevents.DTO;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class LoginDetailsDTO {
    private int loginId;
    private String email;
    private String password;

    public LoginDetailsDTO(String email, String password) {
        this.email = email;
        this.password = password;
    }
}
