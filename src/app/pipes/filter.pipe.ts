import { Pipe, PipeTransform } from '@angular/core';
import { Coche } from '../model/coche';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  /**
   * Filtro para buscar en una coleccion de Coches. No es CaseSensitive.
   * @param stock : Coche[]
   * @param searchText : string con la marca o modelo del coche
   */
  transform(stock: Coche[], searchText: string): Coche[] {

    if(!stock) return [];
    if(!searchText) return stock;
    searchText = searchText.toLowerCase();
    let marcaModelo = "";
    return stock.filter( cocheIt => {
        marcaModelo = cocheIt.marca + " " + cocheIt.modelo;        
        marcaModelo = marcaModelo.toLowerCase();
        return marcaModelo.includes(searchText);
    });
   }

}