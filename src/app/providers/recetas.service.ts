import { Injectable } from '@angular/core';
import { Receta } from '../model/receta';
// Importar objetos de la librería http
import {HttpClient, HttpHeaders} from '@angular/common/http';
// Importar la clase Observable desde la librería rxjs
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from '../GLOBAL';




@Injectable()
export class RecetasService {


  constructor( private http: HttpClient ) { 
    console.log('RecetasService constructor');
  }


  getAll(): Observable<any>{
    let url = `${GLOBAL.endpoint}/recetas`;
    console.log(`RecetasService getAll ${url}`);    
    return this.http.get(url);
    
  }

  /**
   * Crear Nueva Receta
   * @param receta : Receta nueva
   */
  crear( receta: Receta ):void{
    console.log('RecetasService crear %o', receta );
    //this.recetas.unshift(receta);
  }

  

}
