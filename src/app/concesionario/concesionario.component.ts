import { Component, OnInit, Input, Output,EventEmitter  } from '@angular/core';
import { Coche } from '../model/coche';
import { CochesService } from '../providers/coches.service';


@Component({
  selector: 'app-concesionario',
  templateUrl: './concesionario.component.html',
  styleUrls: ['./concesionario.component.scss']
})
export class ConcesionarioComponent implements OnInit {

  stock : Array<Coche>;  //Array casteado a Coche
  coche1 : Coche;
  coche2 : Coche;

  //inicializar los atributos
  constructor( public cochesService:CochesService ) {

    console.log('ConcesionarioComponent constructor');     

    this.coche1 = new Coche('coche1','',4);
    this.coche2 = new Coche('coche2','',4);
    this.stock = new Array<Coche>();

    /* estos datos nos los provee el Service
      this.stock.push( new Coche('Seat','Panda',3,'https://www.minicar.es/large/Fiat-Panda-%281980%29-RBA-Entrega-29-1%3A43-i33233.jpg') );
      this.stock.push( new Coche('Toyota','Verso',4,'https://www.supremeautomotivegroup.com/assets/stock/expanded/white/640/2017tos110001_640/2017tos110001_640_07.jpg') );
      this.stock.push( new Coche('Opel','Corsa',5) );
    */

  }

  //llamadas a los Services
  ngOnInit() {
    console.log('ConcesionarioComponent ngOnInit');    
    this.stock = this.cochesService.getAll();   

  }

  recibirCoche(event){
    console.log('ConcesionarioComponent: recibirCoche %o %i', event.coche , event.otroParametro);               
    this.coche2 = this.coche1;
    this.coche1 = event.coche;   
  }

}
