package com.project.bloomevents.Review;

import com.project.bloomevents.ServiceProvider.ServiceProvider;
import com.project.bloomevents.ServiceProvider.ServiceProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.Instant;
import java.util.List;

@Service
public class ReviewService {
    @Autowired
    private ReviewRepository repo;
    @Autowired
    private ServiceProviderService providerService;

    public List<Review> getAllReviews() {
        return repo.findAll();
    }

    public Review addReview(Review reviewdata) {
        if(reviewdata.getTimestamp()==null){
            Timestamp instant= Timestamp.from(Instant.now());
            reviewdata.setTimestamp(instant);
        }
        repo.save(reviewdata);
        // update Provider Average Rating
        updateProviderAverageRating(reviewdata.getProvider().getProvider_id());
        return reviewdata;
    }

    public void updateProviderAverageRating(int providerId){
        ServiceProvider provider= providerService.getProviderById(providerId);
        if(provider != null){
            double avg_rate=repo.getAverageRating(providerId);
            provider.setRating(avg_rate);
            providerService.addServiceProvider(provider);
        }
    }
}
