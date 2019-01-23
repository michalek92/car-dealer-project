package org.uam.cardealerproject.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.uam.cardealerproject.entity.CarColor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CarDto {
    private Long id;
    private String carModelName;
    private String carMarkName;
    private CarColor carColor;
    private Long price;
    private String url;
    private String shortInfo;
    private String longInfo;
}
