import { Pipe, PipeTransform } from '@angular/core';
import { Casa } from '../model/casa';


@Pipe({
  name: 'filterCasa'
})
export class FilterCasa implements PipeTransform {

  
  transform(  items : Casa[], 
              searchText: string, 
              modo: number = 2,  // todos
              precioMin: number = 0 ,
              precioMax : number 

            ): Casa[] {

    console.log('FilterCasa: \nmodo=%s \nprecioMin=%s \nprecioMax=%s \nsearchText=%s', 
                modo, 
                precioMin,
                precioMax,
                searchText);
  
    
    if(!items) return [];
    //duplicar, CUIDADO no copiar !!  
    let casasResultado = items.slice();


    //Filtro Modo: Alquiler(0), Venta(1) o Todos(2)          
    console.log('antes filtro');
    if( modo == 0 ){            
      casasResultado = casasResultado.filter( c =>{      
        return ( c.alquiler );
      });
    }          
    console.log('despues filtro');

    if( modo == 1 ){            
      casasResultado = casasResultado.filter( c =>{      
        return ( !c.alquiler );
      });
    }          


    //Filtro por Precio    
    if ( precioMin && precioMin >= 0 && precioMax <= 999999999 ){      
      casasResultado = casasResultado.filter( c=>{
        return ( precioMin <= c.precio && precioMax >= c.precio );
      });
    }
    
    //filtro por nombre y direccion
    if ( !searchText ){
      return casasResultado;
    }

    searchText = searchText.toLowerCase();
    let busqueda = "";
    return casasResultado.filter( it => {
        busqueda = it.nombre + " " + it.direccion;        
        busqueda = busqueda.toLowerCase();
        return busqueda.includes(searchText);
    });
   


   }

}