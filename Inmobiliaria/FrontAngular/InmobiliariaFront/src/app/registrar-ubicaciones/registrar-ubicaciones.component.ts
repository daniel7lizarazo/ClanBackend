import { Component, OnInit } from '@angular/core';
import { RegistrarUbicacionesService } from './registrar-ubicaciones.service';

@Component({
  selector: 'app-registrar-ubicaciones',
  templateUrl: './registrar-ubicaciones.component.html',
  styleUrls: ['./registrar-ubicaciones.component.css', '../../assets/css/bootstrap.min.css','../../assets/css/font-awesome.min.css','../../assets/css/bootstrap-theme.css','../../assets/css/style.css','../../assets/css/camera.css']
})
export class RegistrarUbicacionesComponent implements OnInit {

  constructor(private service: RegistrarUbicacionesService) {}

  ngOnInit(): void {
  }

  registrarUbicaciones()
  {
    let ubicacion = {
      departamento : ((document.getElementById("departamento")) as HTMLInputElement).value,
      ciudad : ((document.getElementById("ciudad")) as HTMLInputElement).value,
      zona : ((document.getElementById("zona")) as HTMLInputElement).value
    }
    
    this.service.registrarUbicaciones(ubicacion)
  }
}
