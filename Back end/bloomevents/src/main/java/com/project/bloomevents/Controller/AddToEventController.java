package com.project.bloomevents.Controller;

import com.project.bloomevents.DTO.AddToEventDTO;
import com.project.bloomevents.Service.AddToEventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/addtoevent")
public class AddToEventController {
    @Autowired
    private AddToEventService addToEventService;

    @GetMapping("/getalladdtoevent")
    public ResponseEntity<?> getAllAddToEvent(){
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        List<AddToEventDTO> list = addToEventService.getAllAddToEvent();
        if (!list.isEmpty()) {
            map.put("status", 1);
            map.put("data", list);
            return new ResponseEntity<>(map, HttpStatus.OK);
        } else {
            map.clear();
            map.put("status", 0);
            map.put("message", "add to event list is not found");
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/addpackagetoevent")
    public ResponseEntity<?> addPackageToEvent(@RequestBody AddToEventDTO data){
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        AddToEventDTO savedData = addToEventService.addPackageToEvent(data);
        if (savedData!= null) {
            map.put("status", 1);
            map.put("data", savedData);
            return new ResponseEntity<>(map, HttpStatus.OK);
        } else {
            map.clear();
            map.put("status", 0);
            map.put("message", "Adding Failed");
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/getpackagecountbyeventid/{eventId}")
    public ResponseEntity<?> getPackageCountByEventId(@PathVariable int eventId){
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        int count = addToEventService.getPackageCountByEventId(eventId);
        if (count>=0) {
            map.put("status", 1);
            map.put("data", count);
            return new ResponseEntity<>(map, HttpStatus.OK);
        } else {
            map.clear();
            map.put("status", 0);
            map.put("message", "No Packages Found");
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
    }

    @PutMapping("/placePackages/{eventId}")
    public ResponseEntity<?> placePackages(@PathVariable int eventId){
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        boolean success = addToEventService.placePackages(eventId);
        if (success) {
            map.put("status", 1);
            map.put("data", success);
            return new ResponseEntity<>(map, HttpStatus.OK);
        } else {
            map.clear();
            map.put("status", 0);
            map.put("message", "No Packages Found");
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
    }
}
