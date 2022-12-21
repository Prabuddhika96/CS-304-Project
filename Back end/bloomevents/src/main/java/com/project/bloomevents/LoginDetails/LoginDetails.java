package com.project.bloomevents.LoginDetails;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.project.bloomevents.User.User;
import jakarta.persistence.*;

@Entity
@Table(name = "login_details")
public class LoginDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "login_id")
    private int login_id;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "user_id")
//    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private User user;

    // getters and setters


    public int getLogin_id() {
        return login_id;
    }

    public void setLogin_id(int login_id) {
        this.login_id = login_id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
