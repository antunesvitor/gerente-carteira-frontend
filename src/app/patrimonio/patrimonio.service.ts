import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Posicao } from './models/posicao.model';

@Injectable({
  providedIn: 'root'
})
export class PatrimonioService {

  url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getPosicaoAcionaria() {

    return this.http.get<Posicao[]>(this.url + '/posicoes');
  }
}
