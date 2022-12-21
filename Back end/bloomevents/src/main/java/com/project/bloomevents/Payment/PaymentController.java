package com.project.bloomevents.Payment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping
public class PaymentController {
    @Autowired
    private PaymentService service;

    @GetMapping("/getAllPayments")
    public List<Payment> getAllPayments(){
        return service.getAllPayments();
    }
}
