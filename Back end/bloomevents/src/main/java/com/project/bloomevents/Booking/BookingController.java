package com.project.bloomevents.Booking;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin@RequestMapping
public class BookingController {
    @Autowired
    private BookingService service;

    @GetMapping("/getAllBookings")
    public List<Booking> getAllBookings(){
        return service.getAllBookings();
    }

    @GetMapping("/bookingsByEventId/{eventId}")
    public List<Booking> bookingsByEventId(@PathVariable int eventId){
        return service.bookingsByEventId(eventId);
    }

    @PostMapping("/addBooking")
    public Booking addBooking(@RequestBody Booking bookingData){
        return service.addBooking(bookingData);
    }


}
