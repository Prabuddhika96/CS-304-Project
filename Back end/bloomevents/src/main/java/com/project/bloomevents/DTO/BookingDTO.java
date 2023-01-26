package com.project.bloomevents.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;
import java.sql.Timestamp;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class BookingDTO {
    private int bookingId;
    private Date bookingDate;
    private Timestamp bookingTime;
    private int eventId;
    private int paymentId;
}
