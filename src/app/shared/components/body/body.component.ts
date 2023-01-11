import { Component} from '@angular/core';
import { Estudiante } from 'src/app/estudiantes/interfaces/estudiante.interface';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent{
  
estudiantesArray: Estudiante[] = [
  {"id":1,
    "name":"Carlos",
    "nickname": "Carlos1",
    "age":43,
    "birthplace":"Coahuila",
    "status":"active",
    "gendre":"h",
    "rol":"ADMIN",
    "img": "1h"
    },
    {"id":2,
    "name":"Azucena",
    "nickname": "Azucena1",
    "age":31,
    "birthplace":"Jalisto",
    "status":"active",
    "gendre":"m",
    "rol":"USER",
    "img": "1m"
    
    },
    {"id":3,
    "name":"Chucho",
    "nickname": "Chucho1",
       "age":14,
    "birthplace":"Mazatlan, Sinaloa",
    "status":"active",
    "gendre":"h",
    "rol":"USER",
    "img": "2h"
    
    },
    {"id":4,
    "name":"Diana",
    "nickname": "Diana1",
    "age":21,
    "birthplace":"Veracruz",
    "status":"active",
    "gendre":"m",
    "rol":"USER",
    "img": "2m"
    
    }
]

selectedEstudiantes: Estudiante = new Estudiante()
  estudiantesArray: any;

 openOrEdit(estudiantes: Estudiante){
  this.selectedEstudiantes= estudiantes;
 
}

addOrEdit() {
if(this.selectedEstudiantes.id === 0){
this.selectedEstudiantes.id = this.estudiantesArray.length +1;
this.estudiantesArray.push(this.selectedEstudiantes);

}

this.selectedEstudiantes = new Estudiante();
}


delete(){
if(confirm("Estas seguro de querer eliminarlo??")){
 this.estudiantesArray = this.estudiantesArray.filter(x => x != this.selectedEstudiantes);
 this.selectedEstudiantes = new Estudiante();
}

}


}

