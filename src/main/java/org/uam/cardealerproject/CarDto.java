package org.uam.cardealerproject;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class CarDto {
    private Long id;
    private String carModelName;
    private String carMarkName;
    private CarColor carColor;
    private Long price;
}
