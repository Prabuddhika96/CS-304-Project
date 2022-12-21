package com.project.bloomevents.Event;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping
public class EventController {
    @Autowired
    private EventService service;

    @GetMapping("/getAllEvents")
    private List<Event> getAllEvents(){
        return service.getAllEvents();
    }

    @PostMapping("/addEvent")
    public Event addEvent(@RequestBody Event eventData){
        return service.addEvent(eventData);
    }
}
