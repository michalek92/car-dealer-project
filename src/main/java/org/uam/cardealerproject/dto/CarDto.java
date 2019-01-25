package org.uam.cardealerproject.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CarDto {
    private Long id;
    private String carModelName;
    private String carMarkName;
    private String carColor;
    private Long price;
    private String url;
    private String shortInfo;
    private String longInfo;
}
