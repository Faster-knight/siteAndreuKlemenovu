package org.example.web;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.HashMap;

@RestController
@RequestMapping("/api/data")
public class DataController {
    @GetMapping("/")
    public ResponseEntity<HashMap<String, Object>> getData() {
        HttpHeaders headers = new HttpHeaders();
        HashMap<String, Object> json = new HashMap<>();
        json.put("msg", "This is data from data controller");
        return new ResponseEntity<>(json, headers, HttpStatus.OK);
    }
}

