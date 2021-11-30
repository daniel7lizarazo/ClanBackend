import { Component, OnInit } from '@angular/core';
import { RegistrarUsuariosService } from './registrar-usuarios.service';

@Component({
  selector: 'app-registrar-usuairos',
  templateUrl: './registrar-usuairos.component.html',
  styleUrls: ['./registrar-usuairos.component.css', '../../assets/css/bootstrap.min.css','../../assets/css/font-awesome.min.css','../../assets/css/bootstrap-theme.css','../../assets/css/style.css','../../assets/css/camera.css']
})
export class RegistrarUsuairosComponent implements OnInit {

  constructor(private service: RegistrarUsuariosService) { }

  ngOnInit(): void {
    this.service.getUsuarios()
  }

}
