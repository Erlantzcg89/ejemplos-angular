import { Component, OnInit } from '@angular/core';

import { Receta } from '../model/receta';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.scss']
})
export class RecetaComponent implements OnInit {

  //atributos  
  receta : Receta;
  show: boolean;
  glyphicon: string;

  constructor() { 
    console.log('RecetaComponent constructor');

    //crear receta
    this.receta = new Receta('Marmitako', 'Karlos Argiñano');
    this.receta.imagen = 'https://www.hogarmania.com/archivos/201709/6019-1-marmitako-xl-848x477x80xX.jpg';
    this.receta.descripcion = 'Marmitako de Bonito o Atún. Hoy veremos como hacer un Marmitako en casa, una receta tradicional vasca muy típica del verano que es cuando se captura el bonito.';

    //ingredientes
    this.receta.addIngrediente('patatas');
    this.receta.addIngrediente('bonito');
    this.receta.addIngrediente('pimiento verde');
    this.receta.addIngrediente('aceite');
    this.receta.addIngrediente('pimiento choricero');

    this.show = false;
    this.glyphicon = 'glyphicon-chevron-down';
  }

  ngOnInit() {
    console.log('RecetaComponent ngOnInit');
  }


  sumarLike(){
    console.log('Click sumarLike');
    this.receta.likes++;
  }

  showIngredientes(){
    console.log('Click showIngredientes');
    this.show = !this.show;
    this.glyphicon = ( this.show )?'glyphicon-chevron-up':'glyphicon-chevron-down';
  }


}
