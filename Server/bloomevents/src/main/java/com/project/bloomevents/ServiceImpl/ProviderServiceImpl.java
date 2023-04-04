package com.project.bloomevents.ServiceImpl;

import com.project.bloomevents.DTO.ProviderDTO;
import com.project.bloomevents.DTO.UserDTO;
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
    @Autowired
    private UserServiceImpl userServiceimpl;

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
            UserDTO validuser=userServiceimpl.getUserById(providerdata.getUserId());

            if(validuser != null){
                Provider provider = modelMapper.map(providerdata, Provider.class);
                provider = providerRepo.save(provider);
                return modelMapper.map(provider, new TypeToken<ProviderDTO>() {
                }.getType());
            }
            else{
                return null;
            }
        }
        catch(Exception e){
            System.out.println(e.toString());
            return null;
        }
    }

    @Override
    public ProviderDTO getProviderById(int providerId) {
        try{
            Provider provider = providerRepo.getProviderById(providerId);
            if(provider != null){
                return modelMapper.map(provider, new TypeToken<ProviderDTO>() {}.getType());
            }
            else{
                return null;
            }
        }
        catch(Exception e){
            System.out.println(e.toString());
            return null;
        }
    }

    @Override
    public ProviderDTO getProviderByPackageId(int packageId) {
        try{
            Provider provider = providerRepo.getProviderByPackageId(packageId);
            if(provider != null){
                return modelMapper.map(provider, new TypeToken<ProviderDTO>() {}.getType());
            }
            else{
                return null;
            }
        }
        catch(Exception e){
            System.out.println(e.toString());
            return null;
        }
    }

    @Override
    public List<ProviderDTO> getProvidersByUserId(int userId) {
        try{
            List<Provider> list = providerRepo.getProvidersByUserId(userId);
            if(list.size()>=0) {
                return modelMapper.map(list, new TypeToken<List<ProviderDTO>>() {
                }.getType());
            }
            return null;
        }
        catch(Exception e){
            System.out.println(e.toString());
            return null;
        }
    }

    @Override
    public ProviderDTO updateProvider(ProviderDTO providerData) {
        try{
            int count = providerRepo.updateProvider(providerData.getBusinessName(), providerData.getDistrict(), providerData.getDescription(), providerData.getMobile(), providerData.getFacebook(), providerData.getInstagram(), providerData.getWeb(), providerData.getProviderId());
            if(count==1) {
                Provider provider=providerRepo.getProviderById(providerData.getProviderId());
                return modelMapper.map(provider, new TypeToken<ProviderDTO>() {
                }.getType());
            }
            return null;
        }
        catch(Exception e){
            System.out.println(e.toString());
            return null;
        }
    }


}
