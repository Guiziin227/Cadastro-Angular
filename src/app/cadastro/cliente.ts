import {v4 as uuid} from 'uuid';

export class Cliente {
  id?: String;
  nome?: String;
  email?: String;
  cpf?: String;
  dataNascimento?: String;

  static newCliente() {
    const cliente = new Cliente();
    cliente.id = uuid();
    return cliente;
  }
}
