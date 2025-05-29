import {Component, OnInit} from '@angular/core';
import {MatInputModule} from '@angular/material/input'
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {ClienteService} from '../cliente.service';
import {Cliente} from '../cadastro/cliente';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-consulta',
  imports: [
    MatInputModule, // Importing MatInputModule for input fields
    MatCardModule, // Importing MatCardModule for card layout
    FlexLayoutModule, // Importing FlexLayoutModule for responsive design
    MatIconModule, // Importing MatIconModule for icons
    FormsModule,// Importing FormsModule for template-driven forms
    MatTableModule,
    MatButtonModule,
    CommonModule
// Importing MatTableModule for displaying data in a table
  ],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.scss'
})
export class ConsultaComponent implements OnInit {

  //List<Cliente> listaClientes = new Array<Cliente>();
  listaClientes: Cliente[] = [];
  colunas: string[] = ['id', 'nome', 'cpf', 'dataNascimento', 'email'];//especificando as colunas que serao exibidas na tabela

  constructor(private service: ClienteService) {
  }

  ngOnInit() {
    this.listaClientes = this.service.getCliente("");
  }
}
