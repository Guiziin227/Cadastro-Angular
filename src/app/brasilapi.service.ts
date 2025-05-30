import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Estado} from './brasil.models';

@Injectable({
  providedIn: 'root'
})
export class BrasilapiService {

  baseUrl: string = 'https://brasilapi.com.br/api';

  constructor(private http: HttpClient) { }

  listUfs(): Observable<Estado[]> {
    return this.http.get<Estado[]>(`${this.baseUrl}/ibge/uf/v1`);
  }
}
