import {Component, OnInit, inject} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Cliente} from './cliente';
import {ClienteService} from '../cliente.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgxMaskDirective, provideNgxMask} from 'ngx-mask';
import {BrasilapiService} from '../brasilapi.service';
import {Estado, Municipio} from '../brasil.models';
import {MatSelectChange, MatSelectModule} from '@angular/material/select';
import {NgForOf} from '@angular/common';


@Component({
  selector: 'app-cadastro',
  imports: [
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    NgxMaskDirective,
    MatSelectModule,
    NgForOf
  ],
  providers: [provideNgxMask()],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent implements OnInit {

  cliente: Cliente = Cliente.newCliente();
  actualization: boolean = false;
  snackBar: MatSnackBar = inject(MatSnackBar);
  estados: Estado[] = [];
  municipios: Municipio[] = [];

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router,
    private brasilApiService: BrasilapiService
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
            if(this.cliente.uf){
              const event = { value: this.cliente.uf} as MatSelectChange;
              this.loadCities(event);
            }
          }
        }
      });

    this.loadUfs();

  }

  singUpCliente() {
    if (!this.actualization) {
      this.clienteService.singUpCliente(this.cliente);
      this.cliente = Cliente.newCliente();
      this.openSnackBar("Cliente cadastrado com sucesso!");
      this.router.navigate(['/consulta']);
    } else {
      this.clienteService.updateCliente(this.cliente);
      this.router.navigate(['/consulta']);
      this.openSnackBar("Cliente atualizado com sucesso!");
    }
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, "Ok");
  }

  loadUfs() {
    //observable        subscriber
    console.log('Carregando estados...');
    this.brasilApiService.listUfs().subscribe({
      //se der certo
      next: listaEstados => this.estados = listaEstados,
      //se der erro
      error: err => console.error('Erro ao carregar estados:', err)
    })
  }

  loadCities(event: MatSelectChange) {
    const ufSelect = event.value;
    console.log('Carregando municípios para o estado:', ufSelect);
    this.brasilApiService.listCities(ufSelect).subscribe({
      next: listaMunicipios => {
        this.municipios = listaMunicipios;
      },
      error: err => console.error('Erro ao carregar municípios:', err)
    })

  }
}
