package com.project.bloomevents.ServiceProvider;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ServiceProviderRepository extends JpaRepository<ServiceProvider, Integer>{
    @Query(value = "SELECT * FROM bloomevents.service_provider WHERE category_id=?1", nativeQuery = true)
    List<ServiceProvider> getProvidersByCategoryId(int catId);

    @Query(value = "SELECT COUNT(provider_id) FROM bloomevents.service_provider WHERE category_id=?1", nativeQuery = true)
    int getProviderCountByCategoryId(int catId);

    @Query(value = "SELECT * FROM bloomevents.service_provider WHERE provider_id=?1", nativeQuery = true)
    ServiceProvider getProviderById(int providerId);
}
