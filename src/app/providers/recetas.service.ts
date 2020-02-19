import { Injectable } from '@angular/core';
import { Receta } from '../model/receta';
// Importar objetos de la librería http
import { HttpClient, HttpHeaders } from '@angular/common/http';
// Importar la clase Observable desde la librería rxjs
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from '../GLOBAL';




@Injectable()
export class RecetasService {


  constructor(private http: HttpClient) {
    console.log('RecetasService constructor');
  }


  public getAll(): Observable<any> {
    let url = `${GLOBAL.endpoint}/recetas`;
    console.log(`RecetasService getAll ${url}`);


    return this.http.get(url);

  }

  /**
   * Crear Nueva Receta
   * @param receta : Receta nueva
   */
  public crear(receta: any): Observable<any> {
    console.log('RecetasService crear %o', receta);
    let url = `${GLOBAL.endpoint}/recetas`;
    return this.http.post<any>(url, receta);
    //this.recetas.unshift(receta);
  }



}
