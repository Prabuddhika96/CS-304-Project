package com.project.bloomevents.Controller;

import com.project.bloomevents.DTO.PaymentDTO;
import com.project.bloomevents.Service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/payment")
public class PaymentController {
    @Autowired
    private PaymentService paymentService;

    @GetMapping("/getallpayments")
    public ResponseEntity<?> getAllPayments(){
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        List<PaymentDTO> paymentList = paymentService.getAllPayments();
        if (!paymentList.isEmpty()) {
            map.put("status", 1);
            map.put("data", paymentList);
            return new ResponseEntity<>(map, HttpStatus.OK);
        } else {
            map.clear();
            map.put("status", 0);
            map.put("message", "Payment list is not found");
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }
    }
}
