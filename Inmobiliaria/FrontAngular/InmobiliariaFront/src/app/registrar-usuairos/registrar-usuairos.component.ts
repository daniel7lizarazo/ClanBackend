import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { RegistrarUsuariosService } from './registrar-usuarios.service';

@Component({
  selector: 'app-registrar-usuairos',
  templateUrl: './registrar-usuairos.component.html',
  styleUrls: ['./registrar-usuairos.component.css']
})
export class RegistrarUsuairosComponent implements OnInit {

  usuarios:any
  
  constructor(private service: RegistrarUsuariosService) { }

  ngOnInit(): void {
    //this.usuarios = this.service.getUsuarios()
    this.service.getUsuarios().subscribe(data=>{this.usuarios = data})
    console.log(this.usuarios)
  }

  registrarUsuarios(){

    let user = {
      nombre:((document.getElementById("nombre")) as HTMLInputElement).value,
      documento:((document.getElementById("documento")) as HTMLInputElement).value,
      email:((document.getElementById("email")) as HTMLInputElement).value,
      usuario:((document.getElementById("usuario")) as HTMLInputElement).value,
      clave:((document.getElementById("clave")) as HTMLInputElement).value 
    }
 
    this.service.registrarUsuarios(user)

  }

  getUsuarios()
  {
    this.usuarios = this.service.getUsuarios()
    console.log(this.usuarios)
    //this.service.getUsuarios().(data => (this.usuarios = data))
  }

}
