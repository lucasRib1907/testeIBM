package com.testeIBM.transferencia.controller;

import com.testeIBM.transferencia.model.Conta;
import com.testeIBM.transferencia.model.Transferir;
import com.testeIBM.transferencia.service.IContaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;

@Controller
@RestController
@RequestMapping("transferencia")
public class ContaController {
    @Autowired
    private IContaService contaService;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping(value = "/contas", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> contas() {

        ArrayList<Conta> contas = contaService.listaContas();
        return new ResponseEntity<>(contas, HttpStatus.OK);
    }

    @ResponseStatus(HttpStatus.OK)
    @PutMapping(value = "/tranferir", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> tranferir(@RequestBody Transferir dto){

        this.contaService.transferencia(dto);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
