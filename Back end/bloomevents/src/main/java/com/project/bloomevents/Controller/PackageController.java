package com.project.bloomevents.Controller;

import com.project.bloomevents.DTO.PackageDTO;
import com.project.bloomevents.Service.PackageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/package")
public class PackageController {
    @Autowired
    private PackageService packageService;

    @GetMapping("/getallpackages")
    public ResponseEntity<?> getAllpackages(){
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        List<PackageDTO> packageList = packageService.getAllpackages();

        if (!packageList.isEmpty()) {
            map.put("status", 1);
            map.put("data", packageList);
            return new ResponseEntity<>(map, HttpStatus.OK);
        } else {
            map.clear();
            map.put("status", 0);
            map.put("message", "Packages list is not found");
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
    }

    @GetMapping("/getpackagesbyproviderid/{providerId}")
    public ResponseEntity<?> getPackagesbyProviderId(@PathVariable int providerId){
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        List<PackageDTO> packageList = packageService.getPackagesByProviderId(providerId);

        if (!packageList.isEmpty()) {
            map.put("status", 1);
            map.put("data", packageList);
            return new ResponseEntity<>(map, HttpStatus.OK);
        } else {
            map.clear();
            map.put("status", 0);
            map.put("message", "Packages list is not found");
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
    }

    @GetMapping("/getpackagecountbyproviderid/{providerId}")
    public ResponseEntity<?> getPackageCountByProviderId(@PathVariable int providerId){
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        int count = packageService.getPackageCount(providerId);

        if (count >= 0 ) {
            map.put("status", 1);
            map.put("data", count);
            return new ResponseEntity<>(map, HttpStatus.OK);
        } else {
            map.clear();
            map.put("status", 0);
            map.put("message", "Packages list is not found");
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
    }
}
