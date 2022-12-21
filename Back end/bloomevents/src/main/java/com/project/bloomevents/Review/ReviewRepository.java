package com.project.bloomevents.Review;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Integer> {
    @Query(value = "SELECT SUM(rating)/COUNT(review_id) AS average_rating FROM bloomevents.review WHERE provider_id=?1", nativeQuery = true)
    double getAverageRating(int providerId);
}
