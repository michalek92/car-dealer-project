package org.uam.cardealerproject.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.uam.cardealerproject.entity.CarModel;

public interface CarModelRepository extends JpaRepository<CarModel, Long> {
    CarModel findByName(String carModelName);
}
