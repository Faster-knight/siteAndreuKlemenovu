package org.example.dto;

import jakarta.persistence.*;

@Entity
public class UserCardDTO {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "idUser")
    private UserDTO user;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "idCard")
    private CardDTO card;
}
