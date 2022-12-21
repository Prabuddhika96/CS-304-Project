package com.project.bloomevents.Review;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping
public class ReviewController {
    @Autowired
    private ReviewService service;

    @GetMapping("/getAllReviews")
    private List<Review> getAllReviews(){
        return service.getAllReviews();
    }

    @PostMapping("/addReview")
    private Review addReview(@RequestBody Review reviewdata){
        return service.addReview(reviewdata);
    }
}
