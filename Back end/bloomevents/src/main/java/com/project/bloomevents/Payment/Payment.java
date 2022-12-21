package com.project.bloomevents.Payment;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.project.bloomevents.Booking.Booking;
import com.project.bloomevents.Event.Event;
import jakarta.persistence.*;

import java.sql.Timestamp;
import java.util.List;

@Entity
@Table(name = "payment")
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "payment_id")
    private int payment_id;

    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name="event_id", referencedColumnName = "event_id")
//    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Event event;

    @Column(name = "amount")
    private double amount;

    @Column(name = "timestamp")
    private Timestamp timestamp;

    @OneToMany(mappedBy = "payment", cascade = CascadeType.MERGE)
    @JsonIgnoreProperties("payment")
//    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private List<Booking> booking;

    // getters and setters

    public int getPayment_id() {
        return payment_id;
    }

    public void setPayment_id(int payment_id) {
        this.payment_id = payment_id;
    }

    public Event getEvent() {
        return event;
    }

    public void setEvent(Event event) {
        this.event = event;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public Timestamp getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Timestamp timestamp) {
        this.timestamp = timestamp;
    }
}
