import { Pipe, PipeTransform } from '@angular/core';
import { Estudiante } from '../interfaces/estudiante.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform( estudiantes: Estudiante) : string {
    return `assets/estudiantes/${ estudiantes.img }.jpg`
  }

}
