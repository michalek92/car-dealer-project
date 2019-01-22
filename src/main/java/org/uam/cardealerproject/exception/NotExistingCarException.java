package org.uam.cardealerproject.exception;

public class NotExistingCarException extends RuntimeException {
    public NotExistingCarException(Long id) {
        super(String.format("Car with id=%s doesn't exist", id));
    }
}
