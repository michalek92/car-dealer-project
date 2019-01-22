package org.uam.cardealerproject.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.uam.cardealerproject.entity.CarMark;

public interface CarMarkRepository extends JpaRepository<CarMark, Long> {
}
