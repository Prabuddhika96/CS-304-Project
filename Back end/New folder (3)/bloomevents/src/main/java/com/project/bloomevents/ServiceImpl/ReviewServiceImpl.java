package com.project.bloomevents.ServiceImpl;

import com.project.bloomevents.DTO.ReviewDTO;
import com.project.bloomevents.Model.Review;
import com.project.bloomevents.Repository.ReviewRepository;
import com.project.bloomevents.Service.ReviewService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewServiceImpl implements ReviewService {
    @Autowired
    private ReviewRepository reviewRepo;
    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<ReviewDTO> getAllReviews() {
        List<Review> list= reviewRepo.findAll();
        return modelMapper.map(list, new TypeToken<List<ReviewDTO>>(){}.getType());
    }

    @Override
    public ReviewDTO addReview(ReviewDTO review) {
        Review r= modelMapper.map(review,Review.class);
        Review r1=reviewRepo.save(r);

        return modelMapper.map(r1,new TypeToken<ReviewDTO>(){}.getType());
    }

    @Override
    public String deleteReview(int reviewId) {
        reviewRepo.deleteById(reviewId);
        return "review deleted";

    }
}
