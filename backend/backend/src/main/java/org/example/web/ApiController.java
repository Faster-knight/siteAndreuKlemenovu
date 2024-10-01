package org.example.web;

import org.example.service.ServerDatetimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
@RequestMapping("/api")
public class ApiController {
    @Autowired
    private ResourceLoader resLoader;
    @Autowired
    private ServerDatetimeService serverTime;
    @GetMapping(path="/")
    public ResponseEntity<HashMap<String, Object>> indexApi() {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HashMap<String, Object> body = new HashMap<>();
        body.put("msg", "Application backend working!");
        body.put("date", serverTime.getUTC());
        return new ResponseEntity<>(body, headers, HttpStatus.OK);
    }
    @GetMapping(path = "/error")
    public ResponseEntity<HashMap<String, Object>> errorRoute() {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HashMap<String, Object> body = new HashMap<>();
        body.put("msg", "Page not found");
        body.put("date", serverTime.getUTC());
        return new ResponseEntity<>(body, headers, HttpStatus.NOT_FOUND);
    }
}
