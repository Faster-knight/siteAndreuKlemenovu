package org.example.web;

import org.example.service.ServerDatetimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@RequestMapping("/api/card")
public class CardController {
    @Autowired
    private ServerDatetimeService serverTime;
    @PostMapping(path = "/{cardID}")
    public ResponseEntity<HashMap<String, Object>> getCardByIDRoute(
            @RequestBody(required = true) HashMap<String, Object> userInfoJson,
            @PathVariable(required = true) int CardID
    ) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HashMap<String, Object> body = new HashMap<>();
        body.put("date", serverTime.getUTC());
        return new ResponseEntity<>(body, headers, HttpStatus.OK);
    }
}
