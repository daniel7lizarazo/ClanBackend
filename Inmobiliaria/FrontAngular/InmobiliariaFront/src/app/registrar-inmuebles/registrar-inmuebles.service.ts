import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Data } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class RegistrarInmueblesService  {

  image:any
  constructor(private http: HttpClient) { }

  registrarInmuebles(inmueble:Data)
  {
    return this.http.post("http://localhost:3000/insertinmueble", inmueble)
  }

  uploadImage(image:any)
  {
    const formData = new FormData()
    formData.append('image',image)

    return this.http.post("http://localhost:3000/uploadFile", formData)
    /*this.http.post("http://localhost:3000/uploadFile", formData).subscribe(data=>{
      this.image = data
    })
    return this.image*/
  }
}
