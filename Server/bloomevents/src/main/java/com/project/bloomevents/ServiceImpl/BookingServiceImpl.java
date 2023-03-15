package com.project.bloomevents.ServiceImpl;

import com.project.bloomevents.DTO.BookingDTO;
import com.project.bloomevents.Model.Booking;
import com.project.bloomevents.Repository.BookingRepository;
import com.project.bloomevents.Service.BookingService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingServiceImpl implements BookingService {
    @Autowired
    private BookingRepository bookingRepo;
    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<BookingDTO> getAllBookings() {
        try{
            List<Booking> list = bookingRepo.findAll();
            return modelMapper.map(list, new TypeToken<List<BookingDTO>>() {
            }.getType());
        }
        catch(Exception e){
            System.out.println(e.toString());
            return null;
        }
    }
}
