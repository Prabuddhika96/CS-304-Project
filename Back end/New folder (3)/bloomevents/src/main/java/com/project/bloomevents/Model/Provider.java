package com.project.bloomevents.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "provider")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Provider {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "providerId")
    private int providerId;

    @Column(name = "businessName")
    private String businessName;

    @Column(name = "mobile")
    private String mobile;

    @Column(name = "facebook")
    private String facebook;

    @Column(name = "instagram")
    private String instagram;

    @Column(name = "web")
    private String web;

    @Column(name = "rating")
    private double rating;

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "userId", referencedColumnName = "userId")
    private User user;
}