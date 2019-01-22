package org.uam.cardealerproject.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.uam.cardealerproject.entity.Car;

public interface CarRepository extends JpaRepository<Car, Long> {
}
