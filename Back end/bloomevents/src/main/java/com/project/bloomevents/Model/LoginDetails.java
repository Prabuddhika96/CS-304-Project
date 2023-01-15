package com.project.bloomevents.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="LoginDetails")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LoginDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="loginId")
    private int loginId;

    @Column(name="email")
    private String email;

    @Column(name="password")
    private String password;

    @OneToOne(mappedBy = "loginDetails")
    private User user;
}
