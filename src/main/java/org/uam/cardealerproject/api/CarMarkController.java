package org.uam.cardealerproject.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.uam.cardealerproject.dto.CarMarkDto;
import org.uam.cardealerproject.dto.CarModelDto;
import org.uam.cardealerproject.service.CarService;

import java.util.List;

@RestController
@CrossOrigin(maxAge = 3600)
@RequestMapping("/marks")
public class CarMarkController {
    private final CarService carService;

    @Autowired
    public CarMarkController(CarService carService) {
        this.carService = carService;
    }

    @PostMapping
    public CarMarkDto createCarMark(@RequestBody CarMarkDto markDto) {
        return carService.createCarMark(markDto);
    }

    @PostMapping("/{mark}")
    public CarModelDto createCarModel(@PathVariable String mark, @RequestBody CarModelDto modelDto) {
        return carService.createCarModel(mark, modelDto);
    }

    @GetMapping
    public List<String> getAllCarMarks() {
        return carService.getAllCarMarks();
    }

    @GetMapping("/{mark}/models")
    public List<String> getAllModelsByMarks(@PathVariable String mark) {
        return carService.getAllModelsByMarks(mark);
    }
}
