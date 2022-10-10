import { UsuarioModel } from './usuario.model';

export class ContaModel {
  idConta!: string;
  usuario!: UsuarioModel;
  saldo!: string;
}

export class ContaModelList {
  contaModelList: Array<ContaModel> = [];
}
