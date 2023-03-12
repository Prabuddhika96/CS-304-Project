package com.project.bloomevents.Repository;

import com.project.bloomevents.Model.Provider;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ProviderRepository extends JpaRepository<Provider,Integer> {
    @Query(value = "SELECT * FROM bloomeventsdb.provider WHERE provider_id = ?1 LIMIT 1", nativeQuery = true)
    Provider getProviderById(int providerId);

    @Query(value = "SELECT * FROM bloomeventsdb.provider WHERE provider_id = (SELECT provider_id FROM bloomeventsdb.packages WHERE package_id=?1)", nativeQuery = true)
    Provider getProviderByPackageId(int packageId);
}
