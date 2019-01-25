package org.uam.cardealerproject.exception;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
@Slf4j
public class ExceptionController {
    @ExceptionHandler(NotExistingCarException.class)
    public ResponseEntity handleNotExistingCarException(NotExistingCarException e) {
        log.info("Handling exception: {}", e);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
    }

    @ExceptionHandler(NotExistingCarModelException.class)
    public ResponseEntity handleNotExistingCarModelException(NotExistingCarModelException e) {
        log.info("Handling exception: {}", e);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
    }

    @ExceptionHandler(NotExistingCarMarkException.class)
    public ResponseEntity handleNotExistingCarMarkException(NotExistingCarMarkException e) {
        log.info("Handling exception: {}", e);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
    }

}
