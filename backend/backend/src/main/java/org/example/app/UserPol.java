package org.example.app;

import java.util.Objects;

public enum UserPol {
    M("Man"), G("Girl");
    private String pol;
    UserPol(String pol) {this.pol = pol;}
    public String getPol() {return pol;}
    public void setPol(String pol) {
        if (Objects.equals(pol, M.pol) || Objects.equals(pol, G.pol)) {
            this.pol = pol;
        }
    }
}
