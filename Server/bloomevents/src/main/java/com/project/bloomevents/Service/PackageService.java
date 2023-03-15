package com.project.bloomevents.Service;

import com.project.bloomevents.DTO.PackageDTO;

import java.util.List;

public interface PackageService {
    List<PackageDTO> getAllpackages();

    int getPackageCount(int providerId);

    List<PackageDTO> getPackagesByProviderId(int providerId);

    PackageDTO getPackageByPackageId(int packageId);
}
