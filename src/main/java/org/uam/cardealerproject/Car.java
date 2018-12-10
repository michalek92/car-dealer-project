package org.uam.cardealerproject;

import lombok.Builder;
import lombok.Data;

import javax.persistence.*;


@Entity
@Data
@Builder
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    private CarModel carModel;

    @Enumerated(EnumType.STRING)
    private CarColor color;

    private Long price;
}
