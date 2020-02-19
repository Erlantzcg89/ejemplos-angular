import { Component, OnInit, Input } from '@angular/core';
import { Coche } from '../../model/coche';


@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.scss']
})
export class CocheComponent implements OnInit {
  
  //Parametro de Entrada desde el Componete Padre al Hijo
  @Input('c1') c1 : Coche; // coche para mostrar
  @Input('c2') c2 : Coche; // coche para comparar

  constructor() {
    console.log('CocheComponent constructor');
  }

  ngOnInit() {
    console.log('CocheComponent ngOnInit');
  }
 

}
