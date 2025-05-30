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

  getCliente(nome: string): Cliente[] {

    const clients = this.getStorageClientes();

    if (!nome) {
      return this.getStorageClientes();
    }

    return  clients.filter(cliente => cliente.nome?.toLowerCase().indexOf(nome.toLowerCase()) !== -1);

  }

  getClienteById(id: string): Cliente | undefined {
    const clients = this.getStorageClientes();
    return clients.find(cliente => cliente.id === id);
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

  updateCliente(cliente: Cliente) {
    const storage = this.getStorageClientes();
    for(let c of storage) {
      if(c.id === cliente.id){
        Object.assign(c, cliente);
      }
    }
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage));
  }

  deleteCliente(cliente: Cliente) {
    const storage = this.getStorageClientes();

    const newList = storage.filter(c => c.id !== cliente.id);

    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(newList));
  }
}
