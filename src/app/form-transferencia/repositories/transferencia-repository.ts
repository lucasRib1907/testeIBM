import { ContaModel, ContaModelList } from './../models/conta.model';
import { catchError, Observable, retry } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TransferirModel } from '../models/transferir.model';

@Injectable()
export class TransferenciaRepositoty {

  constructor(
    private httpClient: HttpClient,
  ) { };

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  public buscaContas(urlBuscaContas: string): Observable<ContaModelList> {
    return this.httpClient.get<ContaModelList>(urlBuscaContas)
      .pipe(
        retry(1)
      )
  }

  public efetuaTransferencia(urlEfetuaTransaferencia: string, transferir: TransferirModel): Observable<any> {
    return this.httpClient.put<any>(urlEfetuaTransaferencia, JSON.stringify(transferir), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  public handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return errorMessage;
  };
}
