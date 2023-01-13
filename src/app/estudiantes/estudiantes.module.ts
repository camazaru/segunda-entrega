import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from './pages/pages.module';
import { InterEstudiantes } from './interfaces/estudiantes.interface';

@NgModule({
  declarations: [
     
  ],
  imports: [
    CommonModule,
    PagesModule
  ],
  exports: [
     ]
})
export class EstudiantesModule { 

  
  estudiantesArray: InterEstudiantes[] = [
    {"id":1,
      "name":"Carlos",
      "nickname": "Carlos1",
      "password":"123",
      "age":43,
      "birthplace":"Coahuila",
      "status":"active",
      "gendre":"h",
      "rol":"ADMIN",
      "img": "1h",
      "cursos": []
      },
      {
      "id":2,
      "name":"Azucena",
      "nickname": "Azucena1",
      "password":"123",
      "age":31,
      "birthplace":"Jalisto",
      "status":"active",
      "gendre":"m",
      "rol":"USER",
      "img": "1m",
      "cursos": []
      
      },
      {"id":3,
      "name":"Chucho",
      "nickname": "Chucho1",
      "password":"123",
         "age":14,
      "birthplace":"Mazatlan, Sinaloa",
      "status":"active",
      "gendre":"h",
      "rol":"USER",
      "img": "2h",
      "cursos":[]
      
      },
      {
      "id":4,
      "name":"Diana",
      "nickname": "Diana1",
      "password":"123",
      "age":21,
      "birthplace":"Veracruz",
      "status":"active",
      "gendre":"m",
      "rol":"USER",
      "img": "2m",
      "cursos": []
       }
  ]

}
