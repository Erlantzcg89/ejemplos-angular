import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Coche } from '../../model/coche';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  @Input('stockParametro') stock : Array<Coche>;
  //los parametros de salida se realizan a traves de Eventos
  @Output() eventoEmitir = new EventEmitter();

  //coches seleccionados
  c1:Coche;
  c2:Coche;

  //Criterio del buscador
  searchText:string;
 
  constructor() { }

  ngOnInit() {
  }

  /**
   * Funcion para Emitir el Evento desde el Hijo hacia el Padre
   */
  seleccionar( event, coche : Coche ){
    console.log('ListadoComponent Emitimos evento al ComponentePadre %o', coche );
    this.eventoEmitir.emit(  //event con 2 parametros
                              {
                                 "coche": coche ,
                                 "otroParametro" : 2018
                              }
                          );

     //actualizar coches seleccionados                           
     this.c2 = this.c1;                     
     this.c1 = coche;                     
  }
 

}
