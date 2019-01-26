package org.uam.cardealerproject.api;

import org.uam.cardealerproject.dto.CarDto;

import static org.assertj.core.api.Assertions.assertThat;


public class CarAssertions {
    private CarDto carDto;

    private CarAssertions(CarDto carDto) {
        this.carDto = carDto;
    }

    public static CarAssertions assertDto(CarDto dto) {
        assertThat(dto).isNotNull();
        return new CarAssertions(dto);
    }

    public CarAssertions withId(Long id) {
        assertThat(carDto.getId()).isEqualTo(id);
        return this;
    }

    public CarAssertions withCarModel(String carModel) {
        assertThat(carDto.getCarModelName()).isEqualTo(carModel);
        return this;
    }

    public CarAssertions withCarMark(String carMark) {
        assertThat(carDto.getCarMarkName()).isEqualTo(carMark);
        return this;
    }

    public CarAssertions withCarColor(String carColor) {
        assertThat(carDto.getCarColor()).isEqualTo(carColor);
        return this;
    }

    public CarAssertions withPrice(Long price) {
        assertThat(carDto.getPrice()).isEqualTo(price);
        return this;
    }

    public CarAssertions withUrl(String url) {
        assertThat(carDto.getUrl()).isEqualTo(url);
        return this;
    }

    public CarAssertions withShortInfo(String shortInfo) {
        assertThat(carDto.getShortInfo()).isEqualTo(shortInfo);
        return this;
    }

    public CarAssertions containingLongInfo(String longInfo) {
        assertThat(carDto.getLongInfo()).contains(longInfo);
        return this;
    }

}
