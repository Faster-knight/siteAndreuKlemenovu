package org.example.dto;

import jakarta.persistence.*;
import org.example.app.StatusCard;
import org.springframework.data.auditing.DateTimeProvider;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
public class TaskDTO {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idTask;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "idCard")
    private CardDTO card;
    private String nameTask;
    private StatusCard status;
    private LocalDate data;
    private LocalTime time;
    public Long getId() {return idTask;}
    public CardDTO getCard() {return card;}
    public String getNameTask() {return nameTask;}
    public StatusCard getStatus() {return status;}
    public LocalDate getData() {return data;}
    public LocalTime getTime() {return time;}
}
