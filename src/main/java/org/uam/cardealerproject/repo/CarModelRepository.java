package org.uam.cardealerproject.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.uam.cardealerproject.entity.CarModel;

import java.util.List;
import java.util.Optional;

public interface CarModelRepository extends JpaRepository<CarModel, Long> {
    Optional<CarModel> findByName(String carModelName);

    List<CarModel> findAllByCarMarkName(String carMarkName);
}
