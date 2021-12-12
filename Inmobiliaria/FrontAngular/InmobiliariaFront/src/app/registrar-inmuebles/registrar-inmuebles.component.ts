import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { RegistrarInmueblesService } from './registrar-inmuebles.service';

@Component({
  selector: 'app-registrar-inmuebles',
  templateUrl: './registrar-inmuebles.component.html',
  styleUrls: ['./registrar-inmuebles.component.css']
})
export class RegistrarInmueblesComponent implements OnInit {

  constructor(private service: RegistrarInmueblesService) { }

  image:any;

  ngOnInit(): void {
  }

  loadImages(event: any)
  {
    this.image = event.target.files[0];
    console.log(this.image)

  }

  registrarInmuebles()
  {
    let inmueble={
      nombre: ((document.getElementById("nombre"))as HTMLInputElement).value,
      tipo: ((document.getElementById("tipo"))as HTMLInputElement).value,
      numero_habitaciones: ((document.getElementById("numeroHabitaciones"))as HTMLInputElement).value,
      imagen: ((document.getElementById("imagen"))as HTMLInputElement).value,
      ubicacion: ((document.getElementById("ubicacion"))as HTMLInputElement).value,
      precio: ((document.getElementById("precio"))as HTMLInputElement).value
    }
    
    console.log(this.image)

    this.service.registrarInmuebles(inmueble)
  }

}