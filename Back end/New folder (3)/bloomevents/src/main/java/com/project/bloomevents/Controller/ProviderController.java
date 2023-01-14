package com.project.bloomevents.Controller;

import com.project.bloomevents.DTO.ProviderDTO;
import com.project.bloomevents.Service.ProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/provider")
public class ProviderController {
    @Autowired
    private ProviderService providerService;

    @GetMapping("/getallproviders")
    public List<ProviderDTO> getAllProviders(){
        return providerService.getAllProviders();
    }

    @GetMapping("/getproviderbyid/{providerId}")
    public ProviderDTO getProviderById(@PathVariable int providerId){
        return providerService.getProviderById(providerId);
    }

    @PostMapping("/addprovider")
    public ProviderDTO addProvider(@RequestBody ProviderDTO providerdata){
        return providerService.addProvider(providerdata);
    }
}
