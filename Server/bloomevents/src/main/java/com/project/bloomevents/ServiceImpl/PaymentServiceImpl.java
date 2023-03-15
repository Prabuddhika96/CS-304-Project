package com.project.bloomevents.ServiceImpl;

import com.project.bloomevents.DTO.PaymentDTO;
import com.project.bloomevents.Model.Payment;
import com.project.bloomevents.Repository.PaymentRepository;
import com.project.bloomevents.Service.PaymentService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentServiceImpl implements PaymentService {
    @Autowired
    private PaymentRepository paymentRepo;
    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<PaymentDTO> getAllPayments() {
        try{
            List<Payment> list = paymentRepo.findAll();
            return modelMapper.map(list, new TypeToken<List<PaymentDTO>>() {
            }.getType());
        }
        catch(Exception e){
            System.out.println(e.toString());
            return null;
        }
    }
}
