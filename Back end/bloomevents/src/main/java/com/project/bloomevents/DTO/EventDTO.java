package com.project.bloomevents.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;
import java.sql.Time;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class EventDTO {
    private int eventId;
    private String eventName;
    private Date eventDate;
    private Time eventTime;
    private int userId;
}
