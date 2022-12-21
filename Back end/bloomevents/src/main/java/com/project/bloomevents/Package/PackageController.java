package com.project.bloomevents.Package;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping
public class PackageController {
	@Autowired
	private PackageService service;

	@GetMapping("/getAllPackages")
	public List<Packages> getAllPackages(){
		return service.getAllPackages();
	}

	@GetMapping("/countPackagesByCategoryId/{category_id}")
	public int countPackagesByCategoryId(@PathVariable int category_id){
		return service.countPackagesByCategoryId(category_id);
	}

	@GetMapping("/getPackagesByProviderId/{providerId}")
	public List<Packages> getPackagesByProviderId(@PathVariable int providerId){
		return service.getPackagesByProviderId(providerId);
	}

	@PostMapping("/addPackage")
	public Packages addPackage(@RequestBody Packages packageData) {
		return service.addPackage(packageData);
	}
}
