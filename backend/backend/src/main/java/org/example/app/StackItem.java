package org.example.app;

public class StackItem {
    private long id;
    private EventWrapper<String, Object> data;
    public StackItem() {}
    public StackItem(EventWrapper<String, Object> data) {
        this.data = data;
    }
    public EventWrapper<String, Object> getData() {
        return data;
    }
    public void setId(long id) {
        this.id = id;
    }
    public void setData(EventWrapper<String, Object> data) {
        this.data = data;
    }
    public long getId() {
        return id;
    }
}
