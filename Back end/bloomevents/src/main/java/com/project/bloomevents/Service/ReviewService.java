package com.project.bloomevents.Service;

import com.project.bloomevents.DTO.ReviewDTO;

import java.util.List;

public interface ReviewService {
    List<ReviewDTO> getAllReviews();
    ReviewDTO addReview(ReviewDTO review);
    boolean deleteReview(int reviewId);

    List<ReviewDTO> getReviewsByProviderId(int providerId);
}
