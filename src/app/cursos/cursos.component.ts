import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CURSOS } from './curso.json';
CURSOS
Curso
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  // PROPIEDAD QUE - RECIBE UNA CLASE TIPO CURSO
  cursos?: Curso[];
  constructor() { }

  ngOnInit(): void {
    // SETEANDO VALORE A LA PROPIEDAD "this.cursos" con el JSON CURSOS
    this.cursos = CURSOS;
  }

}
