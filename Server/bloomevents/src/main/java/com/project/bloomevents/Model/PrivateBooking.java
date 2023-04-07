package com.project.bloomevents.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "private_bookings")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PrivateBookings {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bookingId")
    private int privateBookingId;
    @Column(name = "bookingDate")
    private String bookingDate;
    @Column(name = "bookingTime")
    private String bookingTime;
}
