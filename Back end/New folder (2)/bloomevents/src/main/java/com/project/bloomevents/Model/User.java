package com.project.bloomevents.Model;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Timestamp;

@Entity
@Table(name="User")
@Getter
@Setter
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="user_id")
    private int userId;

    @Column(name="first_name")
    private String firstName;

    @Column(name="last_name")
    private String lastName;

    @Column(name="mobile")
    private int mobile;

    @Column(name="district")
    private String district;

    @Column(name="last_login")
    private Timestamp lastLogin;

    @Column(name="is_admin")
    private int isAdmin;
}
