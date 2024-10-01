package org.example.web;

import org.example.service.ServerDatetimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private ServerDatetimeService serverTime;
    @PostMapping("/login")
    public ResponseEntity<HashMap<String, Object>> loginRoute(
            @RequestBody(required = true) HashMap<String, Object> inputJson,
            @RequestHeader(name = "Content-Type") HttpHeaders inputHeaders
    ) {
        HttpHeaders headers = new HttpHeaders();
        HashMap<String, Object> body = new HashMap<>();
        return new ResponseEntity<>(body, headers, HttpStatus.OK);
    }
}
