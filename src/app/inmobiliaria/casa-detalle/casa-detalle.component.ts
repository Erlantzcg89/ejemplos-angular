import { Component, OnInit, Input } from '@angular/core';
import { Casa } from '../../model/casa';

@Component({
  selector: 'app-casa-detalle',
  templateUrl: './casa-detalle.component.html',
  styleUrls: ['./casa-detalle.component.scss']
})
export class CasaDetalleComponent implements OnInit {

  @Input('casa') casa : Casa;

  constructor() { 
    console.log('CasaDetalleComponent constructor');
    this.casa = new Casa();
  }

  ngOnInit() {
    console.log('CasaDetalleComponent ngOnInit');
  }

}
