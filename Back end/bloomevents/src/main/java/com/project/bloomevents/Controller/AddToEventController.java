package com.project.bloomevents.Controller;

import com.project.bloomevents.DTO.AddToEventDTO;
import com.project.bloomevents.Service.AddToEventService;
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
}
