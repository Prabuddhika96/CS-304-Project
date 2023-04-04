package com.project.bloomevents.Controller;

import com.project.bloomevents.DTO.ProviderDTO;
import com.project.bloomevents.Service.ProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/provider")
public class ProviderController {
    @Autowired
    private ProviderService providerService;

    @GetMapping("/getallproviders")
    public ResponseEntity<?> getAllProviders(){
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        List<ProviderDTO> providerList = providerService.getAllProviders();

        if (!providerList.isEmpty()) {
            map.put("status", 1);
            map.put("data", providerList);
            return new ResponseEntity<>(map, HttpStatus.OK);
        } else {
            map.clear();
            map.put("status", 0);
            map.put("message", "Provider list is not found");
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
    }

    @GetMapping("/getproviderbyid/{providerId}")
    public ResponseEntity<?> getProviderById(@PathVariable int providerId){
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        ProviderDTO provider = providerService.getProviderById(providerId);

        if (provider != null) {
            map.put("status", 1);
            map.put("data", provider);
            return new ResponseEntity<>(map, HttpStatus.OK);
        } else {
            map.clear();
            map.put("status", 0);
            map.put("message", "Provider not found");
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
    }

    @PostMapping("/addprovider")
    public ResponseEntity<?> addProvider(@RequestBody ProviderDTO providerdata){
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        ProviderDTO provider = providerService.addProvider(providerdata);

        if (provider != null) {
            map.put("status", 1);
            map.put("data", provider);
            return new ResponseEntity<>(map, HttpStatus.OK);
        } else {
            map.clear();
            map.put("status", 0);
            map.put("message", "Provider not added");
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
    }

    @GetMapping("/getproviderbypackageid/{packageId}")
    public ResponseEntity<?> getProviderByPackageId(@PathVariable int packageId){
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        ProviderDTO provider = providerService.getProviderByPackageId(packageId);

        if (provider != null) {
            map.put("status", 1);
            map.put("data", provider);
            return new ResponseEntity<>(map, HttpStatus.OK);
        } else {
            map.clear();
            map.put("status", 0);
            map.put("message", "Provider not found");
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
    }

    @GetMapping("/getprovidersbyuserid/{userId}")
    public ResponseEntity<?> getProvidersByUserId(@PathVariable int userId){
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        List<ProviderDTO> providerList = providerService.getProvidersByUserId(userId);

        if (providerList.size()>0 && providerList!=null) {
            map.put("status", 1);
            map.put("data", providerList);
            return new ResponseEntity<>(map, HttpStatus.OK);
        } else {
            map.clear();
            map.put("status", 0);
            map.put("message", "Provider not found");
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
    }

    @PutMapping("/updateprovider")
    public ResponseEntity<?> updateProvider(@RequestBody ProviderDTO providerData){
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        ProviderDTO provider = providerService.updateProvider(providerData);

        if (provider!=null) {
            map.put("status", 1);
            map.put("data", provider);
            return new ResponseEntity<>(map, HttpStatus.OK);
        } else {
            map.clear();
            map.put("status", 0);
            map.put("message", "Provider not found");
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
    }

}
