import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
})
export class BodyComponent {

  mostrar = true;
  mensaje = {
    autor: "Jose Luis Gomez",
    mensaje: "Si hay que hacerlo, hazlo"
  };

  personajes: string[] = ['jose luis', 'luis jose','joseluis'];

}
