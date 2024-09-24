package org.example.app;

import java.util.Objects;

public enum UserRole {
    ADMIN("Admin"), USER("User"), CEO("CEO");
    private String role;
    UserRole(String role) {this.role = role;}
    public String getRole() {return role;}
    public void setRole(String role) {
        if (Objects.equals(role, ADMIN.role) || Objects.equals(role, USER.role) || Objects.equals(role, CEO.role)) {
            this.role = role;
        }
    }
}
