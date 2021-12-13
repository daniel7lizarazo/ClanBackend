import { Component, OnInit } from '@angular/core';
import { RegistrarUbicacionesService } from './registrar-ubicaciones.service';

@Component({
  selector: 'app-registrar-ubicaciones',
  templateUrl: './registrar-ubicaciones.component.html',
  styleUrls: ['./registrar-ubicaciones.component.css']
})
export class RegistrarUbicacionesComponent implements OnInit {

  ubicaciones:any

  constructor(private service: RegistrarUbicacionesService) {}

  ngOnInit(): void {
    
  }

  registrarUbicaciones()
  {
    let ubica = {
      departamento: ((document.getElementById("departamento")) as HTMLInputElement).value,
      ciudad: ((document.getElementById("ciudad")) as HTMLInputElement).value,
      zona: ((document.getElementById("zona")) as HTMLInputElement).value
    }
    
    this.service.registrarUbicaciones(ubica).subscribe(data=>{
    if(data != null || data != undefined)
    {
      ((document.getElementById("departamento")) as HTMLInputElement).value="",
      ((document.getElementById("ciudad")) as HTMLInputElement).value="",
      ((document.getElementById("zona")) as HTMLInputElement).value="",

      alert("Ubicación agregada satisfactoriamente")
    }
    })
  }

  
}
