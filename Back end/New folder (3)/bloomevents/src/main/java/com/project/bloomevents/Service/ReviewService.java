package com.project.bloomevents.Service;

import com.project.bloomevents.DTO.ReviewDTO;
import com.project.bloomevents.Model.Review;

import java.util.List;

public interface ReviewService {
    List<ReviewDTO> getAllReviews();
}
