package org.example.web;

import org.example.dto.HelloDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.TimeUnit;

@RestController
@RequestMapping("/api")
public class ApiController {
    @Autowired
    private ResourceLoader resLoader;
    @GetMapping(path = "/hello")
    public HelloDTO hello() {
        return new HelloDTO("Hello!");
    }
    @GetMapping(path="/doc")
    public ResponseEntity<Resource> indexApi() {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.TEXT_HTML);
        headers.setCacheControl(CacheControl.maxAge(3600, TimeUnit.SECONDS).cachePrivate());
        Resource res = resLoader.getResource("classpath:/static/indexApiDoc.html");
        return new ResponseEntity<>(res, headers, HttpStatus.OK);
    }
}
