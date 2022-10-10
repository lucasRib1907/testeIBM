package com.testeIBM.transferencia.model;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.Entity;
import java.io.Serializable;

@Entity
@Getter
@Setter
public class Conta implements Serializable {

    private String idConta;
    private Usuario usuario;
    private double saldo;

}
