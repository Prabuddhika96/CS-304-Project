package com.project.bloomevents.Package;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PackageService {
	
	@Autowired
	private PackageRepository repo;

	public Packages addPackage(Packages packageData) {
		return repo.save(packageData);
	}

	public List<Packages> getAllPackages() {
		return repo.findAll();
	}

    public int countPackagesByCategoryId(int categoryId) {
		return repo.countPackagesByCategoryId(categoryId);
    }

    public List<Packages> getPackagesByProviderId(int providerId) {
		return repo.getPackagesByProviderId(providerId);
    }
}
