package com.project.bloomevents.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "addtoevent")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class AddToEvent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "addToEventId")
    private int addToEventId;

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "eventId", referencedColumnName = "eventId")
    private Event event;

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "packageId", referencedColumnName = "packageId")
    private Packages packages;
}
