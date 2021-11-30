import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RegistrarUsuairosComponent } from './registrar-usuairos/registrar-usuairos.component';
import { RegistrarUsuariosService } from './registrar-usuairos/registrar-usuarios.service';
import { InicioComponent } from './inicio/inicio.component';
import { RegistrarUbicacionesComponent } from './registrar-ubicaciones/registrar-ubicaciones.component';
import { RegistrarInmueblesComponent } from './registrar-inmuebles/registrar-inmuebles.component';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';


const router: Routes=[
  {
    path : 'app-root',
    component : AppComponent 
  },
  {
    path : 'app-inicio',
    component : InicioComponent 
  },
  {
    path : '',
    redirectTo : 'app-inicio',
    pathMatch: 'full'
  },
  {
    path : 'app-registrar-usuairos',
    component : RegistrarUsuairosComponent 
  },
  {
    path : 'app-registrar-ubicaciones',
    component : RegistrarUbicacionesComponent 
  },
  {
    path : 'app-registrar-inmuebles',
    component : RegistrarInmueblesComponent 
  }
  
]

@NgModule({
  declarations: [
    AppComponent,
    RegistrarUsuairosComponent,
    InicioComponent,
    RegistrarUbicacionesComponent,
    RegistrarInmueblesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(router),
    HttpClientModule
    
  ],
  exports: [
    RouterModule
  ],
  providers: [
    RegistrarUsuariosService,
    HttpClient
    
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
