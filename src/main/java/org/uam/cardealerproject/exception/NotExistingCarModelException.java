package org.uam.cardealerproject.exception;

public class NotExistingCarModelException extends RuntimeException {
    public NotExistingCarModelException(String name) {
        super(String.format("Car model with name=%s doesn't exist", name));
    }
}
