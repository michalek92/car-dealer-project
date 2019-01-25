package org.uam.cardealerproject.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Size;


@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private CarModel carModel;

    //@Enumerated(EnumType.STRING)
    private String color;

    private Long price;

    private String url;

    @Size(max = 2000)
    private String shortInfo;

    @Size(max = 4000)
    private String longInfo;
}
