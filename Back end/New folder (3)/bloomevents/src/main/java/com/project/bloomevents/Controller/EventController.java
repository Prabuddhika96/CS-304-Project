package com.project.bloomevents.Controller;

import com.project.bloomevents.DTO.EventDTO;
import com.project.bloomevents.Service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/event")
public class EventController {
    @Autowired
    private EventService eventService;

    @GetMapping("/getallevents")
    public List<EventDTO> getAllEvents(){
        return eventService.getAllEvents();
    }

    @PostMapping("/addevent")
    public EventDTO addEvent(@RequestBody EventDTO eventdata){
        return eventService.addEvent(eventdata);
    }
}
