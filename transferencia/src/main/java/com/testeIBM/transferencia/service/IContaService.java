package com.testeIBM.transferencia.service;

import com.testeIBM.transferencia.model.Conta;
import com.testeIBM.transferencia.model.Transferir;

import java.util.ArrayList;

public interface IContaService {

    public ArrayList<Conta> listaContas();

    public double transferencia(Transferir dto);
}
