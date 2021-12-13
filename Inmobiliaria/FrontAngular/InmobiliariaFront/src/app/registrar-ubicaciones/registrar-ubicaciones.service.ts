import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegistrarUbicacionesService {

  constructor(private http: HttpClient) { }

  registrarUbicaciones(ubicacion:Data) {
    return this.http.post("http://localhost:3000/insertubicacion", ubicacion)
  }

}


