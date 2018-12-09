package org.uam.cardealerproject;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class CarModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    private CarMark carMark;

    private String name;
}
