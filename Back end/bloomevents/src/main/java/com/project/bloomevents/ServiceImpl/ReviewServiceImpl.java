package com.project.bloomevents.ServiceImpl;

import com.project.bloomevents.DTO.ProviderDTO;
import com.project.bloomevents.DTO.ReviewDTO;
import com.project.bloomevents.DTO.UserDTO;
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
    @Autowired
    private UserServiceImpl userServiceImpl;
    @Autowired
    private ProviderServiceImpl providerServiceImpl;

    public ReviewDTO getReviewById(int reviewId){
        try{
            Review review = reviewRepo.getReviewById(reviewId);
            if (review == null) {
                return null;
            }
            return modelMapper.map(review, new TypeToken<ReviewDTO>() {
            }.getType());
        }
        catch(Exception e){
            System.out.println(e.toString());
            return null;
        }
    }

    @Override
    public List<ReviewDTO> getAllReviews() {
        try{
            List<Review> list = reviewRepo.findAll();
            return modelMapper.map(list, new TypeToken<List<ReviewDTO>>() {
            }.getType());
        }
        catch(Exception e){
            System.out.println(e.toString());
            return null;
        }
    }

    @Override
    public ReviewDTO addReview(ReviewDTO review) {
        try{
            UserDTO user=userServiceImpl.getUserById(review.getUserId());
            ProviderDTO provider=providerServiceImpl.getProviderById(review.getProviderId());

            if(user != null && provider !=null && user.getUserId() != provider.getUserId()){
                Review r = modelMapper.map(review, Review.class);
                Review r1 = reviewRepo.save(r);

                return modelMapper.map(r1, new TypeToken<ReviewDTO>() {
                }.getType());
            }
            else {
                return null;
            }
        }
        catch(Exception e){
            System.out.println(e.toString());
            return null;
        }
    }

    @Override
    public boolean deleteReview(int reviewId) {
        boolean deleted=false;
        try{
            ReviewDTO review = getReviewById(reviewId);
            if (review != null) {
                reviewRepo.deleteById(reviewId);
                deleted = true;
            }
            return deleted;
        }
        catch(Exception e){
            System.out.println(e.toString());
            return deleted;
        }
    }

    @Override
    public List<ReviewDTO> getReviewsByProviderId(int providerId) {
        try{
            List<Review> list = reviewRepo.getReviewsByProviderId(providerId);

            if(list.size()>=0){
                return modelMapper.map(list, new TypeToken<List<ReviewDTO>>() {
                }.getType());
            }
            return null;

        }
        catch(Exception e){
            System.out.println(e.toString());
            return null;
        }
    }
}
