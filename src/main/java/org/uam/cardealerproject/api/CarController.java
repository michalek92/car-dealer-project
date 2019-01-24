package org.uam.cardealerproject.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.uam.cardealerproject.dto.CarDto;
import org.uam.cardealerproject.service.CarService;

import java.util.List;

@RestController
@CrossOrigin(maxAge = 3600)
@RequestMapping("/cars")
public class CarController {
    private final CarService carService;

    @Autowired
    public CarController(CarService carService) {
        this.carService = carService;
    }

    @GetMapping
    public List<CarDto> getAll() {
        return carService.getAllCars();
    }

    @GetMapping("{id}")
    public CarDto getById(@PathVariable Long id) {
        return carService.getById(id);
    }

    @PostMapping
    public CarDto createCar(@RequestBody CarDto car) {
        return carService.createCar(car);
    }

    @PutMapping("{id}")
    public CarDto updateCar(@PathVariable Long id, @RequestBody CarDto car) {
        return carService.updateCar(id, car);
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteById(@PathVariable Long id) {
        carService.deleteById(id);
    }

    @GetMapping("/marks")
    public List<String> getAllCarMarks() {
        return carService.getAllCarMarks();
    }

    @GetMapping("/models/{mark}")
    public List<String> getAllModelsByMarks(@PathVariable String mark) {
        return carService.getAllModelsByMarks(mark);
    }
}
