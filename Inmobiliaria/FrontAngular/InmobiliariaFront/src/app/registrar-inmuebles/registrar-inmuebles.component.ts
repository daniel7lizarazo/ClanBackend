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

  }

  registrarInmuebles()
  {
    this.service.uploadImage(this.image).subscribe(data=>{
      this.image = data
    })
    console.log(this.image)
    let inmueble={
      nombre: ((document.getElementById("nombre"))as HTMLInputElement).value,
      tipo: ((document.getElementById("tipo"))as HTMLInputElement).value,
      numeroHabitaciones: ((document.getElementById("numeroHabitaciones"))as HTMLInputElement).value,
      imagen: "http://localhost:3000/Inmobiliaria_"+this.image.name,
      ubicacion: ((document.getElementById("ubicacion"))as HTMLInputElement).value,
      precio: ((document.getElementById("precio"))as HTMLInputElement).value
    }

    this.service.registrarInmuebles(inmueble).subscribe(data=>{
      if(data != null || data != undefined)
      {
        ((document.getElementById("nombre"))as HTMLInputElement).value="",
        ((document.getElementById("tipo"))as HTMLInputElement).value="",
        ((document.getElementById("numeroHabitaciones"))as HTMLInputElement).value="",
        ((document.getElementById("imagen"))as HTMLInputElement).value="",
        ((document.getElementById("ubicacion"))as HTMLInputElement).value="",
        ((document.getElementById("precio"))as HTMLInputElement).value=""
        
        alert("Inmueble agregado satisfactoriamente")
      }
    })
  }

}