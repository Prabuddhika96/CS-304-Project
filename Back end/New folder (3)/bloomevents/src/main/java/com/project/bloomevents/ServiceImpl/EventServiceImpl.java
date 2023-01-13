package com.project.bloomevents.ServiceImpl;

import com.project.bloomevents.DTO.EventDTO;
import com.project.bloomevents.Model.Event;
import com.project.bloomevents.Repository.EventRepository;
import com.project.bloomevents.Service.EventService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventServiceImpl implements EventService {
    @Autowired
    private EventRepository eventRepo;
    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<EventDTO> getAllEvents() {
        List<Event> list = eventRepo.findAll();
        return modelMapper.map(list, new TypeToken<List<EventDTO>>(){}.getType());
    }

    @Override
    public EventDTO addEvent(EventDTO eventdata) {
        Event evnt=modelMapper.map(eventdata,Event.class);
        Event e=eventRepo.save(evnt);
        return modelMapper.map(e,new TypeToken<EventDTO>(){}.getType());
    }
}
