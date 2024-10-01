package org.example.dto;

import jakarta.persistence.*;

import java.util.ArrayList;

@Entity
public class UserDTO {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idUser;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id")
    private PositionDTO pos;
    private String name;
    private String login;
    private int age;
    private String role;
    private String pol;
    //@Lob
    //private byte[] image;
    @OneToMany(
            mappedBy = "user",
            cascade = CascadeType.ALL,
            orphanRemoval = true,
            fetch = FetchType.LAZY
    )
    private ArrayList<UserCardDTO> userCards;
}
