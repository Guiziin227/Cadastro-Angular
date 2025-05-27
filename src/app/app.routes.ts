import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: 'cadastro', loadComponent: () => import('./cadastro/cadastro.component').then(m => m.CadastroComponent)},
  {path: 'consulta', loadComponent: () => import('./consulta/consulta.component').then(m => m.ConsultaComponent)},
];
