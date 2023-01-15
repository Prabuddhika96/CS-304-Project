package com.project.bloomevents.Service;

import com.project.bloomevents.DTO.EventDTO;

import java.util.List;

public interface EventService {
    List<EventDTO> getAllEvents();
    EventDTO addEvent(EventDTO eventdata);

    boolean deleteEvent(int eventId);
}
