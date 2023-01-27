package com.project.bloomevents.Controller;

import com.project.bloomevents.DTO.PackageDTO;
import com.project.bloomevents.Service.PackageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }
    }
}
