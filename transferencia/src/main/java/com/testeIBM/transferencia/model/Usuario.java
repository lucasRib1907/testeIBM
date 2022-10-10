package com.testeIBM.transferencia.model;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.Entity;
import java.io.Serializable;

@Entity
@Getter
@Setter
public class Usuario implements Serializable {

    private String idUsuario;
    private String nome;
    private String cpf;
    private String dataNascimento;
}
