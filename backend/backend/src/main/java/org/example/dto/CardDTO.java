package org.example.dto;

import jakarta.persistence.*;

import java.util.ArrayList;

@Entity
public class CardDTO {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCard;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "idSezione")
    private SezioneDTO section;
    private String nameCard;
    private String statusCard;
    private String commentCard;
    public Long getIdCard() {return idCard;}
    public SezioneDTO getSection() {return section;}
    public String getNameCard() {return nameCard;}
    public String getStatusCard() {return statusCard;}
    public String getCommentCard() {return commentCard;}
    public ArrayList<TaskDTO> getTasksCard() {return tasksCard;}
    @OneToMany(
            mappedBy = "card",
            cascade = CascadeType.ALL,
            orphanRemoval = true,
            fetch = FetchType.LAZY
    )
    private ArrayList<TaskDTO> tasksCard;
}
