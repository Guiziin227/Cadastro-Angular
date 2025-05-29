import { Injectable } from '@angular/core';
import {Cliente} from './cadastro/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  static REPO_CLIENTES =  "_CLIENTES";

  constructor() { }

  singUpCliente(cliente: Cliente) {
    const storage = this.getStorageClientes();
    storage.push(cliente);
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage));
  }

  getCliente(nome: String): Cliente[] {
    return this.getStorageClientes();
  }

  private getStorageClientes(): Cliente[]{
    const repoClientes =  localStorage.getItem(ClienteService.REPO_CLIENTES);
    if(repoClientes){
      const clientes: Cliente[] = JSON.parse(repoClientes);
      return clientes;
    }

    const clientes: Cliente[] = [];
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(clientes));
    return clientes;
  }
}
