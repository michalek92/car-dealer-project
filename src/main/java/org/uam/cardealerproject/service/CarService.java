package org.uam.cardealerproject.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.uam.cardealerproject.dto.CarDto;
import org.uam.cardealerproject.entity.Car;
import org.uam.cardealerproject.entity.CarMark;
import org.uam.cardealerproject.entity.CarModel;
import org.uam.cardealerproject.exception.NotExistingCarException;
import org.uam.cardealerproject.exception.NotExistingCarModelException;
import org.uam.cardealerproject.repo.CarMarkRepository;
import org.uam.cardealerproject.repo.CarModelRepository;
import org.uam.cardealerproject.repo.CarRepository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Slf4j
public class CarService {
    private final CarRepository carRepository;
    private final CarModelRepository carModelRepository;
    private final CarMarkRepository carMarkRepository;

    @Autowired
    public CarService(CarRepository carRepository, CarModelRepository carModelRepository, CarMarkRepository carMarkRepository) {
        this.carRepository = carRepository;
        this.carModelRepository = carModelRepository;
        this.carMarkRepository = carMarkRepository;
    }

    public List<CarDto> getAllCars() {
        log.info("Getting all cars");
        return carRepository.findAll()
                .stream()
                .map(this::toCarDto)
                .collect(Collectors.toList());
    }

    public CarDto getById(Long id) {
        log.info("Getting car by id {id={}}", id);
        CarDto dto = null;
        final Optional<Car> carOptional = carRepository.findById(id);
        if (carOptional.isPresent()) {
            dto = toCarDto(carOptional.get());
        }
        return dto;
    }

    public CarDto createCar(CarDto carDto) {
        log.info("Creating car {carDto={}}", carDto);
        final CarModel carModel = carModelRepository.findByName(carDto.getCarModelName())
                .orElseThrow(() -> new NotExistingCarModelException(carDto.getCarModelName()));
        final Car savedCar = carRepository.save(toEntity(carDto, carModel));
        return toCarDto(savedCar);
    }

    @Transactional
    public CarDto updateCar(Long id, CarDto carDto) {
        log.info("Updating car {id={}}", id);
        final Car car = carRepository.findById(id).orElseThrow(() -> new NotExistingCarException(id));
        final CarModel carModel = carModelRepository.findByName(carDto.getCarModelName())
                .orElseThrow(() -> new NotExistingCarModelException(carDto.getCarModelName()));
        car.setCarModel(carModel);
        car.setColor(carDto.getCarColor());
        car.setPrice(carDto.getPrice());
        car.setUrl(carDto.getUrl());
        car.setShortInfo(carDto.getShortInfo());
        car.setLongInfo(carDto.getLongInfo());
        return toCarDto(car);
    }

    public List<String> getAllCarMarks() {
        log.info("Getting all car marks");
        return carMarkRepository.findAll()
                .stream()
                .map(CarMark::getName)
                .collect(Collectors.toList());
    }

    public List<String> getAllModelsByMarks(String markName) {
        log.info("Getting car model for mark={}", markName);
        return carModelRepository.findAllByCarMarkName(markName.toUpperCase())
                .stream()
                .map(CarModel::getName)
                .collect(Collectors.toList());
    }

    public void deleteById(Long id) {
        log.info("Deleting car by id {id={}}", id);
        carRepository.deleteById(id);
    }

    private CarDto toCarDto(Car car) {
        return CarDto.builder()
                .id(car.getId())
                .carColor(car.getColor())
                .carMarkName(car.getCarModel().getCarMark().getName())
                .carModelName(car.getCarModel().getName())
                .price(car.getPrice())
                .url(car.getUrl())
                .shortInfo(car.getShortInfo())
                .longInfo(car.getLongInfo())
                .build();
    }

    private Car toEntity(CarDto dto, CarModel carModel) {
        return Car.builder()
                .price(dto.getPrice())
                .color(dto.getCarColor())
                .carModel(carModel)
                .url(dto.getUrl())
                .shortInfo(dto.getShortInfo())
                .longInfo(dto.getLongInfo())
                .build();
    }

}
