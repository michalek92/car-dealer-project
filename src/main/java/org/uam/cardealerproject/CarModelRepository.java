package org.uam.cardealerproject;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CarModelRepository extends JpaRepository<CarModel, Long> {
    CarModel findByName(String carModelName);
}
