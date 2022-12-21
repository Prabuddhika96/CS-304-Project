package com.project.bloomevents.Booking;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Integer> {
    @Query(value = "SELECT * FROM bloomevents.booking WHERE event_id=?1", nativeQuery = true)
    List<Booking> bookingsByEventId(int eventId);
}
