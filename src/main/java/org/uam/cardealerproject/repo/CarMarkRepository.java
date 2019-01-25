package org.uam.cardealerproject.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.uam.cardealerproject.entity.CarMark;

import java.util.Optional;

public interface CarMarkRepository extends JpaRepository<CarMark, Long> {
    Optional<CarMark> findByName(String name);
}
