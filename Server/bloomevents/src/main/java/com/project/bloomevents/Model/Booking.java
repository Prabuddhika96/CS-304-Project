package com.project.bloomevents.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;
import java.sql.Timestamp;

@Entity
@Table(name = "booking")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bookingId")
    private int bookingId;
    @Column(name = "bookingDate")
    private Date bookingDate;
    @Column(name = "bookingTime")
    private Timestamp bookingTime;
    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "eventId", referencedColumnName = "eventId")
    private Event event;
    @OneToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "paymentId", referencedColumnName = "paymentId")
    private Payment payment;
}
