import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Data } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class RegistrarInmueblesService  {

  constructor(private http: HttpClient) { }

  registrarInmuebles(inmueble:Data)
  {
    this.http.post("http://localhost:3000/insertinmueble", inmueble).subscribe(data=>
    console.log(data))
  }
}
