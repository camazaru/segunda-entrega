import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './agregar/agregar.component';
import { BuscarComponent } from './buscar/buscar.component';
import { HomeComponent } from './home/home.component';
import { ListadoComponent } from './listado/listado.component';
import { ModificarComponent } from './modificar/modificar.component';
import { ErrorComponent } from './error/error.component';
import { AuthModule } from 'src/app/auth/auth.module';




@NgModule({
  declarations: [
   AgregarComponent,
  BuscarComponent,
HomeComponent,
ListadoComponent,
ModificarComponent,
ErrorComponent,

],
  imports: [
    CommonModule,
    AuthModule,
   
  ], exports:[
    AgregarComponent,
    BuscarComponent,
    ModificarComponent,
  HomeComponent,
  ListadoComponent,
  ]
})
export class PagesModule { }
