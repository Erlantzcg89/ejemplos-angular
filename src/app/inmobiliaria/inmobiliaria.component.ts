import { Component, OnInit } from '@angular/core';
import { Casa } from '../model/casa';
import { CasaService } from '../providers/casa.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-inmobiliaria',
  templateUrl: './inmobiliaria.component.html',
  styleUrls: ['./inmobiliaria.component.scss']
})
export class InmobiliariaComponent implements OnInit {


  casas : Casa[];
  casaSelec : Casa;

  //Campos del Filtro
  searchText : string; 
  modo: number;
  precioMin : number;
  precioMax : number;

  constructor( private casaService: CasaService ) { 
    console.log('InmobiliariaComponent constructor');
    this.casas = [];   
  }

  ngOnInit() {
    console.log('InmobiliariaComponent ngOnInit');
    this.casaService.getTodos().subscribe( 
      resul=>{
        this.mapeo(resul);
        this.casaSelec = this.casas[0] || new Casa();
        this.modo = 2;  
        this.precioMin = 0;
        this.precioMax = 999999999;
         
      },
      error=>{
        alert('No se puede recupera las casas');
      }
    );


  }

  /** 
   * Controlar que el precio Maximo no sea inferior al minimo 
  */
  checkPrecio(){
    console.log('checkPrecio');
    this.precioMax = ( this.precioMax > this.precioMin )?this.precioMax:this.precioMin;
  }

  mapeo(jsonData: any): any {
    let casa : Casa;
    jsonData.forEach( json => {
       //casa = new Casa();
       //casa = casa.fromJson(c);   
       //this.casas.push( casa );
       this.casas.push(json);
    });
  }


  cambioCasa( casa: Casa){
    this.casaSelec = casa;
  }

}
