package com.project.bloomevents.ServiceProvider;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping
public class ServiceProviderController {

	@Autowired
	private ServiceProviderService service;

	@GetMapping("/getAllServiceProviders")
	public List<ServiceProvider> getAllServiceProviders(){
		return service.getAllServiceProviders();
	}

	@GetMapping("/getProvidersByCategoryId/{catId}")
	public List<ServiceProvider> getProvidersByCategoryId(@PathVariable int catId){
		return service.getProvidersByCategoryId(catId);
	}

	@GetMapping("/getProviderCountByCategoryId/{catId}")
	public int getProviderCountByCategoryId(@PathVariable int catId){
		return service.getProviderCountByCategoryId(catId);
	}

	@GetMapping("/getProviderById/{providerId}")
	public ServiceProvider getProviderById(@PathVariable int providerId){
		return service.getProviderById(providerId);
	}

	@PostMapping("/addServiceProvider")
	public ServiceProvider addServiceProvider(@RequestBody ServiceProvider providerData){
		return service.addServiceProvider(providerData);
	}
	
}
