package com.project.bloomevents.Controller;

import com.project.bloomevents.DTO.ReviewDTO;
import com.project.bloomevents.Model.Review;
import com.project.bloomevents.Service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/review")
public class ReviewController {
    @Autowired
    private ReviewService reviewService;

    @GetMapping("/getallreviews")
    public List<ReviewDTO> getAllReviews(){
        return reviewService.getAllReviews();
    }

//    @PostMapping
}
