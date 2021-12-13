import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ConsultaInmueblesService {

  constructor(private http: HttpClient) {}

  consultatImuebles()
  {
    return this.http.get("http://localhost:3000/consultarInmuebles")
  }
}
