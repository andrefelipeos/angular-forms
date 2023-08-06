import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  private CEP_API_URL: string = 'https://viacep.com.br/ws/'

  constructor(private httpClient: HttpClient) { }

  getCepInfoJson(cep: string): Observable<any> {
    return this.httpClient.get(`${this.CEP_API_URL}${cep}/json`);
  }

}
