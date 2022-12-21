package com.project.bloomevents.Booking;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.Instant;
import java.util.List;

@Service
public class BookingService {
    @Autowired
    private BookingRepository repo;

    public List<Booking> getAllBookings() {
        return repo.findAll();
    }

    public Booking addBooking(Booking bookingData) {
        Timestamp instant= Timestamp.from(Instant.now());
        bookingData.setTimestamp(instant);
        return repo.save(bookingData);
    }

    public List<Booking> bookingsByEventId(int eventId) {
//        return repo.bookingsByEventId(eventId);
        return repo.bookingsByEventId(eventId);
    }
}
