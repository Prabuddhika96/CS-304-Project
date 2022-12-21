package com.project.bloomevents.Event;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventService {
    @Autowired
    private EventRepository repo;

    public List<Event> getAllEvents() {
        return repo.findAll();
    }

    public Event addEvent(Event eventData) {
        return repo.save(eventData);
    }
}
