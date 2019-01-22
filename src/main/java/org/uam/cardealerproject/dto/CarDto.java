package org.uam.cardealerproject.dto;

import lombok.Builder;
import lombok.Data;
import org.uam.cardealerproject.entity.CarColor;

@Builder
@Data
public class CarDto {
    private Long id;
    private String carModelName;
    private String carMarkName;
    private CarColor carColor;
    private Long price;
}
