package com.project.bloomevents.Repository;

import com.project.bloomevents.Model.Packages;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PackageRepository extends JpaRepository<Packages, Integer> {
    @Query(value = "SELECT * FROM bloomeventsdb.packages WHERE provider_id=?1", nativeQuery = true)
    List<Packages> getPackagesByProviderId(int providerId);

    @Query(value = "SELECT COUNT(package_id) FROM bloomeventsdb.packages WHERE provider_id=?1", nativeQuery = true)
    int getPackageCount(int providerId);
}
