package org.example.service;

import org.springframework.stereotype.Service;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

@Service
public class ServerDatetimeService {
    public String getTime(String timezone) {
        ZoneId zoneId = ZoneId.of(timezone != null ? timezone : ZoneId.systemDefault().getId());
        ZonedDateTime zonedDateTime = ZonedDateTime.now(zoneId);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss z");
        return zonedDateTime.format(formatter);
    }
    public String getUTC() {
        return getTime("UTC");
    }
}