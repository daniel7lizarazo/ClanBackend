import { Component, OnInit } from '@angular/core';
import { ConsultaInmueblesService } from './consulta-inmuebles.service';

@Component({
  selector: 'app-consulta-inmuebles',
  templateUrl: './consulta-inmuebles.component.html',
  styleUrls: ['./consulta-inmuebles.component.css']
})
export class ConsultaInmueblesComponent implements OnInit {

  constructor(private service: ConsultaInmueblesService) { }

  inmueblesSinFiltro:any

  ngOnInit(): void {
    this.service.consultatImuebles().subscribe(data=>{
      this.inmueblesSinFiltro = data
      console.log(this.inmueblesSinFiltro)

    })
  }

}
