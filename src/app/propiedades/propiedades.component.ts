import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styleUrls: ['./propiedades.component.scss']
})
export class PropiedadesComponent implements OnInit {

  //atributos
  ocultar : boolean;
  color: string;
  enlace: string;

  constructor() {
     console.log('PropiedadesComponent constructor');
     this.ocultar = true;
     this.color = 'teal';
     this.enlace = 'https://angular.io/api';
  }

  ngOnInit() {
    console.log('PropiedadesComponent ngOnInit');
  }

}
