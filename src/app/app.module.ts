import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './shared/components/body/body.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeadComponent } from './shared/components/head/head.component';
import { LateralComponent } from './shared/components/lateral/lateral.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { LoginComponent } from '../app/auth/pages/login/login.component';
import { RegistroComponent } from '../app/auth/pages/registro/registro.component';
import { EstudiantesTarjetaComponent } from './estudiantes/components/estudiantes-tarjeta/estudiantes-tarjeta.component';
import { AgregarComponent } from './estudiantes/pages/agregar/agregar.component';
import { BuscarComponent } from './estudiantes/pages/buscar/buscar.component';
import { HomeComponent } from './estudiantes/pages/home/home.component';
import { ListadoComponent } from './estudiantes/pages/listado/listado.component';
import { ImagenPipe } from './estudiantes/pipes/imagen.pipe';
import { EstudianteComponent } from './estudiantes/pages/estudiante/estudiante.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    FooterComponent,
    HeadComponent,
    LateralComponent,
    LoginComponent,
    RegistroComponent,
    EstudiantesTarjetaComponent,
    AgregarComponent,
    BuscarComponent,
    HomeComponent,
    ListadoComponent,
    ImagenPipe,
    EstudianteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
