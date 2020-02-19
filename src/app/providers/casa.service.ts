import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Casa } from '../model/casa';
import { GLOBAL } from '../GLOBAL';

@Injectable()
export class CasaService {

  constructor(public http: HttpClient) { 
    console.log('CasaService CasaService');
  }

  getTodos():Observable<any>{  
    let url = GLOBAL.endpoint + '/casas';
    console.log(`CasaService getTodos ${url}`);
    return this.http.get(url);
  }
  

}
