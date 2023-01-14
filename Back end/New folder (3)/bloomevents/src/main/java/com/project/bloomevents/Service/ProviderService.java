package com.project.bloomevents.Service;

import com.project.bloomevents.DTO.ProviderDTO;

import java.util.List;

public interface ProviderService {
    List<ProviderDTO> getAllProviders();

    ProviderDTO addProvider(ProviderDTO providerdata);
}
