package com.project.bloomevents.Service;

import com.project.bloomevents.CommonResponse.CommonResponse;
import com.project.bloomevents.DTO.ReviewDTO;

import java.util.List;

public interface ReviewService {
    List<ReviewDTO> getAllReviews();
    ReviewDTO addReview(ReviewDTO review);
    CommonResponse deleteReview(int reviewId);
}
