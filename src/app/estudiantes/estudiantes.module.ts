import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { EstudiantesRoutingModule } from '../estudiantes/estudiantes-routing.module';
import { MaterialModule } from '../shared/material/material.module';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { EstudianteComponent } from './pages/estudiante/estudiante.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';




@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    EstudianteComponent,
    HomeComponent,
    ListadoComponent,
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    EstudiantesRoutingModule
  ]
})
export class EstudiantesModule { }
