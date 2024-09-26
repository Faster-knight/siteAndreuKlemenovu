package org.example.app;

import java.util.HashMap;

public class EventWrapper<T, K> {
    private final HashMap<T, K> data;
    public EventWrapper() {data = new HashMap<>();}
    public EventWrapper(HashMap<T, K> data) {this.data = data;}
    public HashMap<T, K> getData() {return data;}
}
