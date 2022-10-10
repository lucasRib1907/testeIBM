package com.testeIBM.transferencia.service.impl;

import com.testeIBM.transferencia.model.Conta;
import com.testeIBM.transferencia.model.Transferir;
import com.testeIBM.transferencia.model.Usuario;
import com.testeIBM.transferencia.service.IContaService;
import java.util.ArrayList;

public class ContaServiceImpl implements IContaService {
    ArrayList<Conta> contas;
    @Override
    public double transferencia(Transferir dto) {
        for (int i = 0; i <= this.contas.size(); i++) {
            if(dto.getIdOrigem() == this.contas.get(i).getIdConta()) {
                if(this.contas.get(i).getSaldo() < Double.parseDouble(dto.getValor())){
                    return -1;
                } else {
                    double saldoOrigem = this.contas.get(i).getSaldo();
                    saldoOrigem = saldoOrigem - Double.parseDouble(dto.getValor());
                    this.contas.get(i).setSaldo(saldoOrigem);

                    for (int j = 0; j <= this.contas.size(); j++){
                        if(dto.getIdDestino() == this.contas.get(i).getIdConta()) {
                            double saldoDestino = this.contas.get(i).getSaldo();
                            saldoDestino = saldoDestino + Double.parseDouble(dto.getValor());
                            this.contas.get(i).setSaldo(saldoDestino);
                        }
                    }
                    return 1;
                }
            }
        }
        return 0;
    }

    public ArrayList<Conta> listaContas() {
        if(contas == null || contas.isEmpty()) {
            Conta conta = new Conta();
            conta.setIdConta("1000");
            conta.setSaldo(10000);
            Usuario usuario = new Usuario();
            usuario.setIdUsuario("1000");
            usuario.setNome("João Paulo");
            usuario.setCpf("12345678900");
            usuario.setDataNascimento("01/01/2000");
            conta.setUsuario(usuario);
            contas.add(conta);

            conta.setIdConta("2000");
            conta.setSaldo(20000);
            usuario.setIdUsuario("2000");
            usuario.setNome("José Santos");
            usuario.setCpf("98765432100");
            usuario.setDataNascimento("30/12/2000");
            conta.setUsuario(usuario);
            contas.add(conta);
        }

        return contas;
    }
}
