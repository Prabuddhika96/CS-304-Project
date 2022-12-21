package com.project.bloomevents.Package;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PackageRepository extends JpaRepository<Packages, Integer>{

    @Query(value="SELECT COUNT(provider_id) FROM bloomevents.packages WHERE provider_id=" +
            "(SELECT provider_id FROM bloomevents.service_provider WHERE category_id=?1)", nativeQuery = true)
    int countPackagesByCategoryId(int categoryId);

    @Query(value = "SELECT * FROM bloomevents.packages WHERE provider_id=?1", nativeQuery = true)
    List<Packages> getPackagesByProviderId(int providerId);
}
