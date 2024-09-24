package org.example.dto;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class PositionDTO {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @SuppressWarnings("unused")
    public PositionDTO() {}
    public PositionDTO(long id, String name) {this.id = id;this.name=name;}
    public long getID() {return id;}
    public String getName() {return name;}
    @Override
    public String toString() {
        StringBuilder builder = new StringBuilder("PositionDTO model: ID = ");
        builder.append(id);
        builder.append(", NAME = ");
        builder.append(name);
        return builder.toString();
    }
}
