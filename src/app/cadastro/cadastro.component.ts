import {Component, OnInit} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {Cliente} from './cliente';
import {ClienteService} from '../cliente.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-cadastro',
  imports: [
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent implements OnInit {

  cliente: Cliente = Cliente.newCliente();
  actualization: boolean = false;

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.route.queryParamMap
      .subscribe(params => {
        const id = params.get('id');
        if (id) {
          let clienteExists = this.clienteService.getClienteById(id);
          if (clienteExists) {
            this.actualization = true;
            this.cliente = clienteExists;
          }
        }
      });
  }

  singUpCliente() {
    if (!this.actualization) {
      this.clienteService.singUpCliente(this.cliente);
      this.cliente = Cliente.newCliente();
    } else{
      this.clienteService.updateCliente(this.cliente);
      this.router.navigate(['/consulta']);
    }
  }
}
