package org.uam.cardealerproject.api;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import org.uam.cardealerproject.dto.CarDto;
import org.uam.cardealerproject.repo.CarRepository;

import java.util.Arrays;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class CarControllerIT {
    @Autowired
    CarRepository carRepository;
    private static final String CARS_BASE_URL = "/cars/";
    private static final String CAR_MARK_NAME = "MERCEDES";
    private static final String CAR_MODEL_NAME = "CLA";
    private static final String SHORT_INFO = "shortInfo";
    private static final String LONG_INFO = "longInfo";
    private static final String URL = "url";
    private static final long PRICE = 100000L;
    private static final String CAR_COLOR = "#111111";
    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void shouldCreateAndDeleteCarBy() {
        //given
        final CarDto requestDto = CarDto.builder()
                .carMarkName(CAR_MARK_NAME)
                .carModelName(CAR_MODEL_NAME)
                .shortInfo(SHORT_INFO)
                .longInfo(LONG_INFO)
                .url(URL)
                .price(PRICE)
                .carColor(CAR_COLOR)
                .build();
        //when
        final ResponseEntity<CarDto> createdCarResponse = restTemplate.postForEntity(CARS_BASE_URL, requestDto, CarDto.class);

        //then
        final Long carId = createdCarResponse.getBody().getId();
        assertThat(createdCarResponse.getStatusCode()).isEqualTo(HttpStatus.OK);
        CarAssertions.assertDto(createdCarResponse.getBody())
                .withId(carId)
                .withCarModel(CAR_MODEL_NAME)
                .withCarMark(CAR_MARK_NAME)
                .withCarColor(CAR_COLOR)
                .withPrice(PRICE)
                .withUrl(URL)
                .withShortInfo(SHORT_INFO)
                .containingLongInfo(LONG_INFO);


        final ResponseEntity<Object> responseEntity = restTemplate.exchange(CARS_BASE_URL + carId, HttpMethod.DELETE, HttpEntity.EMPTY, Object.class);
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.NO_CONTENT);
        ResponseEntity<CarDto> deletedCarResponseEntity = restTemplate.getForEntity(CARS_BASE_URL + carId, CarDto.class);
        assertThat(deletedCarResponseEntity.getBody()).isEqualTo(null);
    }

    @Test
    public void shouldReturnCarsWithSuccess() {
        ResponseEntity<CarDto[]> responseEntity = restTemplate.getForEntity(CARS_BASE_URL, CarDto[].class);
        List<CarDto> cars = Arrays.asList(responseEntity.getBody());

        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(cars.size()).isEqualTo(11);
        assertCLA(cars.get(0));
    }

    @Test
    public void shouldReturnCarByIdWithSuccess() {
        ResponseEntity<CarDto> responseEntity = restTemplate.getForEntity("/cars/1", CarDto.class);

        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertCLA(responseEntity.getBody());
    }

    private void assertCLA(CarDto body) {
        CarAssertions.assertDto(body)
                .withId(1L)
                .withCarModel("CLA")
                .withCarMark("MERCEDES")
                .withCarColor("#000000")
                .withPrice(150000L)
                .withUrl("https://autow5minut.pl/wp-content/uploads/2017/08/mercedes_amg_cla45_381km_07.jpg")
                .withShortInfo("samochód osobowy klasy kompaktowej produkowany przez niemiecki koncern Mercedes-Benz w fabryce na Węgrzech od 2013 roku.")
                .containingLongInfo("Auto zostało zaprezentowane w wersji produkcyjnej podczas targów motoryzacyjnych w Detroit w styczniu 2013 roku");
    }

}