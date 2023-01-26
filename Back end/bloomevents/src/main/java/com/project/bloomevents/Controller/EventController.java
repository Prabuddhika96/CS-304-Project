package com.project.bloomevents.Controller;

import com.project.bloomevents.DTO.EventDTO;
import com.project.bloomevents.Service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/event")
public class EventController {
    @Autowired
    private EventService eventService;

    @GetMapping("/getallevents")
    public ResponseEntity<?> getAllEvents() {
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        List<EventDTO> eventList = eventService.getAllEvents();
        if (!eventList.isEmpty()) {
            map.put("status", 1);
            map.put("data", eventList);
            return new ResponseEntity<>(map, HttpStatus.OK);
        } else {
            map.clear();
            map.put("status", 0);
            map.put("message", "Event list is not found");
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/addevent")
    public ResponseEntity<?> addEvent(@RequestBody EventDTO eventdata) {
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        EventDTO event = eventService.addEvent(eventdata);
        if (event != null) {
            map.put("status", 1);
            map.put("data", event);
            return new ResponseEntity<>(map, HttpStatus.OK);
        } else {
            map.clear();
            map.put("status", 0);
            map.put("message", "Event is not found");
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/deleteevent/{eventId}")
    public ResponseEntity<?> deleteEvent(@PathVariable int eventId) {
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        boolean deleted = eventService.deleteEvent(eventId);
        if (deleted) {
            map.put("status", 1);
            map.put("data", deleted);
            return new ResponseEntity<>(map, HttpStatus.OK);
        } else {
            map.clear();
            map.put("status", 0);
            map.put("message", "Event is not found");
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }
    }
}
