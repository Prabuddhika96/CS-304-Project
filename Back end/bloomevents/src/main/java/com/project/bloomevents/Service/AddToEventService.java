package com.project.bloomevents.Service;

import com.project.bloomevents.DTO.AddToEventDTO;

import java.util.List;

public interface AddToEventService {
    List<AddToEventDTO> getAllAddToEvent();

    AddToEventDTO addPackageToEvent(AddToEventDTO data);

    int getPackageCountByEventId(int eventId);
}
