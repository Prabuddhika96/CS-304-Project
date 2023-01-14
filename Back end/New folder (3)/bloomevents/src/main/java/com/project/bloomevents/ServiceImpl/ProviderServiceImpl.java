package com.project.bloomevents.ServiceImpl;

import com.project.bloomevents.DTO.ProviderDTO;
import com.project.bloomevents.Model.Provider;
import com.project.bloomevents.Repository.ProviderRepository;
import com.project.bloomevents.Service.ProviderService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProviderServiceImpl implements ProviderService {
    @Autowired
    private ProviderRepository providerRepo;
    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<ProviderDTO> getAllProviders() {
        try{
            List<Provider> list = providerRepo.findAll();
            return modelMapper.map(list, new TypeToken<List<ProviderDTO>>() {
            }.getType());
        }
        catch(Exception e){
            System.out.println(e.toString());
            return null;
        }
    }

    @Override
    public ProviderDTO addProvider(ProviderDTO providerdata) {
        try{
            Provider provider = modelMapper.map(providerdata, Provider.class);
            provider = providerRepo.save(provider);
            return modelMapper.map(provider, new TypeToken<ProviderDTO>() {
            }.getType());
        }
        catch(Exception e){
            System.out.println(e.toString());
            return null;
        }
    }

    @Override
    public ProviderDTO getProviderById(int providerId) {
        try{
            Provider provider = providerRepo.getReferenceById(providerId);
            return modelMapper.map(provider, new TypeToken<ProviderDTO>() {
            }.getType());
        }
        catch(Exception e){
            System.out.println(e.toString());
            return null;
        }
    }
}
