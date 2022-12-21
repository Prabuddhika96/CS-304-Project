package com.project.bloomevents.ServiceProvider;

import java.util.List;

import com.project.bloomevents.Review.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServiceProviderService {
	
	@Autowired
	private ServiceProviderRepository repo;
	@Autowired
	private ReviewService reviewService;
	
	public List<ServiceProvider> getAllServiceProviders(){
		return repo.findAll();
	}

    public ServiceProvider addServiceProvider(ServiceProvider providerData) {
		return repo.save(providerData);
    }

	public ServiceProvider getProviderById(int providerId){
		return repo.getProviderById(providerId);
	}

    public List<ServiceProvider> getProvidersByCategoryId(int catId) {
		return repo.getProvidersByCategoryId(catId);
    }

	public int getProviderCountByCategoryId(int catId) {
		return repo.getProviderCountByCategoryId(catId);
	}

}
