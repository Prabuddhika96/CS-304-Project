package com.project.bloomevents.Model;

import com.project.bloomevents.Enums.Role;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;
import java.util.List;

@Entity
@Table(name="User")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="userId")
    private int userId;

    @Column(name="firstName")
    private String firstName;

    @Column(name="lastName")
    private String lastName;

    @Column(name="mobile")
    private int mobile;

    @Column(name="district")
    private String district;

//    @JsonIgnore
//    @ManyToOne(cascade = CascadeType.MERGE)
//    @JoinColumn(name = "districtId", referencedColumnName = "districtId")
//    private District district;

    @Column(name="lastLogin")
    private Timestamp lastLogin;

    @Enumerated(EnumType.STRING)
    @Column(name="role")
    private Role role;

    @OneToOne(mappedBy = "user",cascade = CascadeType.REMOVE)
    private LoginDetails loginDetails;

    @OneToMany(mappedBy = "user", cascade = CascadeType.REMOVE)
    private List<Review> reviews;

    @OneToMany(mappedBy = "user", cascade = CascadeType.REMOVE)
    private List<Event> events;

    @OneToMany(mappedBy = "user", cascade = CascadeType.REMOVE)
    private List<Provider> services;

    @OneToMany(mappedBy = "user", cascade = CascadeType.REMOVE)
    private List<Payment> payment;
}
