package com.project.bloomevents.Event;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
//import com.project.bloomevents.Booking.Booking;
import com.project.bloomevents.User.User;
import jakarta.persistence.*;

import java.util.Date;
import java.util.List;

@Entity
@Table(name="event")
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="event_id")
    private int event_id;

    @Column(name="event_name")
    private String event_name;

    @Column(name="event_date")
    private Date event_date;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name="user_id",referencedColumnName = "user_id", nullable = false)
    @JsonIgnoreProperties("events")
//    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private User user;

//    @OneToMany(mappedBy = "event", cascade = CascadeType.MERGE)
//    @JsonIgnoreProperties("event")
////    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
//    private List<Booking> bookingList;


    //getters and setters

    public int getEvent_id() {
        return event_id;
    }

    public void setEvent_id(int event_id) {
        this.event_id = event_id;
    }

    public String getEvent_name() {
        return event_name;
    }

    public void setEvent_name(String event_name) {
        this.event_name = event_name;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

//    public List<Booking> getBookingList() {
//        return bookingList;
//    }
//
//    public void setBookingList(List<Booking> bookingList) {
//        this.bookingList = bookingList;
//    }
}
