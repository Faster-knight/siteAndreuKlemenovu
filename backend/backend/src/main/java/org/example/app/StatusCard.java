package org.example.app;

import java.util.Objects;

public enum StatusCard {
    READY("Готово"), INPROGRESS("В процессе"), SEND("Выдана");
    private String data;
    StatusCard(String data) {this.data = data;}
    public String getPol() {return data;}
    public void setPol(String data) {
        if (
                Objects.equals(data, READY.data) ||
                Objects.equals(data, INPROGRESS.data) ||
                Objects.equals(data, SEND.data)) {
            this.data = data;
        }
    }
}
