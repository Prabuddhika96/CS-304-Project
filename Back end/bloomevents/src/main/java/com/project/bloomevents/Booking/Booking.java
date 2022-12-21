package com.project.bloomevents.Booking;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.project.bloomevents.Event.Event;
import com.project.bloomevents.Package.Packages;
import com.project.bloomevents.Payment.Payment;
import com.project.bloomevents.User.User;
import jakarta.persistence.*;

import java.sql.Timestamp;

@Entity
@Table(name="booking")
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="booking_id")
    private int booking_id;

    @Column(name="timestamp")
    private Timestamp timestamp;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    @JsonIgnoreProperties("bookings")
//    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private User user;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "event_id", referencedColumnName = "event_id")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
//    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Event event;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "package_id", referencedColumnName = "package_id")
    @JsonIgnoreProperties("booking")
//    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Packages packages;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "payment_id", referencedColumnName = "payment_id")
    @JsonIgnoreProperties("booking")
//    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Payment payment;

    //getters and setters
    public int getBooking_id() {
        return booking_id;
    }

    public void setBooking_id(int booking_id) {
        this.booking_id = booking_id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Timestamp getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Timestamp timestamp) {
        this.timestamp = timestamp;
    }

    public Event getEvent() {
        return event;
    }

    public void setEvent(Event event) {
        this.event = event;
    }

    public Packages getPackages() {
        return packages;
    }

    public void setPackages(Packages packages) {
        this.packages = packages;
    }

    public Payment getPayment() {
        return payment;
    }

    public void setPayment(Payment payment) {
        this.payment = payment;
    }
}
