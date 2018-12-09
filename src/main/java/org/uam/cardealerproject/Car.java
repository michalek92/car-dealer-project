package org.uam.cardealerproject;

import lombok.Data;

import javax.persistence.*;


@Entity
@Data
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long Id;

    @ManyToOne
    private CarModel carModel;

    private String color;
}
