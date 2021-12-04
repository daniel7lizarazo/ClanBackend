import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { RegistrarInmueblesService } from './registrar-inmuebles.service';

@Component({
  selector: 'app-registrar-inmuebles',
  templateUrl: './registrar-inmuebles.component.html',
  styleUrls: ['./registrar-inmuebles.component.css', '../../assets/css/bootstrap.min.css','../../assets/css/font-awesome.min.css','../../assets/css/bootstrap-theme.css','../../assets/css/style.css','../../assets/css/camera.css']
})
export class RegistrarInmueblesComponent implements OnInit {

  constructor(private service: RegistrarInmueblesService) { }

  ngOnInit(): void {
  }

  registrarInmuebles()
  {
    let inmueble={
      nombre: ((document.getElementById("nombre"))as HTMLInputElement).value,
      tipo: ((document.getElementById("tipo"))as HTMLInputElement).value,
      numeroHabitaciones: ((document.getElementById("numeroHabitaciones"))as HTMLInputElement).value,
      imagen: ((document.getElementById("imagen"))as HTMLInputElement).value,
      ubicacion: ((document.getElementById("ubicacion"))as HTMLInputElement).value,
      precio: ((document.getElementById("precio"))as HTMLInputElement).value
    }

    this.service.registrarInmuebles(inmueble)
  }

}