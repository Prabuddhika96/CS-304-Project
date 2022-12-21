package com.project.bloomevents.Payment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentService {
    @Autowired
    private PaymentRepository repo;

    public List<Payment> getAllPayments() {
        return repo.findAll();
    }
}
