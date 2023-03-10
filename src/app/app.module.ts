import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthModule } from './auth/auth.module';
import { LayoutModule } from './layout/layout.module';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { MaterialModule } from './shared/material/material.module';
import { MatToolbarModule } from '@angular/material/toolbar';




@NgModule({
  declarations: [
    AppComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AuthModule,
    LayoutModule,
    EstudiantesModule,
    MatToolbarModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
     ]
})
export class AppModule { }
