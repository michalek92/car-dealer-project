package org.uam.cardealerproject;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class CarMark {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private String name;
}
