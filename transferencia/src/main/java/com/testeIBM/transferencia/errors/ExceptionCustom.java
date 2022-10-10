package com.testeIBM.transferencia.errors;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NO_CONTENT)
public class ExceptionCustom extends RuntimeException{

    public ExceptionCustom(String message) {
        super(message);
    }

}
