package org.example.dto;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class SezioneDTO {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idSizeone;
    private String name;
    @SuppressWarnings("unused")
    public SezioneDTO() {}
    public SezioneDTO(long id, String name) {
        this.idSizeone = id;
        this.name = name;
    }
    public long getId() {return idSizeone;}
    public String getName() {return name;}
    @Override
    public String toString() {
        StringBuilder builder = new StringBuilder("SezioneDTO model: ID = ");
        builder.append(idSizeone);
        builder.append(", NAME = ");
        builder.append(name);
        return builder.toString();
    }
}
