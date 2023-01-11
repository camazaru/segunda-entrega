import { Component, Input } from '@angular/core';
import { Estudiante } from '../../interfaces/estudiante.interface';

@Component({
  selector: 'app-estudiantes-tarjeta',
  templateUrl: './estudiantes-tarjeta.component.html',
  styleUrls: ['./estudiantes-tarjeta.component.css']
})
export class EstudiantesTarjetaComponent {

  @Input() estudiante!: Estudiante;

}
