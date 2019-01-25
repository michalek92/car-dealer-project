package org.uam.cardealerproject.exception;

public class NotExistingCarMarkException extends RuntimeException {
    public NotExistingCarMarkException(String name) {
        super(String.format("Car mark with name=%s doesn't exist", name));
    }
}
