package com.testeIBM.transferencia.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import java.io.Serializable;

@Entity
@Getter
@Setter
public class Transferir implements Serializable {
    private String valor;
    private String idOrigem;
    private String idDestino;
    private String dataTransferencia;
}
