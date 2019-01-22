package org.uam.cardealerproject.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.uam.cardealerproject.dto.CarDto;
import org.uam.cardealerproject.entity.Car;
import org.uam.cardealerproject.entity.CarModel;
import org.uam.cardealerproject.repo.CarModelRepository;
import org.uam.cardealerproject.repo.CarRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CarService {
    private final CarRepository carRepository;
    private final CarModelRepository carModelRepository;

    @Autowired
    public CarService(CarRepository carRepository, CarModelRepository carModelRepository) {
        this.carRepository = carRepository;
        this.carModelRepository = carModelRepository;
    }

    public List<CarDto> getAllCars() {
        return carRepository.findAll()
                .stream()
                .map(this::toCarDto)
                .collect(Collectors.toList());
    }

    public CarDto getById(Long id) {
        CarDto dto = null;
        final Optional<Car> carOptional = carRepository.findById(id);
        if (carOptional.isPresent()) {
            dto = toCarDto(carOptional.get());
        }
        return dto;
    }

    public CarDto createCar(CarDto carDto) {
        final CarModel carModel = carModelRepository.findByName(carDto.getCarModelName());
        final Car car = toEntity(carDto, carModel);
        final Car savedCar = carRepository.save(car);
        return toCarDto(savedCar);
    }

    CarDto toCarDto(Car car) {
        return CarDto.builder()
                .id(car.getId())
                .carColor(car.getColor())
                .carMarkName(car.getCarModel().getCarMark().getName())
                .carModelName(car.getCarModel().getName())
                .price(car.getPrice())
                .build();
    }

    Car toEntity(CarDto dto, CarModel carModel) {
        return Car.builder()
                .price(dto.getPrice())
                .color(dto.getCarColor())
                .carModel(carModel)
                .build();
    }

}
