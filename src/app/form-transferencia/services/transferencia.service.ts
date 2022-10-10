import { ContaModelList } from './../models/conta.model';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ContaModel } from '../models/conta.model';
import { TransferenciaRepositoty } from './../repositories/transferencia-repository';
import { Injectable } from '@angular/core';
import { TransferirModel } from '../models/transferir.model';

@Injectable()
export class TransferenciaService {

  public valor: string = '';
  public idOrigem: string = '';
  public idDestino: string = '';
  public urlEfetuaTransaferencia = 'http://localhost:8080/transferencia/tranferir';
  public urlBuscaContas = 'http://localhost:8080/transferencia/contas';

  constructor(
    private readonly transferenciaRepositoty: TransferenciaRepositoty,
  ){ }

  public buscaContas(): Observable<Array<ContaModel>> {
    return this.transferenciaRepositoty.buscaContas(this.urlBuscaContas)
      .pipe(
        map((response: ContaModelList) => this.retornaListaContas(response)),
        catchError((error) => {
          return throwError(error);
        })
      )
  }

  public efetuaTransferencia(transferir: TransferirModel): Observable<any> {
    return this.transferenciaRepositoty.efetuaTransferencia(this.urlEfetuaTransaferencia, transferir)
      .pipe(
        map((response: any) => {
          return 'OK';
        }),
        catchError((error) => {
          return throwError(error);
        })
      )

  }

  private retornaListaContas(response: ContaModelList): Array<ContaModel> {
    const listaContaModel: Array<ContaModel> = [];
    if(response.contaModelList) {
      response.contaModelList.forEach((item) => {
        const contaModel = new ContaModel();
        contaModel.idConta = item.idConta;
        contaModel.usuario.idUsuario = item.usuario.idUsuario;
        contaModel.usuario.nome = item.usuario.nome;
        contaModel.usuario.cpf = item.usuario.cpf;
        contaModel.usuario.dataNascimento = item.usuario.dataNascimento;
        contaModel.saldo = "R$ " + this.formataSaldo(item.saldo);
      });
    }
    return listaContaModel;
  }

  private formataSaldo(saldo: string): string {
    let s = saldo.replace(/\D+/g, "");
    let num = (parseFloat(s) / 100).toFixed(2);
    s = num.toString().replace(".", ",");
    return s;
  }
}
