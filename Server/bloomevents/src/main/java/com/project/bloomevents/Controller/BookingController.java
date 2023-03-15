package com.project.bloomevents.Controller;

import com.project.bloomevents.DTO.BookingDTO;
import com.project.bloomevents.Service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/bookings")
public class BookingController {
    @Autowired
    private BookingService bookingService;

    @GetMapping("/getallbookings")
    public ResponseEntity<?> getAllBookings(){
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        List<BookingDTO> bookingsList = bookingService.getAllBookings();
        if (!bookingsList.isEmpty()) {
            map.put("status", 1);
            map.put("data", bookingsList);
            return new ResponseEntity<>(map, HttpStatus.OK);
        } else {
            map.clear();
            map.put("status", 0);
            map.put("message", "Booking list is not found");
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
    }
}
