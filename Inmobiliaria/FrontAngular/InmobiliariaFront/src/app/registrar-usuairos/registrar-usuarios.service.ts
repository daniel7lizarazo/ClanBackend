import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrarUsuariosService {

  constructor(private http: HttpClient) { }

  getUsuarios(){

    this.http.get("http://localhost:3000/usuarios-prueba",).subscribe(data=>
    console.log(data))
  }
}
