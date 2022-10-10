import { ContaModel } from './models/conta.model';
import { TransferenciaService } from './services/transferencia.service';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { TransferirModel } from './models/transferir.model';

@Component({
  selector: 'app-form-transferencia',
  templateUrl: './form-transferencia.component.html',
  styleUrls: ['./form-transferencia.component.css']
})
export class FormTransferenciaComponent implements OnInit {

  public contaModelList = new Array<ContaModel>();
  public transferir = new TransferirModel();
  public statusText = { severity: 'success', message: '-' };
  public valor = 0;
  public idOrigem = "";
  public idDestino = "";

  constructor(
    private readonly transferenciaService: TransferenciaService,
  ) { }

  ngOnInit(): void {
    this.buscaContas();
  }

  public buscaContas(): void {
    this.transferenciaService.buscaContas()
      .pipe(take(1))
      .subscribe((res: ContaModel[]) => {
        if(res){
          this.contaModelList = res;
        };
      })
  }

  public efetuaTransferencia(): void {
    this.transferir.idContaOrigem = this.contaModelList[0].idConta;
    this.transferir.idContaDestino = this.contaModelList[1].idConta;
    this.transferir.dataTransferencia = new Date();
    this.transferenciaService.efetuaTransferencia(this.transferir)
      .pipe(take(1))
      .subscribe((res) => {
        console.log('Transferecia efetuada com sucesso');
        this.buscaContas();
      }, (err) => {
        console.log('Erro ao efetuar transferencia: ' + err)
      })
  }
}
